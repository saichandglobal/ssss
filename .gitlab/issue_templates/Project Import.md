<!--
Set the title to: Project Import Request - GROUP_NAME: PROJECT_NAME
-->

## Import Details

- Import Time:
  - [ ] Scheduled for YYYY-MM-DD HH:MM UTC (note that Reliability needs 3 business days of lead time to accomodate scheduling.)
- Project File (tar.gz) Link:
- User to Import As:  <!-- For **Users Not Mapped**: Username of listed user in ticket; For **Users Mapped**, admin user provisioned in the AR -->
- Project Path:  <!-- The path for where the project should be imported to -->
- Zendesk Ticket:
- **[USERS MAPPED ONLY!]** Access Request Issue:

## To Do - Support

- [ ] Provided a non-public link to the project export.
- [ ] Provided the path for the project to be imported.
- [ ] **[USERS NOT MAPPED ONLY!]** Confirmed the customer has sufficient access to create a project in the target namespace.
- [ ] **[IF APPLICABLE]** Deleted the project export file once infrastructure has confirmed they have the file or started the import. Otherwise, reminded the requestor to delete the version of it that they shared through Zendesk.

### Users Mapped Only

- [ ] Created an [access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Single_Person_Access_Request) and linked it.
- [ ] Double checked the user list within the export file using [DCEF](https://gitlab.com/gitlab-com/support/toolbox/dcef) for addresses not on the requestor's company domain.
- [ ] Listed the emails of users contained within the import from DCEF below.

```
LIST_OF_EMAILS
```

## To Do - Production

- [ ] Make sure you have ssh access to a console VM (i.e. `knife search node -i 'roles:gprd-base-console-node'`)
- [ ] Download the project's tar.gz archive to your local computer (if it's possible, you can download the file directly on the console).
- [ ] scp the file to the console VM.
    - [ ] e.g. `scp <project_to_be_imported>.tar.gz console-01-sv-gprd.c.gitlab-production.internal:/tmp/<project_to_be_imported>.tar.gz`
- [ ] Make sure the file is accessible by the `git` user: `sudo -u git test -r /tmp/<project_to_be_imported>.tar.gz || echo 'git doesnt have access!'`
- [ ] Switch to **root**
- [ ] Start a **tmux** session with `sudo tmux`.
- [ ] Start the import:
    - [ ] If needed, you can enable logging of all SQL queries performed as part of the import job:
        - [ ] Check if there is enough space in `/var/log` with: `df -Th`
        - [ ] Enable logging: `export IMPORT_DEBUG='any_string_will_do'`
    - [ ] Run [the rake task](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/tasks/gitlab/import_export/import.rake), which synchronously runs the import in the foreground:
      `gitlab-rake "gitlab:import_export:import[<user_to_import_as>,<namespace>,<projectname>,<export_file>]" | tee /var/log/import.$(date +%Y-%m-%d_%H:%M).log`
    - for example: `gitlab-rake "gitlab:import_export:import[coyote,acme-corp,road-runner-monitor,/tmp/monitor_project_export.tar.gz]" | tee /var/log/import.$(date +%Y-%m-%d_%H:%M).log`
    - [ ] Upon completion, copy or attach the log file to this issue as a comment.
    - [ ] Check for errors.
      - **WARNING:** The import task may report success (`Done!`) even if there were errors during the import task.
      - Example: `Total number of not imported relations: 202` means that 202 SQL statements (e.g. INSERTs) failed to be imported.
      - See the "Troubleshooting" section below for tips on listing and classifying import errors.
- [ ] Exit the tmux session, remove the export file, remove the log file

### Troubleshooting

Large imports are prone to a variety of errors, many of which are not trivial to fix.
If you find import errors, summarize the outcome in the issue, so the customer can be notified and next steps can be assessed.

To view the error messages themselves, you can use either the Rails console or the DB console.

#### Viewing import failure messages via the Rails console

Connect to the Rails console.

```shell
$ ssh msmiley-rails@console-01-sv-gprd.c.gitlab-production.internal
Starting console, please wait ...
--------------------------------------------------------------------------------
 GitLab:       13.1.0-pre (270344d3970) EE
 GitLab Shell: 13.3.0
 PostgreSQL:   11.7
--------------------------------------------------------------------------------
Loading production environment (Rails 6.0.3.1)
```

Fetch the array of `ImportFailure` objects, filtering by `project_id`.

```ruby
[ gprd ] production> imperrs = ImportFailure.where(project_id: 12345678).order(:id)

[ gprd ] production> imperrs.count
=> 202

[ gprd ] production> imperrs.limit(2).each { |imperr| puts "#{imperr.id} : #{imperr.exception_class} : #{imperr.relation_key} : #{imperr.exception_message}" }
24501 : ActiveRecord::QueryCanceled : issues : PG::QueryCanceled: ERROR:  canceling statement due to statement timeout
24502 : ActiveRecord::QueryCanceled : issues : PG::QueryCanceled: ERROR:  canceling statement due to statement timeout
```

#### Viewing import failure messages via the DB console

Connect to the DB console (i.e. a postgres `psql` session).

```shell
$ ssh msmiley-db@console-01-sv-gprd.c.gitlab-production.internal
Starting console, please wait ...
psql (11.7)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.
```

Query the `import_failures` table, filtering by `project_id`.

Summarize the errors by table name and type of exception.

```sql
gitlabhq_production=# SELECT relation_key, exception_class, count(1)
FROM import_failures
WHERE project_id = 12345678
GROUP BY 1, 2
ORDER BY 1, 2
;
 relation_key  |          exception_class         | count
---------------+----------------------------------+-------
issues         |  ActiveRecord::InvalidForeignKey |    55
merge_requests |  ActiveRecord::InvalidForeignKey |    23
issues         |  ActiveRecord::QueryCanceled     |    83
merge_requests |  ActiveRecord::QueryCanceled     |    41
(4 rows)
```

Show the details of the first few errors in chronological order.

```sql
gitlabhq_production=# SELECT created_at, relation_key, exception_class, retry_count, source, exception_message
FROM import_failures
WHERE project_id = 12345678
ORDER BY 1
LIMIT 3
;
          created_at           | relation_key |         exception_class         | retry_count |         source         |                                                           exception_message
-------------------------------+--------------+---------------------------------+-------------+------------------------+----------------------------------------------------------------------------------------------------------------------------------------
 2020-06-04 22:06:19.82641+00  | issues       | ActiveRecord::QueryCanceled     |           1 | relation_object.save!  | PG::QueryCanceled: ERROR:  canceling statement due to statement timeout
 2020-06-04 22:07:04.789185+00 | issues       | ActiveRecord::QueryCanceled     |           1 | relation_object.save!  | PG::QueryCanceled: ERROR:  canceling statement due to statement timeout
 2020-06-04 22:07:07.23745+00  | issues       | ActiveRecord::InvalidForeignKey |           0 | process_relation_item! | PG::ForeignKeyViolation: ERROR:  insert or update on table "issue_user_mentions" violates foreign key constraint "fk_rails_3861d9fefa"
                               |              |                                 |             |                        | DETAIL:  Key (note_id)=(355679583) is not present in table "notes".
```

#### What to do about import errors

Import errors may be due to data defects.  These may require the customer to fix their exported data or accept the incomplete import results.
Or this may be a clue that the importer's expected schema is out of sync with the export file's schema.

Import errors may be due to timeouts in the database.  This may arise from lock contention or inefficient query plans during data import.
For example, during an INSERT, foreign key constraint checking may stall waiting for a lock held by an unrelated concurrently running transaction.
Automatic retry logic attempts to work around this, but it may fail.
Retrying the import at a different time of day (non-peak hours) may avoid timeouts and lock contention.

Retrying a failed import with a longer `statement_timeout` setting (or any other db session tuning) is difficult and dangerous, so it is *not recommended*.
Here are the main reasons why it should be avoided:
* The importer accesses the postgres database through the standard pgbouncer pool, which is configured to lease a db connection to a client
  for only the duration of a single transaction.
* Any `SET` statements run by the importer would be leaked into the shared connection pool after the importer's first `COMMIT`.
* Consequently it would unintentionally be applied to random other database clients and would no longer be applied to the importer.
* Side-effects would be difficult to trace, which is why we called this dangerous.

If we really have no other options than to attempt running the importer with custom db settings (e.g. `SET statement_timeout = '5m')`, then:
* Configure the importer to bypass the connection pool, instead connecting directly to the current primary db.
* This ensures the connection pool will not be tainted, and it allows any db session tuning to be scoped appropriately to the
  lifespan of the importer's db connection.
* However, be mindful that this tactic can still be unhealthy for the database as a whole.

/label ~"SRE:On-call" ~oncall ~import ~"workflow-infra::Triage" ~"team::Reliability" 
/assign @gitlab-com/gl-infra/managers 
/confidential
/due YYYY-MM-DD


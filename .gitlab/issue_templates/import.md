<!--
Set the title to: Import request (for group): [project]
-->

/due YYYY-MM-DD

#### Import on: YYYY-MM-DD HH:MM UTC
#### [Link to project](https://link.here)
#### Username: `user-to-import-as`
#### Project path: `fillout/thepath/here`
#### Access Request Issue (admin imports only): [link]()
#### Ticket: LINK

## Support
- [ ] Provide a temporary secret link to the export from the customer
- [ ] Confirm the customer has sufficient access to create a project in the namespace they want
- [ ] Provide the namespace/project path

If admin import:

- [ ] Fill out an [access request](https://gitlab.com/gitlab-com/access-requests/issues/new?issuable_template=New%20Access%20Request) and link it above.
- [ ] Check for any dodgy emails outside the customer's organization (such as @gitlab.com) using [export file user checker](https://gitlab.com/gitlab-com/support/toolbox/dcef).
- List the emails of users contained within the import here (or if it's >10 attach, add as a comment):

```
insert emails or remove this if not applicable
```

### Upon import start

- [ ] If applicable, delete import file once infra has confirmed they have the file or started the import. Otherwise, when sending an update, remind the customer to delete the shared file.

## Production

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
        - [ ] Logs will be written to stdout and tmux by default has only 2000 lines of scrollback, so append to the rake command: `| tee /var/log/import.$(date +%Y-%m-%d_%H:%M).log`
    - [ ] Run [the rake task](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/tasks/gitlab/import_export/import.rake), which synchronously runs the import in the foreground:
      `gitlab-rake "gitlab:import_export:import[<user_to_import_as>,<namespace>,<projectname>,<export_file>]"`
    - for example: `gitlab-rake "gitlab:import_export:import[coyote,acme-corp,road-runner-monitor,/tmp/monitor_project_export.tar.gz]"`
    - [ ] Upon completion, copy or attach the log file to this issue as a comment.
    - [ ] Check for errors.
      - **WARNING:** The import task may report success (`Done!`) even if there were errors during the import task.
      - Example: `Total number of not imported relations: 202` means that 202 SQL statements (e.g. INSERTs) failed to be imported.
      - The error messages themselves can be fetched via either another rails console session or via db console by SQL query.
        - Rails console:
          ```ruby
          [ gprd ] production> imperrs = ImportFailure.where(project_id: 19199833).order(:id)

          [ gprd ] production> imperrs.count
          => 202

          [ gprd ] production> imperrs.limit(2).each { |imperr| puts "#{imperr.id} : #{imperr.exception_class} : #{imperr.relation_key} : #{imperr.exception_message}" }
          24501 : ActiveRecord::QueryCanceled : issues : PG::QueryCanceled: ERROR:  canceling statement due to statement timeout
          24502 : ActiveRecord::QueryCanceled : issues : PG::QueryCanceled: ERROR:  canceling statement due to statement timeout
          ```
        - DB console:
          ```sql
          gitlabhq_production=# select * from import_failures where project_id = 19199833 order by id limit 3 ;
          ...

          gitlabhq_production=# select exception_class, relation_key, count(1) from import_failures where project_id = 19199833 group by 1, 2 order by 1, 2 ;
                   exception_class         |  relation_key  | count
          ---------------------------------+----------------+-------
           ActiveRecord::InvalidForeignKey | issues         |    55
           ActiveRecord::InvalidForeignKey | merge_requests |    23
           ActiveRecord::QueryCanceled     | issues         |    83
           ActiveRecord::QueryCanceled     | merge_requests |    41
          (4 rows)
          ```
- [ ] Exit the tmux session, remove the export file, remove the log file

/label ~oncall ~import ~"SRE:On-call"

/confidential

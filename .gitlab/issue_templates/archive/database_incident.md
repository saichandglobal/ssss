# Summary

<!-- Add a brief summary of the incident here, then remove this comment. -->

# Timeline of events

<!--

Here you should add the timeline of events, such as when the incident happened,
when action X was taken, etc.

-->

* XX:YY UTC: action X taken

# General

* [ ] Page a database engineer or specialist. To do so, run the `/pd-db` Slack
  slash command.
* [ ] Page a production engineer (if necessary). To do so, run the `/pd` Slack
  slash command.
* [ ] Added the ~database label and ~outage/~degradation to this issue.
* [ ] Pinged `@gl-database` in this issue.
* [ ] Tweeted about the incident (linking to this issue, if present on
  GitLab.com), and added link to the Tweet here: TWEET_LINK
* [ ] Started Zoom call (if necessary), and shared the link in the `#production`
  channel.

# Alert Details

* [ ] The name of the alert (`alertname` as reported by Prometheus): ALERT_NAME_HERE
* [ ] The message of the alert: ALERT_MESSAGE_HERE
* [ ] Affected host(s): HOST1, HOST2, etc
* [ ] Time of the alert: TIME_OF_ALERT_IN_UTC
* [ ] Alert severity: ALERT_SEVERITY
* [ ] Alert type: ALERT_TYPE

# Graphs

<!--

If there are any graphs related to the incident, add them here as either images
or regular links.

If there are none, remove this section (including the header).

-->

# PostgreSQL

<!--

If the incident does not affect PostgreSQL (e.g. it's pgbouncer specific),
remove this section, including the title.

Some of these checkboxes might not be necessary and can be removed. For example,
if a host was rebooted unexpected many of the below checkboxes are not
necessary.

When checkboxes say "The value of X does not exceed Y", make sure to add the
value if the threshold _is_ exceeded.

-->

* [ ] The PostgreSQL process is running on all hosts, as reported by
  `sudo gitlab-ctl status postgresql`
* [ ] You can start a console and run `SELECT 1` using `sudo gitlab-psql
  gitlabhq_production`
* [ ] The [number of PostgreSQL connections](https://performance.gitlab.net/dashboard/db/postgres-stats?panelId=29&fullscreen&orgId=1)
  on the affected host(s) does not exceed 300.
* [ ] The [number of transactions](https://performance.gitlab.net/dashboard/db/postgres-stats?panelId=5&fullscreen&orgId=1)
  does not exceed (roughly) 20 000 operations per second. If so, note down the
  highest observed number here.
* [ ] The [replication lag time](https://performance.gitlab.net/dashboard/db/postgres-stats?panelId=16&fullscreen&orgId=1)
  does not exceed 60 seconds.
* [ ] The [percentage of CPU used per host](https://performance.gitlab.net/dashboard/db/postgres-stats?panelId=13&fullscreen&orgId=1)
  does not exceed 50%
* [ ] The [load averages per host](https://performance.gitlab.net/dashboard/db/postgres-stats?panelId=9&fullscreen&orgId=1)
  do not exceed 20
* [ ] Added the value of "Health Past 24h" as reported by the
  [Postgres Stats](https://performance.gitlab.net/dashboard/db/postgres-stats?orgId=1)
  dashboard: VALUE_HERE
* [ ] Added the output of the repmgr status below
* [ ] Added the list of recent repmgr events below

### repmgr events

```
Replace the contents of this block with the output of the following SQL query:

SELECT *
FROM repmgr_gitlab_cluster.repl_events
WHERE event_timestamp > NOW() - INTERVAL '1 day'
ORDER BY event_timestamp DESC;
```

### repmgr cluster show

```
Replace the contents of this block with the output of the following command:

sudo gitlab-ctl repmgr cluster show
```

# Pgbouncer

<!--

If the incident does not affect pgbouncer (e.g. it's PostgreSQL specific),
remove this section, including the title.

-->

* [ ] The pgbouncer process is running on all hosts, as reported by
  `sudo gitlab-ctl status pgbouncer`.
* [ ] Added statistics output of pgbouncer below. This can be obtained by
  running `sudo gitlab-ctl pgb-console` on the affected hosts. The password can
  be found in the "Production" vault in 1Password.

## SHOW STATS

```
Add output of SHOW STATS here.
```

## SHOW POOLS

```
Add output of SHOW POOLS here.
```

## SHOW LISTS

```
Add output of SHOW LISTS here.
```

## SHOW DATABASES

```
Add output of SHOW DATABASES here.
```

/label ~database ~outage

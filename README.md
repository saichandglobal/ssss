# GitLab Infrastructure

[These are not the runbooks you are looking for](https://gitlab.com/gitlab-com/runbooks)

[Infrastructure Overview](overview.md)

## Where and how to look for data

### General System Health

#### Blackbox Monitoring

* [GitLab Web Status](http://performance.gitlab.net/dashboard/db/gitlab-web-status): front end perspective of GitLab. Useful to understand how GitLab.com looks from the user perspective. Use this graph to quickly troubleshoot what part of GitLab is slow.
* [GitLab Git Status](http://performance.gitlab.net/dashboard/db/gitlab-git-status): front end perspective of GitLab ssh access.

#### Public Whitebox Monitoring

We offer a monitoring infrastructure site that is publicly accessible.

This monitoring site is updated hourly with any change we make in the private one, so it is a 1:1 copy of the private dashboards.

There are some metrics that are not visible in this public site because we do not keep a copy of metrics obtained through influxdb.

* [Fleet overview](http://monitor.gitlab.net/dashboard/db/fleet-overview): useful to see the fleet status from the inside of GitLab.com. Use this graph to quickly see if the workers or the database are under heavy load, and to check load balancer bandwidth.
* [Postgres Stats](http://monitor.gitlab.net/dashboard/db/postgres-stats): useful to understand how is the database behaving in depth. Use this graph to review if we have spikes of exclusive locks, active or idle in transaction processes
* [Postgres Queries](http://monitor.gitlab.net/dashboard/db/postgres-queries) use this dashboard to understand if we have blocked or slow queries, dead tuples, etc.
* [Storage Stats](http://monitor.gitlab.net/dashboard/db/storage-stats) use this dashboard to understand storage use and performance.

#### Private Whitebox Monitor

* [Host Stats](http://performance.gitlab.net/dashboard/db/host-stats): useful to dive deep into a specific host to understand what is going on with it. Select a host from the dropdown on the top.
* [Business Stats](http://performance.gitlab.net/dashboard/db/business-stats): shows many pushes, new repos and CI builds.
* [Daily overview](http://performance.gitlab.net/dashboard/db/daily-overview): shows endpoints with amount of calls and performance metrics. Useful to understand what is slow generally.

## Production Architecture

![Architecture](img/GitLab Infrastructure Architecture.png)

[Source](https://docs.google.com/drawings/d/1MqoemFRdoLm3_p5aKBhzblZM872F1R-tWdoOR5xMQpE/edit), GitLab internal use only

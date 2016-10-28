# GitLab Infrastructure

[These are not the runbooks you are looking for](https://gitlab.com/gitlab-com/runbooks)

## Where and how to look for data

### General System Health

#### Blackbox Monitoring

* [GitLab Web Status](http://performance.gitlab.net/dashboard/db/gitlab-web-status): front end perspective of GitLab. Useful to understand how GitLab.com looks from the user perspective. Use this graph to quickly troubleshoot what part of GitLab is slow.()

#### Whitebox Monitoring

* [Fleet overview](http://performance.gitlab.net/dashboard/db/fleet-overview): useful to see the fleet status from the inside of GitLab.com. Use this graph to quickly see if the workers are under heavy load, or the database, check Lbs bandwidth.

* [Postgres Stats](http://performance.gitlab.net/dashboard/db/postgres-stats): useful to understand how is the database behaving in depth. Use this graph to review if we have spikes of exclusive locks, active or idle in transaction processes
* [Ceph Stats](http://performance.gitlab.net/dashboard/db/ceph-stats): useful to understand the health of the underlying Rados cluster
* [Host Stats](http://performance.gitlab.net/dashboard/db/host-stats): useful to dive deep into a specific host to understand what is going on with it. Select a host from the dropdown on the top.
* [Postgres Queries](http://performance.gitlab.net/dashboard/db/postgres-queries) use this dashboard to understand if we have blocked or slow queries, dead tuples, etc.
* [Business Stats](http://performance.gitlab.net/dashboard/db/business-stats): shows many pushes, new repos and CI builds.
* [Daily overview](http://performance.gitlab.net/dashboard/db/daily-overview): shows endpoints with amount of calls and performance metrics. Useful to understand what is slow generally.

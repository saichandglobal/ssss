Title: Database Reliability Engineer Onboarding Issue 

[Fill in name of the engineer and start date]

### Welcome to your DBRE onboarding issue!


The goal of this issue is to guide you on where to look for information and gather context for our database ecosystem infrastructure. By the end of this issue you should have a sense of where to look for information, and have a general high level understanding of our database ecosystem infrastructure here at GitLab. You should also be familiar with how to make changes in some of the applicable code bases and feel comfortable exploring the existing infrastructure.

This is a living document. If you see opportunities for improvements or outdated links, please open an MR and suggest changes. Principally adding links to where you found important info.

As a handbook-first company, we rely on documentation for sharing knowledge. However, it's *a lot* of reading, and not everyone processes information best that way. Feel free to ask for pairing sessions on #infrastructure-lounge and from your onboarding buddy, take frequent breaks, and anything else you know works for you to pace yourself. 
Also be sure to schedule some coffee chats with team mates to connect and get to know each other. As an async org, it's extra important that we make time for these social calls.

Most of the info that you will need in the next steps are available in the [handbook](https://about.gitlab.com/handbook/engineering/infrastructure/), or in the [runbooks](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/patroni), please reach out for more info when needed.

Please all the changes are to be executed in staging:

- [ ] Read about our [database architecture](https://about.gitlab.com/handbook/engineering/infrastructure/database/#database-reliability-at-gitlab).
- [ ] Read about pgbouncer documentation.
- [ ] Read about Patroni documentation.
- [ ] Read about postgres exporter.
- [ ] Read about the extension [pg_stat_statements](https://www.postgresql.org/docs/12/pgstatstatements.html).
- [ ] Read about the extension [pg_stat_kcache](https://github.com/powa-team/pg_stat_kcache).
- [ ] Read about the extension [pg_wait_sampling](https://github.com/postgrespro/pg_wait_sampling).
- [ ] Read about checksums in postgresql, the design and blueprint.
- [ ] Get familiar with Prometheus/Thanos.
- [ ] Investigate how we create metrics for thanos ( postgres_exporter or other methods).
- [ ] Investigate how to create alerts.
- [ ] Access all the Patroni nodes in staging. Explore where the logs are, postgres exporter, patroni configurations.
- [ ] Access all the Pgbouncer nodes in staging. Explore where the logs are, postgres exporter, patroni configurations.
- [ ] Read all our database runbooks.
- [ ] * Create and execute a change to add 1 pgbouncer for sidekiq in Staging.
- [ ] * Create and execute a change to remove 1 pgbouncer for sidekiq  in Staging.
- [ ] * Create and execute a change to add 1 patroni node in Staging.
- [ ] * Create and execute a change to remove 1 patroni node  in Staging.
- [ ] * Create and execute a change to add 1 patroni node that will not receive traffic and will not be able to become a leader.
- [ ] * Create and execute a change to remove 1 patroni node that was not receiving traffic and will not become a leader.
- [ ] * Execute a patroni maintenance mode in staging, with a proper CR in place.
- [ ] * Execute a patroni failover in staging, with a proper CR in place.
- [ ] Clone and get familiar with our db-ops playbooks.
- [ ] Get familiar with our [backup strategies, execute the runbooks and verifications](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/postgresql-backups-wale-walg.md).
- [ ] * Execute a deep dive for performance spikes.
- [ ] Explore the database benchmark environment.
- [ ] Read the [database roadmap](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/489).


the tasks starting on a * are to be executed with another colleague with experience.
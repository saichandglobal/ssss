<!--
  This issue supplements SRE onboarding for tasks that are specific to starting an oncall shift. It is recommended that you create this issue and ensure you are familiar with these items on a regular basis.
  This checklist is separate from the SRE onboarding issue because the systems we provision and tooling we support evolves over time. Where SRE onboarding covers everything you should *know*, this issue should over everything you should be able to *do* before going oncall.

  If you are already familiar with the item listed, you should feel free to check it without going through the exercise.
-->
Title: Site Reliability Engineer Onboarding Issue 3 - Oncall Onboarding
[Fill in name and start date]

## Welcome to your oncall onboarding issue!

This is the third and final of your onboarding issues.

In order to join oncall, at a high level you should:
1. Alerting - know how to find silences and create them.
1. Join the [shadow rotation in PagerDuty](https://gitlab.pagerduty.com/schedules#PZEBYO0) for a few days and shadow a current oncall.
1. Join the [shadow rotation in PagerDuty](https://gitlab.pagerduty.com/schedules#PZEBYO0) a second time and communicate with the EOC that you will take primary with them as a fallback. Record a log of:
    - how many alerts you acknowledge
    - how many alerts felt actionable
    - how many alerts "made sense", where you knew what you needed to do or where to look
    - Ideally, you are ready to join when the ratio of made sense to acknowledge is above 80% with working on at least 10 alerts.

### Generalized investigation steps during an incident

An incident starts with trying to efficiently identify the nature of the problem, drilling down from:

- PagerDuty alert
- Grafana dashboard for the alerting service
- Kibana log events for that service, often starting with one of the quick links from the Grafana dashboard
- Possibly looking at other Grafana dashboards if the above indicates that the alerting service is having trouble due to its dependency on another service (e.g. Rails having lots of SQL statement timeouts may indicate trouble on the database or its connection pooler).

Once we identify the affected component and the nature of its problem, that usually gives us enough info to understand what kind of solutions are likely to be helpful -- and that may mean getting help from domain experts in whatever component of the app code or infrastructure that we identified as contributing causes of the incident.

Remember that you are not alone. At any point you can ask for help from other SREs in the #infrastructure-lounge channel, someone will be happy to join you in zoom. You can also escalate to the Incident Manager On Call (IMOC) at any time, if you need a second opinion, a different perspective, need help knowing who to reach out to on other teams, etc.

The rest of this issue gives some practical steps/exercises for things you should know how to do.


### Asking for help

Make sure you know how to:
- [ ] Page IMOC by typing `/pd trigger` in slack, then choosing `GitLab Production - Incident Manager` under `Impacted Service`.
- [ ] Page CMOC by typing `/pd trigger` in slack, then choosing `Incident Management - CMOC` under `Impacted Service`.
- [ ] Page Security - for medium/high severity incidents, refer to [how to engage the SEOC](https://about.gitlab.com/handbook/engineering/security/security-operations/sirt/engaging-security-on-call.html#engage-the-security-engineer-on-call). For lower severity incidents, refer to the [incident severity table](https://about.gitlab.com/handbook/engineering/security/security-operations/sirt/engaging-security-on-call.html#incident-severity) to determine the right course of action.
- [ ] Page Dev by typing `/devoncall incident-issue-url` into `#dev-escalation`. [Handbook](https://about.gitlab.com/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html#weekdays).

### Tools

- [ ] [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse/)
- [ ] sre-oncall Slack bot: `/sre-oncall handover`. [Source](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/on-call-handover/).

### Incident Management

- [ ] To declare an incident via Slack: `/incident declare`.
- [ ] When you're ready, add yourself to the [EOC Shadow PD Schedule](https://gitlab.pagerduty.com/schedules#PZEBYO0).
- [ ] Checkout an example Alert in `#production`, Explore the `Runbook`, `Dashboard`, the description and the related `Prometheus graph` by clicking `show more`. Note that any of these links could be outdated, so proceed your evaluation with caution.
- [ ] Understand when an Incident Review is required by viewing [The Incident Review Handbook](https://about.gitlab.com/handbook/engineering/infrastructure/incident-review/#incident-review).
- [ ] Checkout Scenario 3 Youtube recording in [this Firedrill doc](https://docs.google.com/document/d/1uZHz1w3NC6yhSPpuWiUftoz2pIaMtnXhKGvn4O3Fe1U/edit#heading=h.o4psext022tb) to give you an idea of the k8s-related issues you might encounter in gitlab.com.

### Security

- [ ] Explain all traffic policing mechanisms we have available: https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/rate-limiting/README.md
- [ ] How to block a user? [Runbook for dealing with CI/CD Abuse](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/ci-runners/ci-apdex-violating-slo.md#abuse).
- [ ] How to add a rate limit for a path? [From the Runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/rate-limiting/README.md#how-tos).
- [ ] Disabling things in HAProxy. [Project import - Block example](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/block-things-in-haproxy.md#block-project-imports-using-blacklist)

### Delivery

- [ ] Create a hot-patch against production with a single change to a source file that adds a comment. Assign the MR to one of the [current release managers](https://about.gitlab.com/community/release-managers/). [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/post-deployment-patches.md)
- [ ] Get the current state of GitLab.com Canary stage using GitLab Chatops.  [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/canary.md)
- [ ] Find the latest auto-deploy pipeline on ops.gitlab.net and get the current deploy status on all environments using GitLab Chatops. [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/auto-deploy.md)
- [ ] Setup your workstation to ensure you have access to the zonal and regional k8s clusters. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/kube/k8s-oncall-setup.md)

### Observability

- [ ] Locate the General SLA dashboard and find the panel for `Sidekiq Queue Lengths per Queue`
- [ ] Read these documents about notifications and troubleshooting:
  - [ ] Alert Tuning: https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/alert_tuning.md
  - [ ] The SLI apdex troubleshooting tutorial: https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/apdex-alerts-guide.md
  - [ ] An impatient SRE's guide to deleting alerts: https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/deleting-alerts.md
- [ ] Ensure you know how to Silence an alert. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/alerts_manual.md)
- [ ] Ensure you can run `make generate` in [runbooks](https://gitlab.com/gitlab-com/runbooks).
- [ ] Create a visualization in Kibana for all errors grouped by status code.  [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/elastic/kibana.md)

### Reliability

- [ ] Familiarize yourself with how to create incidents from Slack.
- [ ] Get the current HAProxy state of all nodes using the command line. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/haproxy.md)
- [ ] First drain and then ready connections from one of the zonal clusters in staging. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/haproxy.md#set-server-state)
- [ ] Join the following slack channels: `#incident-management`, `#production`, `#releases`, `#f_upcoming_release`, `#feed_alerts-general`, `#alerts`, `#dev-escalation`

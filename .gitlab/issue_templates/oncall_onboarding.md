<!--
  This issue supplements SRE onboarding for tasks that are specific to starting an oncall shift. It is recommended that you create this issue and ensure you are familiar with these items on a regular basis.
  This checklist is separate from the SRE onboarding issue because the systems we provision and tooling we support evolves over time. Where SRE onboarding covers everything you should *know*, this issue should over everything you should be able to *do* before going oncall.

  If you are already familiar with the item listed, you should feel free to check it without going through the exercise.
-->

## Welcome to your oncall onboarding issue!

### Asking for help

Make sure you know how to:
- [ ] Page IMOC by typing `/pd trigger` in slack, then choosing `GitLab Production - IMOC` under `Impacted Service`.
- [ ] Page CMOC by typing `/pd trigger` in slack, then choosing `GitLab Production - CMOC` under `Impacted Service`.
- [ ] Page Security by typing `/security Please joing us for incident#123` in slack. [Handbook](https://about.gitlab.com/handbook/engineering/security/#engaging-the-security-on-call).
- [ ] Page Dev by typing `/devoncall incident-issue-url into #dev-escalation`. [Handbook](https://about.gitlab.com/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html#weekdays).
- [ ] Page DB team: Open your PagerDuty mobile App, navigate to MENU > Escalation policies > Production Database Assistance > Level 1 , and click on the preferred contact method. [Handbook](https://about.gitlab.com/handbook/engineering/infrastructure/database/#ongres-third-party-support)

### Tools

- [ ] [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse/)
- [ ] sre-oncall Slack bot: /sre-oncall [handover]. [Source](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/on-call-handover/).

### Security

- [ ] Explain all traffic policing mechanisms we have available: https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/rate-limiting/README.md
- [ ] How to block a user? [Runbook for dealing with CI/CD Abuse](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/ci-runners/ci-apdex-violating-slo.md#abuse).
- [ ] How to add a rate limit for a path?
- [ ] Disabling things in HAProxy. [Project import - Block example](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/block-things-in-haproxy.md#block-project-imports-using-blacklist)

### Delivery

- [ ] Create a hot-patch against production with a single change to a source file that adds a comment. Assign the MR to one of the [current release managers](https://about.gitlab.com/community/release-managers/). [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/post-deployment-patches.md)
- [ ] Get the current state of GitLab.com Canary stage using GitLab Chatops.  [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/canary.md)
- [ ] Find the latest auto-deploy pipeline on ops.gitlab.net and get the current deploy status on all environments using GitLab Chatops. [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/auto-deploy.md)
- [ ] Setup your workstation to ensure you have access to the zonal and regional k8s clusters. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/k8s-oncall-setup.md)

### Observability

- [ ] Locate the General SLA dashboard and find the panel for `Sidekiq Queue Lengths per Queue`
- [ ] Read the SLI apdex troubleshooting tutorial: https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/apdex-alerts-guide.md
- [ ] Ensure you know how to Silence an alert. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/alerts_manual.md)
- [ ] Create a visualization in Kibana for all errors grouped by status code.  [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/elastic/kibana.md)

### Reliability

- [ ] Familiarize yourself with how to create incidents from Slack.
- [ ] Get the current HAProxy state of all nodes using the command line. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/haproxy.md)
- [ ] First drain and then ready connections from one of the zonal clusters in staging. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/haproxy.md#set-server-state)
- [ ] Join the following slack channels: `#incident-management`, `#production`, `#releases`, `#f_upcoming_release`, `#alerts_general`, `#alerts`, `#dev-escalation`

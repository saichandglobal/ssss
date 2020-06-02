<!--
  This issue supplements SRE onboarding for tasks that are specific to starting an oncall shift. It is recommended that you create this issue and ensure you are familiar with these items on a regular basis.
  This checklist is separate from the SRE onboarding issue because the systems we provision and tooling we support evolves over time. Where SRE onboarding covers everything you should *know*, this issue should over everything you should be able to *do* before going oncall.

  If you are already familiar with the item listed, you should feel free to check it without going through the exercise.
-->

## Welcome to your oncall onboarding issue!

### Delivery

- [ ] Create a hot-patch against production with a single change to a source file that adds a comment. Assign the MR to one of the [current release managers](https://about.gitlab.com/community/release-managers/). [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/post-deployment-patches.md)
- [ ] Get the current state of GitLab.com Canary stage using GitLab Chatops.  [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/canary.md)
- [ ] Find the latest auto-deploy pipeline on ops.gitlab.net and get the current deploy status on all environments using GitLab Chatops. [view documentation](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/auto-deploy.md)
- [ ] List all production pods running in Kubernetes in the `gitlab` namespace. [view documentation](https://gitlab.com/gitlab-com/runbooks/blob/master/docs/uncategorized/k8s-operations.md)

### Observability

- [ ] Locate the General SLA dashboard and find the panel for `Sidekiq Queue Lengths per Queue`
- [ ] Ensure you know how to Silence an alert. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/alerts_manual.md)
- [ ] Create a visualization in Kibana for all errors grouped by status code.  [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/elastic/kibana.md)

### Reliability

- [ ] Familiarize yourself with how to create incidents from Slack.
- [ ] Get the current HAProxy state of all nodes using the command line. [view documentation](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/frontend/haproxy.md)
- [ ] Join the following slack channels: `#incident-management`, `#production`, `#releases`, `#f_upcoming_release`, `#alerts_general`, `#alerts`, `#dev-escalation`

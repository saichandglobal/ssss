## Reliability EM Weekly Issue Prioritization and Management Checklist

Week of: {+ Add Date +}

The following boards should be reviewed and adjusted based on [priority](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/issues.html#priority).  The following actions should  be taken to ensure proper prioritization.

### Check Priority

- [ ] Review the [Issues by Priority board](https://gitlab.com/gitlab-com/gl-infra/reliability/-/boards/3993753?not[label_name][]=work%3A%3Aproject).
  - [ ] Review the `reliability::P1` list for any assigned or unassigned issues and ensure they are being actively worked on **and** being handed off between regions.
  - [ ] Review the list of unassigned [`reliability::P2` issues](https://gitlab.com/gitlab-com/gl-infra/reliability/-/boards/3993753?assignee_id=None)
      - [ ] Confirm that the most important issue is at the top, adjust the order if needed.
      - [ ] For new issues labeled `work::general` review and assign to the current or incoming BEOC as needed.

### Check Stage
       
- [ ] Review the [Issues by Stage board](https://gitlab.com/gitlab-com/gl-infra/reliability/-/boards/3993166).
  - [ ] Review the `workflow-infra::Triage` list to make sure issues are not piling up waiting to be triaged.
  - [ ] Review the `workflow-infra::In Progress` list to get an overview of total Work in Progress across the team.  Only issues that are actively being worked on should have the `workflow-infra::In Progress` label applied.  If inactive work is found in this list adjust labels and send a note indicating why.
  - [ ] Review the `workflow-infra::Proposal` list to see if there are any new issues that require review.  If any are found assign to an appropriate reviewer.

<!-- title the issue: IMOC Rotation Volunteer - Volunteer Name -->

We will be using this information to assemble a schedule for shadowing and a longer term volunteer schedule, if you remain interested after your shadow rotation. We appreciate your time and your willingness to participate in capacity as an Incident Manager On-Call (IMOC), during the weekdays.

The [current responsibilities of an IMOC are locate in the handbook](https://about.gitlab.com/handbook/engineering/infrastructure/incident-management/#incident-manager-on-call-imoc-responsibilities) and as part of the volunteer program, you will be reverse-shadowed by a regular IMOC, should you require additional support.

## IMOC Volunteer Details
- Volunteer - {+ GitLab username +}
- Ideal 4 hour shift (in UTC, example "04:00 - 16:00 UTC") - {+ 8 hour shift +} (see handbook for [details](https://about.gitlab.com/handbook/engineering/infrastructure/incident-manager-onboarding/index.html#what-are-the-expected-commitments-and-how-do-i-balance-my-normal-job-responsibilities))

## Learning about Incident Management 

### Videos
1. [A good talk about incident response](https://www.youtube.com/watch?v=4ZHFPiRXJls) from PagerDuty.

### Reading
1. Understanding how to work with the CMOC: the support team has a [great write up](/handbook/support/workflows/cmoc_workflows.html) on the Communications Manager On-Call (CMOC) workflows.
2. The [IMOC Onboarding handbook page](https://about.gitlab.com/handbook/engineering/infrastructure/incident-manager-onboarding/)
3. [SRE Shadow blog post](https://about.gitlab.com/blog/2020/04/13/lm-sre-shadow/) so you have a feel of what working with the EOC is like. 
4. Google has a few chapters on Incident response in their SRE books:
  a. Good thoughts on the life of the engineers on call.
   * [Being On call](https://sre.google/sre-book/being-on-call/)
   * [Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/)
  b. Dealing with the incident:
   * [Emergency Response](https://sre.google/sre-book/emergency-response/)
   * [Managing Incidents](https://sre.google/sre-book/managing-incidents/)
   * [Workbook examples of incident response](https://sre.google/workbook/incident-response/)
   * [Incident Review](https://sre.google/sre-book/postmortem-culture/) and [Learning from Failure](https://sre.google/workbook/postmortem-culture/)
  c. [Being Oncall examples](https://sre.google/workbook/on-call/)
5. The [IMOC Checklist](https://gitlab.com/gitlab-com/runbooks/-/blob/master/incidents/general_incidents.md#imoc-checklist) in our runbooks.

## Getting going as an IMOC
After the reading and video above, you should start shadowing existing IMOCs.  

Things you will need: (note, you can do the Access Request and start shadowing / joining channels while you wait on the Access Request)
1. An account on GitLab's PagerDuty account (via Access Request)
2. The PagerDuty App on your phone
3. Join the following channels on Slack: #incident-management, #production, #feed_alerts-general, #abuse, #dev-escalation
4. If you're starting as an IMOC Shadow, also joining the #imoc_shadows channel on Slack.
5. Make sure you can login to the [dashboards site](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
6. Make sure you can login to [kibana](https://log.gprd.gitlab.net/) 
7. Familiarize yourself with the [dev escalation process](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html)
8. Make sure you can login to https://ops.gitlab.net/

We have an [IMOC Shadow Schedule](https://gitlab.pagerduty.com/schedules#P3HRRXW) which people can join.
When you are on this schedule, you will be paged in parallel with the current IMOC on duty.  
You can pick times that work for you at first.  Ideally it would be good to shadow for at least 5 incidents, which could take about a month depending on external factors.

After a few incidents, schedule a debrief chat with the IMOCs you shadowed.  Walk through the incidents and ask
any questions you have about how the incident went.

When you feel ready, coordinate with an IMOC for a "reverse shadow".  Schedule yourself in the shadow rotation, 
this time coordinating with the current IMOC knowing who will take primary.  This way, you can handle some incidents
with a fall back / escalation point should you need help.  This is what we do to onboard SREs in the oncall rotation 
and has been very helpful for new people getting used to things.

##### IMOC Shadow Setup Checklist
- [ ] Volunteer is setup in Pagerduty
- [ ] A current IMOC is assigned as their onboarding team member and made a DRI of this issue with the volunteer.
- [ ] Volunteer is briefed via a sync meeting about their first shadow rotation
- [ ] Volunteer is debriefed after first shadow rotation and has made a determination to go forward or not.
  - [ ] If going forward, they are added to the volunteer schedule and given access to adjust
  - [ ] If not going forward, they are removed from Pagerduty.

/assign @gitlab-com/gl-infra/managers 
/label ~"workflow-infra::Triage" ~"team::Reliability" 

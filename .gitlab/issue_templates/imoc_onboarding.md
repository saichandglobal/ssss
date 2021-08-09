<!-- title the issue: IMOC Rotation - Team Member Name -->

We will be using this information to update schedules and to assist with training. We appreciate your time and your willingness to participate as an Incident Manager On-Call (IMOC).

The [current responsibilities of an IMOC are located in the handbook](https://about.gitlab.com/handbook/engineering/infrastructure/incident-management/#incident-manager-on-call-imoc-responsibilities) and as part of the IMOC training, you will be reverse-shadowed by a regular IMOC to help you learn and to provide support if you need it.

## IMOC Details
- Team Member - {+ GitLab username +}
- General region - APAC, EMEA, or AMER?

## Learning about Incident Management 

### Videos
1. [A good talk about incident response](https://www.youtube.com/watch?v=4ZHFPiRXJls) from PagerDuty.

### Reading
1. Understanding how to work with the CMOC: the support team has a [great write up](/handbook/support/workflows/cmoc_workflows.html) on the Communications Manager On-Call (CMOC) workflows.
2. [SRE Shadow blog post](https://about.gitlab.com/blog/2020/04/13/lm-sre-shadow/) so you have a feel of what working with the EOC is like. 
3. Google has a few chapters on Incident response in their SRE books:
  a. Good thoughts on the life of the engineers on call.
   * [Being On call](https://sre.google/sre-book/being-on-call/)
   * [Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/)
  b. Dealing with the incident:
   * [Emergency Response](https://sre.google/sre-book/emergency-response/)
   * [Managing Incidents](https://sre.google/sre-book/managing-incidents/)
   * [Workbook examples of incident response](https://sre.google/workbook/incident-response/)
   * [Incident Review](https://sre.google/sre-book/postmortem-culture/) and [Learning from Failure](https://sre.google/workbook/postmortem-culture/)
  c. [Being Oncall examples](https://sre.google/workbook/on-call/)
4. The [IMOC Checklist](https://gitlab.com/gitlab-com/runbooks/-/blob/master/incidents/general_incidents.md#imoc-checklist) in our runbooks.

## Getting going as an IMOC
After the reading and video above, you should start shadowing existing IMOCs.  

Things you will need:
1. An account on GitLab's PagerDuty account (via Access Request)
2. The PagerDuty App on your phone
3. Join the following channels on slack: #incident-management, #production, #feed_alerts-general, #abuse, #dev-escalation
4. Make sure you can login to the [dashboards site](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
5. Make sure you can login to [kibana](https://log.gprd.gitlab.net/) 
6. Familiarize yourself with the [dev escalation process](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html)
7. Make sure you can login to https://ops.gitlab.net/

We have an [IMOC Shadow Schedule](https://gitlab.pagerduty.com/schedules#P3HRRXW) which people can join.
When you are on this schedule, you will be paged in parallel with the current IMOC on duty.  

After a few incidents, schedule a debrief chat with the IMOCs you shadowed.  Walk through the incidents and ask
any questions you have about how the incident went.

When you feel ready, coordinate with an IMOC for a "reverse shadow".  Schedule yourself in the shadow rotation, 
this time coordinating with the current IMOC knowing who will take primary.  This way, you can handle some incidents
with a fall back / escalation point should you need help.  This is what we do to onboard SREs in the oncall rotation 
and has been very helpful for new people getting used to things.

##### IMOC Shadow Setup Checklist
- [ ] New IMOC is setup in Pagerduty
- [ ] A current IMOC is assigned as their onboarding team member and made a DRI of this issue with the volunteer.
- [ ] New IMOC is briefed via a sync meeting about their first shadow rotation.
- [ ] New IMOC is debriefed after first shadow rotation.

/assign @gitlab-com/gl-infra/managers 
/label ~"workflow-infra::Triage" ~"team::Reliability" 

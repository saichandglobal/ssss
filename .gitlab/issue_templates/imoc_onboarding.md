<!-- title the issue: Incident Manager Onboarding - Team Member Name -->

This issue is for training and onboarding to be a GitLab Incident Manager.


## IMOC Volunteer Details
- Volunteer - {+ GitLab username +}
- Ideal 4 hour shift (in UTC, example "04:00 - 16:00 UTC") - {+ 8 hour shift +} (see handbook for [details](https://about.gitlab.com/handbook/engineering/infrastructure/incident-manager-onboarding/index.html#what-are-the-expected-commitments-and-how-do-i-balance-my-normal-job-responsibilities))

### The goal of incident response:

- [ ] The goal of the incident response process is to mitigate customer and/or business impact and restore service to its previous condition.  We should favor mitigating the impact over understanding the underlying cause.
- [ ] Example: An Incident Manager may decide to initiate a rollback to a known good version, even if the underlying cause of the problem is unknown.  

### There are some basic principles of incident response you should be aware of: 

1. Maintain a clear line of command.
1. Designate clearly defined roles.
1. Keep a working record of debugging and mitigation as you go.
1. Declare incidents early and often.

[Source: https://sre.google/workbook/incident-response/](https://sre.google/workbook/incident-response/)


### What is the role of Incident Manager?

An Incident Manager:

1. [ ] Commands and coordinates the incident response, delegating roles as needed. 
1. [ ] Communicates effectively.
1. [ ] Stays in control of the incident response.
1. [ ] Works with other responders to resolve the incident.

[Source: https://sre.google/workbook/incident-response/](https://sre.google/workbook/incident-response/)

### What is not part of Incident Manager role?

1. [ ] An Incident Manager should not be directly engaging in debugging, troubleshooting, or creating technical fixes.  These activities should be delegated to the GitLab Engineer On-Call (EOC) and other responding engineers so the Incident Manager can maintain operational awareness, communicate status, and coordinate the response. 

See also the description of [Roles and Responsibilities](https://about.gitlab.com/handbook/engineering/infrastructure/incident-management/#roles-and-responsibilities) in our Incident Management documentation.

### What does an Incident Manager do during an incident?

1. [ ] Don’t Panic 
    1. Incident management can sometimes feel stressful.  Don’t panic.  Assemble the team of people you need to support you, follow the process, and don’t panic.
1. [ ] Clearly Communicate Current Status
    1. In the early stages of an incident, ask for an update from the EOC and any other engaged engineers every 5-10 mins.  
    1. Ask the Communications Manager On-Call (CMOC) for an update on new customer reports every 5-10 mins.
    1. Screenshot (or ask others to screenshot) charts showing changes in impact.
    1. Report a status updates summary regularly (every 5-30 min) in the incident Slack channel.  These updates provide critical information that help the team members across the company coordinate our response
1. [ ] If You’re Stuck Ask Probing Questions 
    1. If the team of responders is stuck and not sure what to do, you should ask probing questions to help unblock the team’s thinking.  Assign people to investigatory tasks as you generate ideas.
    1. Some example probing questions:
        1. What is the current impact on users? Is the service unavailable, slow, partially available?
        1. Can we rollback to a known good version?  Can someone confirm if that is safe?  Even if we don’t yet know exactly what’s causing this could a rollback restore service while we continue investigating?
        1. When did the impact start?  Can we learn anything from the timing?  Is this correlated with a new deploy, or an increase in traffic volume?
        1. Does anyone have a theory as to what’s causing this?  Let’s brainstorm some possible areas we can investigate.
        1. Can the affected service be safely restarted?  Can someone confirm if that is safe? 
        1. Do we need to escalate this and/or pull in more people to help? 
1. [ ] Get out of the way (but still report status)
    1. As Incident Manager, you need to interrupt people to get status, assign tasks, and ensure we are making progress towards a resolution.  However, it is also important to provide EOC and any other engaged engineers with time to work and investigate.  If someone should be heads down doing debugging or technical investigation, make sure they have space to work.   Set a timer and ask them for a short update at regular intervals.
1. [ ] Escalate if you are not making progress
    1. If you find that the current group of responders is blocked and not making acceptable progress towards a resolution, it is time to escalate.  Page in additional Incident Manager and EOC support and reach out to key individuals that may be able to help.  You can also engage with leaders to help coordinate.





## Additional Learning about Incident Management 

### Videos
1. [ ] [A good talk about incident response](https://www.youtube.com/watch?v=4ZHFPiRXJls) from PagerDuty.
2. [ ] There are some video resources in the [Monitoring handbook page](https://about.gitlab.com/handbook/engineering/monitoring/) that can be helpful like: 
  a. [Visualization Tools Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj) (internal)
  b. [How to search for an issues in Kibana](https://youtu.be/fKmwH0aNUQQ)
  c. [How to investigate a Sentry 500 Error in Kibana](https://youtu.be/o02t3V3vHMs)

### Reading
1. [ ] Understanding how to work with the CMOC: the support team has a [great write up](/handbook/support/workflows/cmoc_workflows.html) on the Communications Manager On-Call (CMOC) workflows.
2. [ ] The [IMOC Onboarding handbook page](https://about.gitlab.com/handbook/engineering/infrastructure/incident-manager-onboarding/)
3. [ ] [SRE Shadow blog post](https://about.gitlab.com/blog/2020/04/13/lm-sre-shadow/) so you have a feel of what working with the EOC is like. 
4. [ ] Google has a few chapters on Incident response in their SRE books:
  a. Good thoughts on the life of the engineers on call.
   * [Being On call](https://sre.google/sre-book/being-on-call/)
   * [Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/)
  b. Dealing with the incident:
   * [Emergency Response](https://sre.google/sre-book/emergency-response/)
   * [Managing Incidents](https://sre.google/sre-book/managing-incidents/)
   * [Workbook examples of incident response](https://sre.google/workbook/incident-response/)
   * [Incident Review](https://sre.google/sre-book/postmortem-culture/) and [Learning from Failure](https://sre.google/workbook/postmortem-culture/)
  c. [Being Oncall examples](https://sre.google/workbook/on-call/)
4. [ ] The [Incident Manager Checklist](https://gitlab.com/gitlab-com/runbooks/-/blob/master/incidents/general_incidents.md#imoc-checklist) in our runbooks.
5. If you have additional questions about the Incident Manager role, incident response or incident review, please join the #imoc_general Slack channel.


## Getting going as an Incident Manager
After the reading and video above, you should start shadowing existing Incident Managers.  

Things you will need: (note, you can do the Access Request and start shadowing / joining channels while you wait on the Access Request)
1. [ ] An account on GitLab's PagerDuty account (via Access Request)
2. [ ] The PagerDuty App on your phone
3. [ ] Join the following channels on Slack: #incident-management, #production, #feed_alerts-general, #abuse, #dev-escalation
4. [ ] If you're starting as an IMOC Shadow, also joining the #imoc_general channel on Slack.
5. [ ] Make sure you can login to the [dashboards site](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
6. [ ] Make sure you can login to [kibana](https://log.gprd.gitlab.net/) 
7. [ ] Familiarize yourself with the [dev escalation process](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html)
8. [ ] Make sure you can login to https://ops.gitlab.net/

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
- [ ] Volunteer watches the `#incident-management` channel looking for messages from the Woodhouse app announcing "paging IMOC" to selectively join and learn from observing an active incident.
- [ ] Volunteer is debriefed after first shadow rotation and has made a determination to go forward or not.
  - [ ] If going forward, they are added to the volunteer schedule and given access to adjust
  - [ ] If not going forward, they are removed from Pagerduty.

/assign @gitlab-com/gl-infra/managers 
/label ~"workflow-infra::Triage" ~"team::Reliability" 

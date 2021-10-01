<!-- title the issue: Incident Manager Onboarding - Team Member Name -->

This issue is for training and onboarding to be a GitLab Incident Manager.


## Introduction to Incident Manager

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

1. [ ] An Incident Manager should not directly engaging in debugging, troubleshooting, or creating technical fixes.  These activities should be delegated to the EOC and other responding engineers so the Incident Manager can maintain operational awareness, communicate status, and coordinate the response. 

See also the description of [Roles and Responsibilities](/handbook/engineering/infrastructure/incident-management/#roles-and-responsibilities) in our Incident Management documentation.

### What does an Incident Manager do during an incident?

1. [ ] Don’t Panic 
    1. Incident management can sometimes feel stressful.  Don’t panic.  Assemble the team of people you need to support you, follow the process, and don’t panic.
1. [ ] Clearly Communicate Current Status
    1. In the early stages of an incident ask for an update from the EOC and any other engaged engineers every 5-10 mins.  
    1. Ask the CMOC for an update on new customer reports every 5-10 mins.
    1. Screenshot (or ask others to screenshot) charts showing changes in impact.
    1. Report a status updates summary regularly (every 5-30 min) in the incident slack channel.  These updates provide critical information that help the team members across the company coordinate our response
1. [ ] If You’re Stuck Ask Probing Questions 
    1. If the team of responders is stuck and not sure what to do you should ask probing questions to help unblock the team’s thinking.  Assign people to investigatory tasks as you generate ideas.
    1. Some example probing questions:
        1. What is the current impact on users? Is the service unavailable, slow, partially available?
        1. Can we rollback to a known good version?  Can someone confirm if that is safe?  Even if we don’t yet know exactly what’s causing this could a rollback restore service while we continue investigating?
        1. When did the impact start?  Can we learn anything from the timing?  Is this correlated with a new deploy, or an increase in traffic volume?
        1. Does anyone have a theory as to what’s causing this?  Let’s brainstorm some possible areas we can investigate.
        1. Can the affected service be safely restarted?  Can someone confirm if that is safe? 
        1. Do we need to escalate this and/or pull in more people to help? 
1. [ ] Get out of the way (but still report status)
    1. As Incident Manager you need to interrupt people to get status, assign tasks, and ensure we are making progress towards a resolution.  However it is also important to provide EOC and any other engaged engineers with time to work and investigate.  If someone should be heads down doing debugging or technical investigation make sure they have space to work.   Set a timer and ask them for a short update at regular intervals.
1. [ ] Escalate if you are not making progress
    1. If you find that the current group of responders is blocked and not making acceptable progress towards a resolution it is time to escalate.  Page in additional Incident Manager and EOC support and reach out to key individuals that may be able to help.  You can also engage with leaders to help coordinate.





## Additional Learning about Incident Management 

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
4. The [Incident Manager Checklist](https://gitlab.com/gitlab-com/runbooks/-/blob/master/incidents/general_incidents.md#imoc-checklist) in our runbooks.

## Getting going as an Incident Manager
After the reading and video above, you should start shadowing existing Incident Managers.  

Things you will need:
1. [ ] An account on GitLab's PagerDuty account (via Access Request)
2. [ ] The PagerDuty App on your phone
3. [ ] Join the following channels on Slack: #incident-management, #production, #feed_alerts-general, #abuse, #dev-escalation
5. [ ] Make sure you can login to the [dashboards site](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
6. [ ] Make sure you can login to [kibana](https://log.gprd.gitlab.net/) 
7. [ ] Familiarize yourself with the [dev escalation process](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html)
8. [ ] Make sure you can login to https://ops.gitlab.net/


/assign @gitlab-com/gl-infra/managers 
/label ~"workflow-infra::Triage" ~"team::Reliability" 

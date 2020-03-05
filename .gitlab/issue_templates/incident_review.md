<!--
**Please note:** if the incident relates to sensitive data, or is security related consider labeling this issue with ~security and mark it confidential.

***

The purpose of this Incident Review is to serve as a classroom to help us better understand the root causes of an incident. Treating it as a classroom allows us to create the space to let us focus on devising the mechanisms needed to prevent a similar incident from recurring in the future. A root cause can **never be a person** and this Incident Review should be written to refer to the system and the context rather than the specific actors. As placeholders for names, consider the usage of nouns like "technician", "engineer on-call", "developer", etc..

-->

Incident: gitlab-com/gl-infra/production#NNN


## Summary
<!--
_A brief summary of what happened. Try to make it as executive-friendly as possible._
-->

1. Service(s) affected :
1. Team attribution : 
1. Minutes downtime or degradation : 

<!--
_For calculating duration of event, use the [Platform Metrics Dashboard](https://dashboards.gitlab.net/d/ZUei7TkWz/platform-metrics?orgId=1) to look at appdex and SLO violations._
-->

## Metrics
<!--
_Provide any relevant graphs that could help understand the impact of the incident and its dynamics._
-->

## Customer Impact

1. Who was impacted by this incident? (i.e. external customers, internal customers)
2. What was the customer experience during the incident? (i.e. preventing them from doing X, incorrect display of Y, ...)
3. How many customers were affected?
4. If a precise customer impact number is unknown, what is the estimated potential impact?


## Incident Response Analysis

1. How was the event detected?
2. How could detection time be improved?
3. How did we reach the point where we knew how to mitigate the impact?
4. How could time to mitigation be improved?


## Post Incident Analysis

1. How was the root cause diagnosed?
2. How could time to diagnosis be improved?
3. Do we have an existing backlog item that would've prevented or greatly reduced the impact of this incident?
4. Was this incident triggered by a change (deployment of code or change to infrastructure)?


## Timeline

* YYYY-MM-DD XX:YY UTC: action X taken
* YYYY-MM-DD XX:YY UTC: action Y taken


## 5 Whys
<!--
_This section is meant to dig into lessons learned and corrective actions, it is not limited to 5 and consider how you may dive deeper into each why_

_example:_

1. Customers experienced an inability to create new projects on GitLab.com, why?
   - A code change was deployed which contained an escaped bug.
1. Why did this bug not get noticed in staging?
   - The integration test for this use case is missing.
1. Why is an integration test for this use case missing?
   - It was inadvertently removed during a refactoring of our test suite.
1. Why was the test suite being refactored?
   - As part of our efforts to decrease MTTP.
1. Why did it take 2 hours to notice this issue in production?
   - The initial alert was supressed as a false alarm.
1. Why was this alert suppressed
   - The system which dedupes alerts inadvertently suppressed this alarm as a duplicate. 
1. Why did it take 4 hours to resolve the issue in production?
   - The change which carried this escaped bug also contained a database schema change which made rolling the change back impossible. Engineering was engaged immediately by the oncall SRE and conducted a forward fix. 
-->

## Lessons Learned
<!--
_Be explicit about what lessons we learned and should carry forward. These usually inform what our corrective actions should be._

_example:_
1. The results of refactoring activites around our integration tests should be reviewed. (i.e we had 619 tests before refactor but 618 after.)
2. Our tooling to dedupe alarms should have integration tests to ensure it works against existing and newly added alarms.  
-->

## Corrective Actions
<!--
- _Use Lessons Learned as a guideline for creation of Corrective Actions
- _List issues that have been created as corrective actions from this incident._
- _For each issue, include the following:_
    - _<Bare Issue link> - Issue labeled as ~"corrective action"._
    - _Include an estimated date of completion of the corrective action._
    - _Incldue the named individual who owns the delivery of the corrective action._
-->

## Guidelines

* [Blameless RCA Guideline](https://about.gitlab.com/handbook/customer-success/professional-services-engineering/workflows/internal/root-cause-analysis.html#meeting-purpose)

/label ~IncidentReview

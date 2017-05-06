### PLANNING THE CHANGE

- [ ] Context: _What is the background of the change? Relevant links?_
- [ ] Downtime: _Will the change introduce downtime, and if so, how much?_
  - [ ] What options were considered to avoid downtime?
  - [ ] What is the downtime estimate based on? Can it be tested in some way?
- [ ] People:
   - [ ] Who will be present? Who will handle communications (twitter, banner, google doc, etc.)? What other roles will be needed?
- [ ] Pre-checks: _What should we check before starting with the change? Consider dashboards, metrics, limits of current infrastructure, etc._
  - [ ] Does the change alter how we use Azure or how many of Azure's resources we use? If
  so, consider opening an "advisory ticket" in the Azure portal to get input from their team.
- [ ] Change Procedure:
  - [ ] List the steps that are needed for the change; be as granular as possible.
  - [ ] Did you do a dry run to test / measure performance and timings?
- [ ] Preparatory Steps: _What can be done ahead of time? How far ahead?_
   - When determined what these may be, add them to the "Preparatory Steps" section below under "Doing the Change".
- [ ] Post-checks: _What should we check after the change has been applied?_
  - [ ] How do we know the change worked well? How do we know the change did not work well? What monitoring do we need to pay attention to? How do we verify data integrity?
  - [ ] Should any alerts be modified as a consequence of this change?
- [ ] Rollback procedure: _In case things go wrong, what do we need to do to recover?
Also consider rolling back from an intermediate step: does the procedure change
depending on how far along the procedure is?_
- [ ] Create an invite using a 4 hr block of time on the "GitLab Production"
calendar (link in [handbook](https://about.gitlab.com/handbook/infrastructure/#common-links)), inviting the ops-contact group.
 Include a link to the issue. (Many times you will not expect to need - or actually
  need - all 4 hrs, but past experience has shown that delays and unexpected events
  are more likely than having things go faster than expected.)
- [ ] Ping the Production Lead in this issue to coordinate who should be present
from the Production team, and to confirm scheduling.
- [ ] When will this occur? _leave blank until scheduled_
- [ ] Communication plan:
   - [ ] Tweet: default to tweeting when schedule is known, then again 12 hrs before, 1 hr
   before, when starting, during if there are delays, and after when complete.
   - [ ] Deploy banner: display warning 1 hr before
   - [ ] Other?


### DOING THE CHANGE

#### Preparatory steps
- [ ] Copy/paste items here from the Preparatory Steps listed above.

#### Initial Tasks
- [ ] Create a google doc to track the progress. This is because in the event of an
outage, Google docs allow for real-time collaboration, and don't depend on
GitLab.com being available.
  - [ ] Add a link to the issue where it comes from, copy and paste the content of the
  issue, the description, and the steps to follow.
  - [ ] Title the steps as "timeline". Use UTC time without daylight saving, we all are in
  the same timezone in UTC.
  - [ ] Link the document in the [on-call log](https://docs.google.com/document/d/1nWDqjzBwzYecn9Dcl4hy1s4MLng_uMq-8yGRMxtgK6M/edit#) so it's easy to find later.
  - [ ] Right before starting the change, paste the link to the google doc in the #production chat channel and "pin" it.
- [ ] Discuss with the person who is introducing the change, and go through the plan to fill the gaps of understanding before starting.
- [ ] Final check of the rollback plan and communication plan.
- [ ] Set PagerDuty maintenance window before starting the change.

#### The Change
- [ ] Start running the changes. When this happens, one person is making the change, the
other person is taking notes of when the different steps are happening. Make it explicit
who will do what.
- [ ] When the change is done and finished, either successfully or not, copy the content
of the document back into the issue and deprecate the doc (and close the issue if possible).
- [ ] Retrospective: answer the following three questions:
  - [ ] What went well?
  - [ ] What should be improved?
  - [ ] Specific action items / recommendations.
- If the issue caused an outage, or service degradation, label the issue as "outage".

/label ~change

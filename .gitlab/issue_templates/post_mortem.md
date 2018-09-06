
**Please note:** if the incident relates to sensitive data, or is security related consider
labeling this issue with ~security and mark it confidential.
***

## Summary

A brief summary of what happened. Try to make it as executive-friendly as possible.

## Impact & Metrics

Start with the following:

- What was the impact of the incident? (i.e. service outage, sub-service brown-out, exposure of sensitive data, ...)
- Who was impacted by this incident? (i.e. external customers, internal customers, specific teams, ...)
- How did the incident impact customers? (i.e. preventing them from doing X, incorrect display of Y, ...)
- How many attempts were made to access the impacted service/feature?
- How many customers were affected?
- How many customers tried to access the impacted service/feature?

Include any additional metrics that are of relevance.

Provide any relevant graphs that could help understand the impact of the incident and its dynamics.


## Detection & Response

Start with the following:

- How was the incident detected?
- Did alarming work as expected?
- How long did it take from the start of the incident to its detection?
- How long did it take from detection to remediation?
- Were there any issues with the response to the incident? (i.e. bastion host used to access the service was not available, relevant team memeber wasn't page-able, ...)

## Timeline

YYYY-MM-DD

- 00:00 UTC - something happened
- 00:01 UTC - something else happened
- ...

YYYY-MM-DD+1

- 00:00 UTC - and then this happened
- 00:01 UTC - and more happened
- ...


## Root Cause Analysis

The purpose of this document is to understand the reasons that caused an incident, and to create mechanisms to prevent it from recurring in the future. A root cause can **never be a person**, the way of writing has to refer to the system and the context rather than the specific actors.

Follow the "**5 whys**" in a **blameless** manner as the core of the post mortem.

For this it is necessary to start with the incident, and question why it happened. Keep iterating asking "why?" 5 times. While it's not a hard rule that it has to be 5 times, it helps to keep questions get deeper in finding the actual root cause. 

Keep in min that from one "why?" there may come more than one answer, consider following the different branches.

###Example of the usage of "5 whys"
The vehicle will not start. (the problem)

1. Why? - The battery is dead. 
2. Why? - The alternator is not functioning.
3. Why? - The alternator belt has broken.
4. Why? - The alternator belt was well beyond its useful service life and not replaced. 
5. Why? - The vehicle was not maintained according to the recommended service schedule. (Fifth why, a root cause)

## What went well

Start with the following:

- Identify the things that worked well or as expected.
- Any additional call-outs for what went particularly well.

## What can be improved

Start with the following:

- Using the root cause analysis, explain what can be improved to prevent this from happening again.
- Is there anything that could have been done to improve the detection or time to detection?
- Is there anything that could have been done to improve the response or time to response?
- Is there an existing issue that would have either prevented this incident or reduced the impact?
- Did we have any indication or beforehand knowledge that this incident might take place?


## Corrective actions

- List issues that have been created as corrective actions from this incident.
- For each issue, include the following:
    - <Bare Issue link> - Issue labeled as ~"corrective action".
    - Include an estimated date of completion of the corrective action.
    - Incldue the named individual who owns the delivery of the corrective action.


## Guidelines

* [Blameless Postmortems Guideline](https://about.gitlab.com/handbook/infrastructure/#postmortems)
* [5 whys](https://en.wikipedia.org/wiki/5_Whys)


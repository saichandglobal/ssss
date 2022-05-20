<!-- title the issue: Incident Manager Offboarding - Team Member Name -->

This issue is to provide a checklist for removing someone from the incident Manager rotation.

The "Incident Manager" role has previously been referred to as "IMOC" (Incident Manager On Call) and references to this previous name may still be found in some documents or tools.

## IM Onboarder Details
- Person being removed - {+ GitLab username +}
- Offboarder (Usually an Infra team manager from @/gitlab-com/gl-infra/managers ) - {+ GitLab username +}
- Shift they are dropping from: (in UTC, example "04:00 - 8:00 UTC") - {+ 4 hour shift +} 
- Date when they will drop - {example: 2022-03-17}

## IM Offboarding checklist:
- Announce the change in the #imoc_general channel and let the other shift members know that their slots may be changing
- Put a reminder on your calendar to remove the person from the shift on or near the effective date.
- Remove the person from Pagerduty

/assign @gitlab-com/gl-infra/managers 
/label ~"workflow-infra::Triage" ~"team::Reliability" 

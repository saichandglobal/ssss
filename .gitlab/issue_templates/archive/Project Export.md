<!--
Set the title to: Project Export File Request - NAMESPACE_NAME: PROJECT_NAME

This template is meant for Support to request Infra to copy a project export file to an accessible place for a customer
following the export workflow: https://about.gitlab.com/handbook/support/workflows/importing_projects.html
-->

## Export File Details

- Google Cloud Storage (GCS) Path (if available): <!-- Required if console export was attempted. Will look like gitlab-gprd-uploads/import_export_upload/export_file/<some-number>/<some-archive>.tar.gz -->
- Project Path:  <!-- The full project path related to export -->
- Related Zendesk Ticket/Support Issue:

Escalation required? If the issue has not been triaged by the due date and the Support team member requires this issue ot be escalated, please post in Slack #infrastructure-lounge

## Infra To Do

Timing Reminder: The temp GCP files are auto-deleted after 2 days, so avoid Fridays.

Any SRE can access the GCS bucket in question to list and retrieve the file.

### Find the project export file

If the GCS path was provided, you can skip this section.

1. [ ] Determine the query: The files are labeled by date followed by a lowercased representation of the first 30 characters of the `path_with_namespace` field of the project's API object. Using the provided project path, replace any `/` with `_`.
    - Example: `"path_with_namespace":"gitlab-gold/arihant-testing/ticket-185309"` becomes `gitlab-gold_arihant-testing_ti`.
1. [ ] Grep for the file using: `gsutil ls -p gitlab-production gs://gitlab-gprd-uploads/import_export_upload/export_file/** | grep '<query>'`
    - Example:
```
# gsutil ls -p gitlab-production gs://gitlab-gprd-uploads/import_export_upload/export_file/** | grep 'gitlab-gold_arihant-testing_ti'
gs://gitlab-gprd-uploads/import_export_upload/export_file/840262/2021-06-04_16-17-804_gitlab-gold_arihant-testing_ti_export.tar.gz
```

### Copy the file to the tmp bucket

1. [ ] Follow the [project export runbook instructions](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/project-export.md#no-download-link-and-no-download-email) to copy the project export file to the temp bucket.
1. [ ] Provide the link to the temp bucket copy in a comment below and notify support by pinging the issue author.

/label ~import-export ~"workflow-infra::Triage" ~"team::Reliability" ~"priority::1"
/assign @gitlab-com/gl-infra/managers 
/confidential
/due 2 days

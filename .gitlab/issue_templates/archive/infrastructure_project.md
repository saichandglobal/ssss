# Create a new project in Infrastructure

## Summary

This issue will track the steps to create a new project in Infrastructure under the `gitlab-com/gl-infra` group on GitLab.com.
In general we want to avoid creating new project when possible, new projects create overhead of managing CI configuration, project settings, and CI variables.
Please be mindful of this and ask yourself whether this new project is absolutely necessary before proceeding.

The new project will use https://gitlab.com/gitlab-com/gl-infra/templates/project-with-ops-mirror as a base template, this project has the following features:

- A base CONTRIBUTING file for infrastructure
- CI configuration that will ensure that pipelines run on ops.gitlab.net and post back a note on MRs to the ops pipeline
- Public pipelines disabled
- Default branch of `main` with no direct pushes to the `main` branch
- Issues disabled

## Before you begin

- [ ] Fill in the project path below and reference the epic or issues for why this new project is necessary

- **Link to project**: {+ TODO +}
- Reference issue / epic for why this project needs to be created: {+ TODO +}

## Procedure
- [ ] In the https://gitlab.com/gitlab-com/gl-infra group [create a new project from a group template](https://gitlab.com/projects/new?namespace_id=1112072#create_from_template). Under the "group" tab, select the `project-with-ops-mirror` template.
- [ ] Set the visibility level to "Public" and fill in a short description, select "Create Project" which will clone the project using the template.
- [ ] Create a blank project (with no README) with visibility "internal" on ops.gitlab.net using the same project path as the project on GitLab.com. Ensure `MIRROR: true` is set as a CI variable.
- [ ] Do the following on the GitLab.com project
  - [ ] Under `Settings -> Repository -> Mirroring repositories` add a **Push** mirror using the project path of the project created on ops, using the `ops-gitlab-net` user. For example: `https://ops-gitlab-net@ops.gitlab.net/gitlab-com/gl-infra/some-project.git`. The token is in 1password under "ops-gitlab-net system account" `pat: ops.gitlab.net/for pushing repositories`. Ensure that "Mirror only protected branches" is **unchecked**.
  - [ ] Ensure that `OPS_API_TOKEN` is set and `CANONICAL=true`. The ops api token is in 1password under "ops-gitlab-net system account".
  - [ ] Under `Settings -> General > Merge request (MR) approvals` add an approval rule for the target branch of `main` for the `gitlab-com/gl-infra` group
- [ ] Send out a general notification in `#infrastructure-lounge` that this new project is created

```
:mega: FYI A new project has been created with a push mirror to ops.gitlab.net, located at PROJECT_PATH and MIRROR_PATH.

PROJECT_DESCRIPTION

For more details see ISSUE_LINK, if you any questions please let me know!
```

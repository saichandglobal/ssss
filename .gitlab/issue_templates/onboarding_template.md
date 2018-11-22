# Onboarding

Found something to improve? [Make a merge request!](https://gitlab.com/gitlab-com/gl-infra/infrastructure/blob/master/.gitlab/issue_templates/onboarding_template.md)

## Getting Started

1. [ ] Manager: create this issue. It will be marked confidential automatically
1. [ ] Manager: cross-link general onboarding issue in the peopleops issue tracker
1. [ ] Manager: Add new team member to the Geekbot standup
1. [ ] Manager: Add new team member to the Geekbot retro
1. [ ] New team member: Complete the setup of your [Yubikey](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/yubikey.md)
1. [ ] New team member: read the [infrastructure handbook](https://about.gitlab.com/handbook/engineering/infrastructure/) and pages linked from there including:
    1. [ ] New team member: Review top 10 issues in the [infrastructure issue tracker](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues)
    1. [ ] New team member: Review top 10 issues in the [infrastructure issue tracker](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues) labelled as [alert](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=alert)
    1. [ ] New team member: read about the [production architecture](https://about.gitlab.com/handbook/engineering/infrastructure/production-architecture)
    1. [ ] New team member: read about [monitoring](https://about.gitlab.com/handbook/engineering/monitoring/)

## Accounts

1. [ ] New team member: comment in this issue with your desired Unix username and your SSH public key. Tip: use the same username you use on your laptop.
1. [ ] New team member: create your GitLab `admin` account. [Register](https://gitlab.com/users/sign_in#register-pane) using `yourGitLabHandle+admin@gitlab.com`. After that, make sure you create an issue in the [infrastructure project](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues) so you are granted the appropriate privileges (please label the issue as `access request`)
1. [ ] Onboarder: invite new production engineer to [DigitalOcean](https://cloud.digitalocean.com/settings/team) (new production engineer: make sure you are not signed in to DO when accepting the invite!)
1. [ ] Onboarder: invite new production engineer to [PagerDuty](https://gitlab.pagerduty.com/users). Don't add the new user to any rotations.
1. [ ] New team member: Accept the invitation and configure [PagerDuty](https://gitlab.pagerduty.com/) timezone, phone number, and other details
1. [ ] Onboarder: invite the production engineer to [Status.io](https://app.status.io/dashboard/5b36dc6502d06804c08349f7/team)

## Permissions

1. [ ] Onboarder: add new production engineer as 'developer' to the [gitlab-com](https://gitlab.com/groups/gitlab-com/group_members) group.
1. [ ] Onboarder: add new production engineer as 'developer' to the [gitlab-org](https://gitlab.com/groups/gitlab-org/group_members) group.
1. [ ] Onboarder: add new production engineer as 'maintainer' to the [cookbooks](https://gitlab.com/groups/gitlab-cookbooks/group_members) group.
1. [ ] Onboarder: add new production engineer as 'maintainer' to the [gl-infra](https://gitlab.com/groups/gl-infra/group_members) group.
1. [ ] Onboarder: add new production engineer as 'maintainer' to the [gitlab-cog](https://gitlab.com/groups/gitlab-cog/group_members) group.
1. [ ] Onboarder: create a cog user and add the new production engineer to the right groups (gitlab-admin, for a start)
1. [ ] Onboarder: invite the new production engineer to [Azure Active Directory](https://portal.azure.com/?reAuth=true#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)
    1. Azure AD -> Users and Groups -> All Users -> New Guest User -> Enter email and invite.
1. [ ] New team member: create your account with the invitation.
1. [ ] Onboarder: grant owner permission to the new production engineer in [Azure](https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade)
    1. Subscriptions -> Microsoft Azure Sponsorship -> Access control -> Add -> (Role Owner - Pick the User) -> Save
1. [ ] Onboarder: add new production engineer to the Azure subscription
1. [ ] Onboarder: make new production engineer 'co-admin' (Click on the user -> Directory Role -> Global Administrator -> Save)
1. [ ] Onboarder: make new production engineer 'admin' on [AWS](https://console.aws.amazon.com/iam/home#home)

## Tools

1. [ ] New team member: install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
1. [ ] New team member: install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstarts)
1. [ ] New team member: install the [AWS Cli](https://aws.amazon.com/cli)
1. [ ] New team member: install [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)


## Monitoring

1. [ ] New team member: get familiar with the dashboards in the [private monitoring infrastructure](https://dashboards.gitlab.net/)
1. [ ] New team member: get familiar with the dashboards in the [public monitoring infrastructure](https://dashboards.gitlab.com/)
1. [ ] New team member: get familiar with [prometheus](https://prometheus.gitlab.com/graph), investigate how to [query](https://prometheus.io/docs/querying/basics/) to get information out of it.
1. [ ] New team member: get familiar with [targets](https://prometheus.gitlab.com/targets) and [alerts](https://prometheus.gitlab.com/alerts) within prometheus.
1. [ ] New team member: get familiar with [prometheus alert manager](https://alerts.gitlab.com), look for the documentation of this in the [runbooks](https://gitlab.com/gitlab-com/runbooks).

## Runbooks and Alerts

1. [ ] Onboarder: add new production engineer as 'maintainer' to [runbooks](https://gitlab.com/gitlab-com/runbooks/project_members).
1. [ ] New team member: clone and get familiar with the [runbooks](https://gitlab.com/gitlab-com/runbooks)
1. [ ] New team member: submit a fix of documentation to the runbooks.
1. [ ] New team member: submit a fix to an alert in the runbooks (or submit a new one).
1. [ ] New team member: after having the MR merged, run `chef-client` in prometheus to enable the new alert.

## Chef

1. [ ] New team member: clone the [chef-repo](https://ops.gitlab.net/gitlab-cookbooks/chef-repo) and run `bundle install` to install all the dependencies
1. [ ] New team member: [create a SSH user](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/README.md#add-a-new-system-admin) and send an MR to [chef-repo](https://ops.gitlab.net/gitlab-cookbooks/chef-repo) - ensure you are providing the ssh key from the yubikey setup
1. [ ] Onboarder: run `sudo chef-client` on `chef.gitlab.com` to ensure the new production engineer has SSH access there
1. [ ] New team member: create Chef user and Chef key via `ssh chef.gitlab.com` and [chef-server-ctl user-create](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#creating-users)
1. [ ] New team member: copy the Chef key, change directory to the cloned chef-repo repository on your machine, create a directory named: .chef, create a file with your SSH user name (with a .pem extension) and paste the Chef key. Chef workstation tools such as `knife` and `chef` will need the .pem key to be able to talk to the Chef server.
1. [ ] New team member: add your Chef user to the 'gitlab' and 'dev-resources' organizations with `chef-server-ctl org-user-add`
1. [ ] Onboarder: make the new chef user admin with [knife acl](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#add-users-to-the-admins-group-of-the-gitlab-organization)
1. [ ] New team member: create chef-repo/.chef/knife.rb from [knife.rb.example](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/knife.rb.example)
1. [ ] New team member: test your chef setup with `knife status`
1. [ ] Onboarder: add new Chef user to VAULT_ADMINS in Rakefile and run `rake update_vault_admins`

## Bastion setup for SSH

1. [ ] New team member: follow the steps in [GPRD bastion hosts](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/gprd-bastions.md)
1. [ ] New team member: follow the steps in [GSTG bastion hosts](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/gstg-bastions.md)
1. [ ] New team member: follow the steps in [OPS bastion hosts](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/ops-bastions.md)
1. [ ] New team member: try ssh into a host and make sure it works. Example: `knife status | grep dashboard`, get one of the hosts' name and ssh into it

## Terraform

1. [ ] New team member: clone the [terraform repo](https://gitlab.com/gitlab-com/gitlab-com-infrastructure)
1. [ ] New team member: Complete the _Getting Started_ guide

## Communications

1. [ ] Onboarder: mention the new production engineer in the `production` channel.
1. [ ] Onboarder: mention the new production engineer in the `alerts` channel.
1. [ ] New team member: learn who your teammates are and ping them in your onboarding issue - We do mention the people we address to in issues, get used to doing it.

## Context and Comfort with GitLab's code base

1. [ ] New team member: review issues labeled as `outage` in the infrastructure issue tracker.
1. [ ] Onboarder: point the new production engineer to the ongoing meta issues that define the team strategy.
1. [ ] New team member: read about the [application architecture](https://docs.gitlab.com/ce/development/architecture.html)
1. [ ] New team member: contribute a merge request to one of the following repos: gitlab-ce, gitlab-ee, gitaly, workhorse, gitlab-runner (or take a look at the [engineering projects](https://about.gitlab.com/handbook/engineering/projects) for more inspiration). The idea here is to get comfortable with the application architecture and codebase, but not to spend more than 0.5 - 1 day on coding for this task.

/label ~"Onboarding"
/title Production Engineer Onboarding  - [Fill in name and start date]
/confidential
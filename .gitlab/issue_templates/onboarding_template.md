Title: Production Engineer Onboarding  - [Fill in name and start date]

New team member = N

Onboarder = O

1. [ ] Getting Started:
    1. [ ] O: create this issue and mark it confidential
    1. [ ] O: cross-link general onboarding issue in the peopleops issue tracker
    1. [ ] O: Add new team member to the Geekbot standup
    1. [ ] O: Add new team member to the Geekbot retro
    1. [ ] N: Complete the setup of your [Yubikey](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/yubikey.md)
    1. [ ] N: read the [infrastructure handbook](https://about.gitlab.com/handbook/engineering/infrastructure/) and pages linked from there. Find something to improve? Make a merge request!
1. [ ] Accounts:
    1. [ ] N: comment in this issue with your desired Unix username and your SSH public key. Tip: use the same username you use on your laptop.
    1. [ ] N: You should receive a GitLab `admin` account email (`yourGitLabHandle+admin@gitlab.com`). Set this account password and configure multi factor security on this account.
    1. [ ] O: invite new production engineer to [Digital Ocean](https://cloud.digitalocean.com/settings/team) (new production engineer: make sure you are not signed in to DO when accepting the invite!)
    1. [ ] O: invite new production engineer to [Pager Duty](https://gitlab.pagerduty.com/users). Don't add the new user to any rotations.
    1. [ ] N: Accept the invitation and configure [Pager Duty](https://gitlab.pagerduty.com/) timezone and phone number and other details
    1. [ ] O: invite the production engineer to [Status.io](https://app.status.io/dashboard/5b36dc6502d06804c08349f7/team)
1. [ ] Permissions:
    1. [ ] O: add new production engineer as 'developer' to the [gitlab-com](https://gitlab.com/groups/gitlab-com/group_members) group.
    1. [ ] O: add new production engineer as 'developer' to the [gitlab-org](https://gitlab.com/groups/gitlab-org/group_members) group.
    1. [ ] O: add new production engineer as 'maintainer' to the [cookbooks](https://gitlab.com/groups/gitlab-cookbooks/group_members) group.
    1. [ ] O: add new production engineer as 'maintainer' to the [gl-infra](https://gitlab.com/groups/gl-infra/group_members) group.
    1. [ ] O: invite the new production engineer to [Azure Active Directory](https://portal.azure.com/?reAuth=true#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)
        1. Azure AD -> Users and Groups -> All Users -> New Guest User -> Enter email and invite.
    1. [ ] N: create your account with the invitation.
    1. [ ] O: grant owner permission to the new production engineer in [Azure](https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade)
        1. Subscriptions -> Microsoft Azure Sponsorship -> Access control -> Add -> (Role Owner - Pick the User) -> Save
    1. [ ] O: add new production engineer to the Azure subscription
    1. [ ] O: make new production engineer 'co-admin' (Click on the user -> Directory Role -> Global Administrator -> Save)
    1. [ ] O: make new production engineer 'admin' on [Gitter AWS](https://troupe.signin.aws.amazon.com/console)
    1. [ ] O: make new production engineer 'admin' on [Gitlab-com AWS](https://gitlab-com.signin.aws.amazon.com/console)
    1. [ ] O: make new production engineer 'admin' on [Non-prod AWS](https://474521830347.signin.aws.amazon.com/console)
1. [ ] Tools:
    1. [ ] N: install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
1. [ ] Monitoring:
    1. [ ] O: make new production engineer 'admin' on [private monitoring infrastructure](https://dashboards.gitlab.net/)
    1. [ ] N: get familiar with the dashboards in the [private monitoring infrastructure](https://dashboards.gitlab.net/)
    1. [ ] N: get familiar with the dashboards in the [public monitoring infrastructure](https://dashboards.gitlab.com/)
    1. [ ] N: get familiar with [prometheus](https://prometheus.gitlab.com/graph), investigate how to [query](https://prometheus.io/docs/querying/basics/) to get information out of it.
    1. [ ] N: get familiar with [targets](https://prometheus.gitlab.com/targets) and [alerts](https://prometheus.gitlab.com/alerts) within prometheus.
    1. [ ] N: get familiar with [prometheus alert manager](https://alerts.gitlab.com), look for the documentation of this in the [runbooks](https://gitlab.com/gitlab-com/runbooks).
1. [ ] Runbooks and Alerts:
    1. [ ] O: add new production engineer as 'maintainer' to [runbooks](https://gitlab.com/gitlab-com/runbooks/project_members).
    1. [ ] N: clone and get familiar with the [runbooks](https://gitlab.com/gitlab-com/runbooks)
    1. [ ] N: submit a fix of documentation to the runbooks.
    1. [ ] N: submit a fix to an alert in the runbooks (or submit a new one).
    1. [ ] N: after having the MR merged, run `chef-client` in prometheus to enable the new alert.
1. [ ] Gitter:
    1. [ ] N: clone [gitter-infrastructure](https://gitlab.com/gitlab-com/gl-infra/gitter-infrastructure)
    1. [ ] N: Add your public key to the path `ansible/roles/base/files/authorized_keys/<username>` and submit an MR
    1. [ ] O: Ensure a successful ansible run to install the users key into the infrastructure
1. [ ] Chef:
    1. [ ] N: clone the [chef-repo](https://ops.gitlab.net/gitlab-cookbooks/chef-repo) and run `bundle install` to install all the dependencies
    1. [ ] N: [create a SSH user](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/README.md#add-a-new-system-admin) and send an MR to [chef-repo](https://ops.gitlab.net/gitlab-cookbooks/chef-repo) - ensure you are providing the ssh key from the yubikey setup
    1. [ ] O: run `sudo chef-client` on `chef.gitlab.com` to ensure the new production engineer has SSH access there
    1. [ ] N: create Chef user and Chef key via `ssh chef.gitlab.com` and [chef-server-ctl user-create](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#creating-users)
    1. [ ] N: copy the Chef key, change directory to the cloned chef-repo repository on your machine, create a directory named: .chef, create a file with your SSH user name (with a .pem extension) and paste the Chef key. Chef workstation tools such as `knife` and `chef` will need the .pem key to be able to talk to the Chef server.
    1. [ ] N: add your Chef user to the 'gitlab' and 'dev-resources' organizations with `chef-server-ctl org-user-add`
    1. [ ] O: make the new chef user admin with [knife acl](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#add-users-to-the-admins-group-of-the-gitlab-organization)
    1. [ ] N: create chef-repo/.chef/knife.rb from [knife.rb.example](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/knife.rb.example)
    1. [ ] N: test your chef setup with `knife status`
    1. [ ] O: add new Chef user to VAULT_ADMINS in Rakefile and run `rake update_vault_admins`
1. [ ] Bastion setup for SSH:
    1. [ ] N: follow the steps in [GPRD bastion hosts](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/gprd-bastions.md)
    1. [ ] N: follow the steps in [GSTG bastion hosts](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/gstg-bastions.md)
    1. [ ] N: follow the steps in [OPS bastion hosts](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/ops-bastions.md)
    1. [ ] N: try ssh into a host and make sure it works. Example: `knife status | grep dashboard`, get one of the hosts' name and ssh into it
1. [ ] Terraform:
    1. [ ] N: clone the [terraform repo](https://gitlab.com/gitlab-com/gitlab-com-infrastructure)
    1. [ ] N: Complete the _Getting Started_ guide
1. [ ] Communications:
    1. [ ] O: mention the new production engineer in the `production` channel.
    1. [ ] O: mention the new production engineer in the `alerts` channel.
    1. [ ] N: learn who your teammates are and ping them in your onboarding issue - We do mention the people we address to in issues, get used to doing it.
1. [ ] Context & Comfort with GitLab's code base:
    1. [ ] N: review issues labeled as `outage` in the infrastructure issue tracker.
    1. [ ] O: point the new production engineer to the ongoing meta issues that define the team strategy.
    1. [ ] N: read about the [application architecture](https://docs.gitlab.com/ce/development/architecture.html)
    1. [ ] N: contribute a merge request to one of the following repos: gitlab-ce, gitlab-ee, gitaly, workhorse, gitlab-runner (or take a look at the [engineering projects](https://about.gitlab.com/handbook/engineering/projects) for more inspiration). The idea here is to get comfortable with the application architecture and codebase, but not to spend more than 0.5 - 1 day on coding for this task.

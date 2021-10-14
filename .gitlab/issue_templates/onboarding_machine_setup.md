Title: Site Reliability Engineer Onboarding Issue 1 - Machine Setup

[Fill in name and start date]

### Welcome to your first onboarding issue!

We need to keep iterating on this checklist so please submit MR's for any improvements
that you can think of. The file is located in an issue template in the '[issue template section](https://gitlab.com/gitlab-com/gl-infra/infrastructure/edit/master/.gitlab/issue_templates/onboarding_machine_setup.md)'.

We have broken onboarding up into three separate issues: Machine Setup, Context Gathering, and Oncall Onboarding. They should be completed in that order, with the expectation that the oncall onboarding will take at least 3 months from your start date to complete. Take your time. 

The goal for this first onboarding issue is to handle all of the installations and accesses you will need to have your machine ready to do the things you need to be able to do. At any time, feel free to ask your onboarding buddy for help, or reach out in #infrastructure-lounge.

New team member = N

Onboarder = O

1. [ ] **Getting Started**
    1. [ ] O: create this issue and mark it confidential
    1. [ ] O: cross-link general onboarding issue in the peopleops issue tracker
    1. [ ] O: Add new team member to the Geekbot standup
    1. [ ] N: Read through the onboarding info in [the handbook](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/sre-onboarding/).
    1. [ ] N: [Read Geekbot's FAQ](https://geekbot.com/faq/) and configure your settings
    1. [ ] N: Complete the setup of your [Yubikey](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/yubikey.md) Note: this setup can take at least a day to complete, and we encourage you to get help if things are unclear or you run into an issue.
  
1. [ ] **Accounts:**
    1. [ ] O: Check that by the start of Day 2 that an issue has been auto-created in the [Access Request Repo](https://gitlab.com/gitlab-com/team-member-epics/access-requests) by the employment bot.  This will create accounts for many of the services we use: AWS, Azure, dev, DO, GitLab.com admin, staging, GCP, Chef, Pager Duty
    1. [ ] N: comment in the access request issue with your desired Unix username and your SSH public key. Tip: use the same username you use on your laptop.
    1. [ ] N: You should receive a GitLab `admin` account via a 'plussed' email address (ex `yourGitLabHandle+admin@gitlab.com`). Set this account password and configure multi factor security on this account.
    1. [ ] N: Accept the invitation and configure [Pager Duty](https://gitlab.pagerduty.com/) timezone and phone number and other details
    1. [ ] N: Verify your access to Rackspace - this is where you can make tickets for issues with GCP
1. [ ] **Permissions:**
    1. [ ] O: Check the new production engineer has been added to the following groups/with permissions by the Employment Bot:
         1. [ ] 'developer' in [gitlab-com](https://gitlab.com/groups/gitlab-com/-/group_members).
         1. [ ] 'developer' in [gitlab-org](https://gitlab.com/groups/gitlab-org/-/group_members).
    1. [ ] O: add new production engineers as 'owner' in [gl-infra](https://gitlab.com/groups/gitlab-com/gl-infra/-/group_members).
    1. [ ] O: add new production engineer as 'owner' to the [cookbooks](https://gitlab.com/groups/gitlab-cookbooks/-/group_members) group
    1. [ ] O: add new production engineer as 'owner' to the [reliability](https://ops.gitlab.net/groups/gitlab-com/reliability/-/group_members) group on the Ops instance.
    1. [ ] O: invite the new production engineer to [Azure Active Directory](https://portal.azure.com/?reAuth=true#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)
        1. Azure AD -> Users and Groups -> All Users -> New Guest User -> Enter email and invite.
    1. [ ] N: create your account with the invitation.
    1. [ ] O: add new production engineer to the [Azure](https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade) subscription
        1. Subscriptions -> `Microsoft Azure Sponsorship` -> Access control -> Add -> Add role assignment -> select a role and the user -> Save
        1. Subscriptions -> `Pay-As-You-Go - Testing Sub` -> Access control -> Add -> Add role assignment -> select a role and the user -> Save
    1. [ ] O: make new production engineer 'co-admin'
        1. Subscriptions -> `Microsoft Azure Sponsorship` -> Access control -> Add -> Add co-administrator -> select the user -> Save
        1. Subscriptions -> `Pay-As-You-Go - Testing Sub` -> Access control -> Add -> Add co-administrator -> select the user -> Save
    1. [ ] O: make new production engineer 'admin' on [Gitlab-com AWS](https://gitlab-com.signin.aws.amazon.com/console)
1. [ ] **Tools:**
    1. [ ] N: install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
    1. [ ] N: install the [gcloud cli](https://cloud.google.com/sdk/)
1. [ ] **Monitoring:**
    1. [ ] O: make new production engineer 'admin' on [private monitoring infrastructure](https://dashboards.gitlab.net/)

1. [ ] **Runbooks and Alerts:**
    1. [ ] O: add new production engineer as 'maintainer' to [runbooks](https://gitlab.com/gitlab-com/runbooks/-/project_members).
    
1. [ ] **SSH:**
   1. [ ] N: [create an SSH user](https://gitlab.com/gitlab-com/gl-infra/chef-repo/blob/master/README.md#add-a-new-system-admin) and send an MR to [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo) - ensure you are providing the ssh key from the yubikey setup
    1. [ ] O: Merge the MR, and then run `knife data bag from file users <username>.json`
    1. [ ] N: wait for chef to propagate your public key to the bastion servers and all the rest of the infrastructure nodes
1. [ ] **Chef:**
    1. :warning: These steps assume the previous SSH section was completed
    1. [ ] O: add the new production engineer as a 'developer' on [ops chef-repo](https://ops.gitlab.net/gitlab-com/gl-infra/chef-repo)
    1. [ ] O: add the new production engineer as a 'maintainer' on  [.com chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)
    1. [ ] N: clone the [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo) and run `bundle install` to install all the dependencies.
        - Note: if you encounter the error `OpenSSL library could not be found.`      
        - run `gem install openssl -- --with-openssl-dir=<dir>` where dir is the path to openssl@1.1 directory since the default is openssl@3 and at the time of this edit ruby doesn't support openssl@3, after that run `bundle install`.
    1. [ ] N: chef-repo repository contains a lot of useful materials. You don't need to read all of them, just look at a few examples and be aware that they are here:
        1. [ ] chef server installation [docs](https://ops.gitlab.net/gitlab-com/gl-infra/chef-repo/-/blob/master/doc/set-up-chef-server.md)
    1. [ ] O: run `sudo chef-client` on `chef-01-inf-ops.c.gitlab-ops.internal` to ensure the new production engineer has SSH access there
    1. [ ] N: create Chef user and Chef key via `ssh chef-01-inf-ops.c.gitlab-ops.internal` and [chef-server-ctl user-create](https://gitlab.com/gitlab-com/gl-infra/chef-repo/blob/master/doc/set-up-chef-server.md#creating-users)
    1. [ ] N: copy the Chef key, change directory to the cloned chef-repo repository on your machine, create a directory named: .chef, create a file with your SSH user name (with a .pem extension) and paste the Chef key. Chef workstation tools such as `knife` and `chef` will need the .pem key to be able to talk to the Chef server.
    1. [ ] N: add your Chef user to the 'gitlab', 'staging', and 'dev-resources' organizations with `chef-server-ctl org-user-add`
    1. [ ] O: make the new chef user admin with [knife acl](https://gitlab.com/gitlab-com/gl-infra/chef-repo/blob/master/doc/set-up-chef-server.md#add-users-to-the-admins-group-of-the-gitlab-organization)
    1. [ ] N: create chef-repo/.chef/knife.rb from [knife.rb.example](https://gitlab.com/gitlab-com/gl-infra/chef-repo/blob/master/knife.rb.example)
    1. [ ] N: test your chef setup with `knife status`
    1. [ ] O: in the chef-repo, add the new Chef user to config/vault_admins.yml, then run `rake update_vault_admins`.  This will run for a while (hours, not minutes) and then create an MR you can have approved and merged.  It will output "WARNING: Vault admin must be an array" a lot; this is not a problem
1. [ ] **Bastion setup for SSH:**
    1. [ ] N: obtain a base known-good SSH config for GitLab infrastructure: `curl https://gitlab.com/gitlab-com/gl-infra/infrastructure/raw/master/onboarding/ssh-config >> $HOME/.ssh/config`
    1. [ ] N: try to ssh into a host and make sure it works. Example: `knife status | grep dashboard`, get one of the hosts' name and ssh into it
1. [ ] **Console access:**
    1. [ ] N: Ensure that you can run a rails console as described in the
       [runbook](https://gitlab.com/gitlab-com/runbooks/blob/master/docs/uncategorized/staging-environment.md#run-a-rails-console-in-staging-environment).
1. [ ] **Terraform:**
    1. [ ] N: clone the [terraform repo](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure)
    1. [ ] N: Complete the [_Getting Started_](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure#getting-started) guide
1. [ ] **Communications:**
    1. [ ] O: Invite the new production engineer to specialized Slack channels:
          - [ ] Oncall channels:
              - `production`
              - `incident-management`
              - `alerts`
              - `announcements`
              - `dev-escalation`
              - `feed_alerts-general`
              - `cloud-provider-alerts`
          - [ ] Infrastructure channels:
              - `sre_standup`
              - `infrastructure-lounge`
              - `infra-lounge-social`
              - `infra-read-feed`
              - `g_delivery`
              - `g_scalability`
              - `infra_capacity-planning`
              - `kubernetes`
    1. [ ] N: Subscribe to the [infrastructure calendar](gitlab.com_oji6dki1frc8g8qq9feuu1jtd0@group.calendar.google.com), and checkout the [meetings](https://about.gitlab.com/handbook/engineering/infrastructure/#meetings) that are scheduled periodically.
    1. [ ] N: Introduce yourself to the team in the `#infrastructure-lounge` slack channel.
    1. [ ] N: learn who your teammates are and ping them in your onboarding issue - We do mention the people we address to in issues, get used to doing it.
    1. [ ] N: Add yourself to the [Infrastructure Group Status Update](https://gitlab.com/gitlab-com/gl-infra/infra-report/blob/master/status-report.js)
1. [ ] **Kubernetes**
    1. [ ] N: Complete your [Kubernetes Access Setup](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/kube/k8s-oncall-setup.md).
         - You can use any of the setup methods, the easiest being [Accessing the clusters via console servers](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/kube/k8s-oncall-setup.md#accessing-clusters-via-console-servers).
1. [ ] **Next Onboarding Issue**
    1. [ ] N: Create a new issue and assign it to yourself, using the [Gather Context](https://gitlab.com/gitlab-com/gl-infra/infrastructure/edit/master/.gitlab/issue_templates/onboarding_gather_context.md) issue template.
    


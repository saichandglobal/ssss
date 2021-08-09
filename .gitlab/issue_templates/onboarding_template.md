Title: Site Reliability Engineer Onboarding  - [Fill in name and start date]

### Welcome to your onboarding issue!

We need to keep iterating on this checklist so please submit MR's for any improvements
that you can think of. The file is located in an issue template in the '[issue template section](https://gitlab.com/gitlab-com/gl-infra/infrastructure/edit/master/.gitlab/issue_templates/onboarding_template.md)'.

If an item does not start with an "N", it's yours to do.

New team member = N

Onboarder = O

1. [ ] **Getting Started**
    1. [ ] O: create this issue and mark it confidential
    1. [ ] O: cross-link general onboarding issue in the peopleops issue tracker
    1. [ ] O: Add new team member to the Geekbot standup
    1. [ ] O: Add new team member to the Geekbot retro
    1. [ ] N: Read through the onboarding info in [the handbook](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/sre-onboarding/).
    1. [ ] N: [Read Geekbot's FAQ](https://geekbot.com/faq/) and configure your settings
    1. [ ] N: Complete the setup of your [Yubikey](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/yubikey.md)
    1. [ ] N: read the [infrastructure handbook](https://about.gitlab.com/handbook/engineering/infrastructure/) and pages linked from there.
    1. [ ] N: Make a merge request to add yourself to your team's page, example, [Reliability](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/), [Delivery](https://about.gitlab.com/handbook/engineering/infrastructure/team/delivery/) or [Scalability](https://about.gitlab.com/handbook/engineering/infrastructure/team/scalability/).
1. [ ] **Accounts:**
    1. [ ] O: Create an issue from the SRE Entitlements template in the [Access Request Repo](https://gitlab.com/gitlab-com/access-requests/issues).  This will create accounts for many of the services we use: AWS, Azure, dev, DO, GitLab.com admin, staging, GCP, Chef, Pager Duty, Status.io
    1. [ ] N: comment in the access request issue with your desired Unix username and your SSH public key. Tip: use the same username you use on your laptop.
    1. [ ] N: You should receive a GitLab `admin` account via a 'plussed' email address (`yourGitLabHandle+admin@gitlab.com`). Set this account password and configure multi factor security on this account.
    1. [ ] N: Accept the invitation and configure [Pager Duty](https://gitlab.pagerduty.com/) timezone and phone number and other details
    1. [ ] N: Verify your access to Rackspace - this is where you can make tickets for issues with GCP
1. [ ] **Permissions:**
    1. [ ] O: add new production engineer as 'developer' to the [gitlab-com](https://gitlab.com/groups/gitlab-com/-/group_members) group.
    1. [ ] O: add new production engineer as 'developer' to the [gitlab-org](https://gitlab.com/groups/gitlab-org/-/group_members) group.
    1. [ ] O: add new production engineer as 'owner' to the [gl-infra](https://gitlab.com/groups/gitlab-com/gl-infra/-/group_members) group.
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
    1. [ ] N: get familiar with the dashboards in the [private monitoring infrastructure](https://dashboards.gitlab.net/)
    1. [ ] N: get familiar with the dashboards in the [public monitoring infrastructure](https://dashboards.gitlab.com/)
    1. [ ] N: get familiar with [prometheus](https://thanos.gitlab.net/graph), investigate how to [query](https://prometheus.io/docs/querying/basics/) to get information out of it.
    1. [ ] N: get familiar with [prometheus alert manager](https://alerts.gitlab.net), checkout the documentation of this in the [runbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/alerts_manual.md).
    1. [ ] N: Checkout [Lifecycle of an Alert](https://www.youtube.com/watch?v=KXs50X2Td2I) for an intro to our implementation of prometheus, thanos, alertmanager and more.
    1. [ ] N: open an [access
       request](https://gitlab.com/gitlab-com/access-requests/issues/new?issuable_template=New+Access+Request)
       to add yourself to the prod-eng-team Slack group. This will have the side
       effect of familiarizing yourself with access requests.
1. [ ] **Runbooks and Alerts:**
    1. [ ] O: add new production engineer as 'maintainer' to [runbooks](https://gitlab.com/gitlab-com/runbooks/-/project_members).
    1. [ ] N: clone and get familiar with the [runbooks repo](https://gitlab.com/gitlab-com/runbooks) . There are a lot of useful materials in it which will help you become familiar with the infrastructure. Depending on your role, you will find some parts more useful than others. Here are some examples, you don't need to read these now, just make sure you know they are here:
        1. [ ] Checkout the [docs](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs) which is presumably the most updated directory at the time of this writing.
        1. [ ] description of our [logging infrastructure](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/logging)
    1. [ ] N: submit a fix to an alert in the runbooks (or submit a new one).
    1. [ ] N: after having the MR merged, run `chef-client` in prometheus to enable the new alert.
1. [ ] **SSH:**
    1. [ ] N: [create an SSH user](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/README.md#add-a-new-system-admin) and send an MR to [chef-repo](https://ops.gitlab.net/gitlab-cookbooks/chef-repo) - ensure you are providing the ssh key from the yubikey setup
    1. [ ] O: Merge the MR, and then run `knife data bag from file users <username>.json`
    1. [ ] N: wait for chef to propagate your public key to the bastion servers and all the rest of the infrastructure nodes
1. [ ] **Chef:**
    1. :warning: These steps assume the previous SSH section was completed
    1. [ ] O: add the new production engineer as a 'developer' on [ops chef-repo](https://ops.gitlab.net/gitlab-com/gl-infra/chef-repo)
    1. [ ] O: add the new production engineer as a 'maintainer' on  [.com chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)
    1. [ ] N: clone the [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo) and run `bundle install` to install all the dependencies
    1. [ ] N: chef-repo repository contains a lot of useful materials. You don't need to read all of them, just look at a few examples and be aware that they are here:
        1. [ ] chef server installation [docs](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md)
    1. [ ] O: run `sudo chef-client` on `chef-01-inf-ops.c.gitlab-ops.internal` to ensure the new production engineer has SSH access there
    1. [ ] N: create Chef user and Chef key via `ssh chef-01-inf-ops.c.gitlab-ops.internal` and [chef-server-ctl user-create](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#creating-users)
    1. [ ] N: copy the Chef key, change directory to the cloned chef-repo repository on your machine, create a directory named: .chef, create a file with your SSH user name (with a .pem extension) and paste the Chef key. Chef workstation tools such as `knife` and `chef` will need the .pem key to be able to talk to the Chef server.
    1. [ ] N: add your Chef user to the 'gitlab', 'staging', and 'dev-resources' organizations with `chef-server-ctl org-user-add`
    1. [ ] O: make the new chef user admin with [knife acl](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#add-users-to-the-admins-group-of-the-gitlab-organization)
    1. [ ] N: create chef-repo/.chef/knife.rb from [knife.rb.example](https://ops.gitlab.net/gitlab-cookbooks/chef-repo/blob/master/knife.rb.example)
    1. [ ] N: test your chef setup with `knife status`
    1. [ ] O: add new Chef user to config/vault_admins.yml and run `rake update_vault_admins`
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
              - `mgcp_gitlab_ops`
              - `incident-management`
              - `alerts`
              - `announcements`
              - `dev-escalation`
              - `feed_alerts-general`
              - `cloud-provider-alerts`
          - [ ] Infrastructure channels:
              - `sre_observability`
              - `sre_coreinfra`
              - `sre_datastores`
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
    1. [ ] N: Complete your [Kubernetes Access Setup](https://gitlab.com/gitlab-com/runbooks/blob/master/docs/uncategorized/k8s-oncall-setup.md).
         - You can use any of the setup methods, the easiest being [Accessing the clusters via console servers](https://gitlab.com/gitlab-com/runbooks/blob/master/docs/uncategorized/k8s-oncall-setup.md#accessing-clusters-via-console-servers).
    1. [ ] N: Read the different sections in the [K8s Operations Howto](https://gitlab.com/gitlab-com/runbooks/blob/master/docs/uncategorized/k8s-operations.md) page.
    1. [ ] N: Checkout Scenario 3 Youtube recording in [this Firedrill doc](https://docs.google.com/document/d/1uZHz1w3NC6yhSPpuWiUftoz2pIaMtnXhKGvn4O3Fe1U/edit#heading=h.o4psext022tb) to give you an idea of the k8s-related issues you might encounter in gitlab.com.
1. [ ] **Context & Comfort with GitLab's code base:**
    1. [ ] N: review issues labeled as `outage` in the [infrastructure issue tracker](https://gitlab.com/groups/gitlab-com/gl-infra/-/issues?scope=all&utf8=%E2%9C%93&state=closed&label_name%5B%5D=outage).
    1. [ ] O: point the new production engineer to the ongoing meta issues that define the team strategy.
    1. [ ] O: Schedule a synchronous [architecture overview session](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/onboarding/architecture.md).
    1. [ ] N: read about the [application architecture](https://docs.gitlab.com/ce/development/architecture.html)
    1. [ ] N: checkout the diagrams showing a before and after we moved some of the services to Kubernets [here](https://gitlab.com/gitlab-com/runbooks/-/tree/hp-api/docs/api#architecture).
    1. [ ] N: Read the [Life of a web request](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/00d0fb19b0e7d90c32b9c73dc8d0faff86c05117/source/handbook/engineering/infrastructure/tutorials/overview_life_of_a_web_request.html.md) and the [Life of a GIT request](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/9636e8addd6c1130accd4e157991f714f48262aa/source/handbook/engineering/infrastructure/tutorials/overview_life_of_a_git_request.html.md) tutorials.
    1. [ ] N: watch the [gitlab.com infrastructure overview](https://www.youtube.com/watch?v=uCU8jdYzpac), keeping in mind that it was recorded a few years ago, and some of the info is no longer applicable, example, [GitLab Takeoff](https://gitlab.com/gitlab-org/takeoff) is deprecated in favor of the [Deployer](https://ops.gitlab.net/gitlab-com/gl-infra/deployer).
    1. [ ] N: check out [the service inventory catalog](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)
    1. [ ] N: Setup the [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit/-/tree/master/) locally. Play with it. Break it. Destroy it.
    1. [ ] N: contribute a merge request to each of the following repos: gitlab-ce, gitlab-ee, gitaly, workhorse, gitlab-runner (or take a look at the [engineering projects](https://about.gitlab.com/handbook/engineering/projects) for more inspiration). The idea here is to get comfortable with the application architecture and codebase.
    1. [ ] N: Make an improvement to to the [onboarding issue template](https://gitlab.com/gitlab-com/gl-infra/infrastructure/edit/master/.gitlab/issue_templates/onboarding_template.md) or the onboarding info in [the handbook](https://about.gitlab.com/handbook/engineering/infrastructure/sre-onboarding/).

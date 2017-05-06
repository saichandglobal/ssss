Title: Production Engineer Onboarding  - [Fill in name and start date]

1. [ ] Getting Started:
  1. [ ] onboarder: create this issue and mark it confidential
  1. [ ] onboarder: cross-link general onboarding issue in the peopleops issue tracker
1. [ ] Accounts:
  1. [ ] new production engineer: comment in this issue with your desired Unix username and your SSH public key. Tip: use the same username you use on your laptop.
  1. [ ] new production engineer: [create Microsoft account](https://signup.live.com) for yourname@gitlab.com
  1. [ ] onboarder: invite new production engineer to [Digital Ocean](https://cloud.digitalocean.com/settings/team) (new production engineer: make sure you are not signed in to DO when accepting the invite!)
1. [ ] Chef:
  1. [ ] new production engineer: clone the [chef-repo](https://dev.gitlab.org/cookbooks/chef-repo) and run `bundle install` to install all the dependencies
  1. [ ] onboarder: [create SSH user](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/README.md#add-a-new-sysadmin)
  1. [ ] onboarder: run `sudo chef-client` on `chef.gitlab.com` to ensure the new production engineer has SSH access there
  1. [ ] new production engineer: create Chef user and Chef key via `ssh chef.gitlab.com` and [chef-server-ctl user-create](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#creating-users)
  1. [ ] new production engineer: add your Chef user to the 'gitlab' and 'staging' groups with `chef-server-ctl org-user-add`
  1. [ ] onboarder: make the new chef user admin with [knife acl](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/doc/set-up-chef-server.md#add-users-to-the-admins-group-of-the-gitlab-organization)
  1. [ ] new production engineer: create chef-repo/.chef/knife.rb from [knife.rb.example](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/knife.rb.example)
  1. [ ] new production engineer: test your chef setup with `knife status`
  1. [ ] onboarder: add new Chef user to VAULT_ADMINS in Rakefile and run `rake update_vault_admins`
1. [ ] Tools:
  1. [ ] new production engineer: install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
  1. [ ] new production engineer: investigate installing and enabling the [toolbelt](https://gitlab.com/gl-infra/toolbelt)
1. Monitoring:
  1. [ ] new production engineer: get familiar with the dashboards in the [private monitoring infrastructure](https://performance.gitlab.net)
  1. [ ] new production engineer: get familiar with the dashboards in the [public monitoring infrastructure](http://monitor.gitlab.net)
  1. [ ] new production engineer: get familiar with [prometheus](https://prometheus.gitlab.com/graph), investigate how to [query](https://prometheus.io/docs/querying/basics/) to get information out of it.
  1. [ ] new production engineer: get familiar with [targets](https://prometheus.gitlab.com/targets) and [alerts](https://prometheus.gitlab.com/alerts) within prometheus.
  1. [ ] new production engineer: get familiar with [prometheus alert manager](https://alerts.gitlab.com), look for the documentation of this in the [runbooks](https://gitlab.com/gitlab-com/runbooks).
1. [ ] Runbooks and Alerts:
  1. [ ] new production engineer: clone and get familiar with the [runbooks](https://gitlab.com/gitlab-com/runbooks)
  1. [ ] new production engineer: submit a fix of documentation to the runbooks.
  1. [ ] new production engineer: submit a fix to an alert in the runbooks (or submit a new one).
  1. [ ] new production engineer: after having the MR merged, run `chef-client` in prometheus to enable the new alert.
1. [ ] Permissions:
  1. [ ] onboarder: add new production engineer as 'developer' to the [gitlab-com](https://gitlab.com/groups/gitlab-com/group_members) group.
  1. [ ] onboarder: add new production engineer as 'developer' to the [gitlab-org](https://gitlab.com/groups/gitlab-org/group_members) group.
  1. [ ] onboarder: add new production engineer as 'master' to the [cookbooks](https://gitlab.com/groups/gitlab-cookbooks/group_members) group.
  1. [ ] onboarder: add new production engineer as 'master' to the [gl-infra](https://gitlab.com/groups/gl-infra/group_members) group.
  1. [ ] onboarder: add new production engineer to [Azure Active Directory](https://manage.windowsazure.com/@sytsegitlab.onmicrosoft.com#Workspaces/ActiveDirectoryExtension/Directory/7cc60e3a-c2c5-43d6-b426-1d8c9e8e7ad1/users)
  1. [ ] onboarder: create a cog user and add the new production engineer to the right groups (gitlab-admin, for a start)
  1. [ ] onboarder: make new production engineer 'co-admin' [on Azure](https://manage.windowsazure.com/@sytsegitlab.onmicrosoft.com#Workspaces/AdminTasks/ListUsers)
  1. [ ] onboarder: make new production engineer 'admin' on [AWS](https://console.aws.amazon.com/iam/home#home)
1. [ ] Communications:
  1. [ ] onboarder: add new production engineer to ops-notifications [email alias](https://docs.google.com/document/d/1rrVgD2QVixuAf07roYws7Z8rUF2gJKrrmTE4Z3vtENo/edit)
  1. [ ] onboarder: add new production engineer to production [slack group](https://docs.google.com/document/d/1rrVgD2QVixuAf07roYws7Z8rUF2gJKrrmTE4Z3vtENo/edit)
  1. [ ] onboarder: mention the new production engineer in the `production` channel.
  1. [ ] onboarder: mention the new production engineer in the `prometheus-alerts` channel.
  1. [ ] onboarder: learn who your team mates are and ping them in your onboarding issue - We do mention the people we address to in issues, get used to doing it.
1. [ ] Context:
  1. [ ] new production engineer: review issues labeled as `outage` in the infrastructure issue tracker.
  1. [ ] onboarder: point the new production engineer to the ongoing meta issues that define the team strategy.

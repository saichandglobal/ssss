# Offboarding Infrastructure Engineer

* [ ] Find and destroy chef user
  * [ ] ssh into the chef server
  * [ ] `sudo chef-server-ctl user-delete CHEF_USERNAME`
* [ ] Remove user from VAULT_ADMINS in `Rakefile`
  * [ ] run rake update_vault_admins
* [ ] Remove user from gitlab ssh access:
  * [ ] `bundle exec knife data bag show users # find SSH-USERNAME`
  * [ ] `bundle exec rake "destroy_ssh_user[SSH-USERNAME]"` *NOTE*: please make sure that there's no critical nodes with chef-client explicitly disabled at the moment, such as DB, otherwise access will remain for this user.
* [ ] Remove user from Gitter ssh access:
  * [ ] Remove the users key from
    `gitter-infrastructure/ansible/roles/base/files/authorized_keys/<username>`
  * [ ] Execute ansible: `ansible-playbook -i <environment> playbooks/base.yml -t ssh-keys`
* [ ] Remove user from the package server:
  * [ ] `bundle exec rake 'edit_role[packages-gitlab-com]'`
* [ ] Remove [admin user](https://dev.gitlab.org/admin/users?filter=admins) from dev.gitlab.org
* [ ] Remove [admin user](https://gitlab.com/admin/users?filter=admins) from GitLab.com
* [ ] Remove [admin user](https://staging.gitlab.com/admin/users?filter=admins) from GitLab.com staging
* [ ] Remove [user](https://console.aws.amazon.com) from AWS accounts
  * [ ] staging
  * [ ] Gitter
  * [ ] gitlab-com
* [ ] Remove [user](https://cloud.digitalocean.com/settings/team) from Digital Ocean accounts
* [ ] Remove user droplets from Digital Ocean "GitLab DEV" account (https://cloud.digitalocean.com/droplets)
* [ ] Remove [user](https://manage.windowsazure.com/@sytsegitlab.onmicrosoft.com#Workspaces/ActiveDirectoryExtension/Directory/7cc60e3a-c2c5-43d6-b426-1d8c9e8e7ad1/users) from Azure Active Directory
* [ ] Remove [user](https://manage.windowsazure.com/@sytsegitlab.onmicrosoft.com#Workspaces/AdminTasks/ListUsers) from Azure Co-Admins
* [ ] Remove user from [Grafana](https://dashboards.gitlab.net).

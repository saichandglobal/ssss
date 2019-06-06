<!--
Set the title to Import request (for group): [project]
-->

/due YYYY-MM-DD

#### Import on: YYYY-MM-DD HH:MM UTC 
#### [Link to project](https://link.here)
#### Username: `user-to-import-as`
#### Project path: `fillout/thepath/here`
#### Access Request Issue (admin imports only): [link]()
#### Ticket: LINK

### Support
- [ ] Provide a temporary secret link to the export from the customer
- [ ] Confirm the customer has sufficient access to create a project in the namespace they want
- [ ] Provide the namespace/project path

If admin import:

- [ ] Fill out an [access request](https://gitlab.com/gitlab-com/access-requests/issues/new?issuable_template=New%20Access%20Request) and link it above. 
- [ ] Check for any dodgy emails outside the customer's organization (such as @gitlab.com) using [export file user checker](https://gitlab.com/gitlab-com/support/toolbox/dcef).
- List the emails of users contained within the import here (or if it's >10 attach, add as a comment):

```
insert emails or remove this if not applicable
```

### Production
- [ ] Grab the Slack token from 1Password (search for `Import Slack token`)
- [ ] Copy the file to `/tmp` and make sure is accessible by the `git` user
- [ ] Run as **root** on a **tmux** session (Adding slack token, and `-u -p -f` options):
```sh
sudo -u git -H bash -c "EXECJS_RUNTIME=Disabled SLACK_TOKEN='changeme' RAILS_ENV=production /opt/gitlab/embedded/bin/ruby <(curl -s https://gitlab.com/gitlab-com/runbooks/raw/master/scripts/project_import.rb) -u gitlab_username -p namespace/project -f /path/to/export.tar.gz"
```
- [ ] Wait for the script to send a message to #annoucements confirming it finished
- [ ] Exit the tmux session and remove the export file

/label ~oncall ~import ~"SRE:On-call"

/confidential 

<!--
Set the title to Import request [project]
-->

### Support
- [ ] Provide a temporary secret link to the export from the customer
- [ ] Confirm the customer has sufficient access to create a project in the namespace they want
- [ ] Add the namespace/project path to this issue as a comment
- [ ] Wait for the script to send a message to #annoucements confirming it finished

### Production
- [ ] Grab the Slack token from 1Password (search for `Import Slack token`)
- [ ] Run as **root** on a **tmux** session (Adding slack token, and `-u -p -f` options):
```sh
sudo -u git -H bash -c "EXECJS_RUNTIME=Disabled SLACK_TOKEN='changeme' RAILS_ENV=production /opt/gitlab/embedded/bin/ruby <(curl -s https://gitlab.com/gitlab-com/runbooks/raw/master/scripts/project_import.rb) -u gitlab_username -p namespace/project -f /path/to/export.tar.gz"
```
- [ ] Wait for the script to send a message to #annoucements confirming it finished
- [ ] Exit the tmux session and remove the export file

/label ~oncall ~import
/confidential 

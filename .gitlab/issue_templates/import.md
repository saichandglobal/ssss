<!--
Set the title to Import request [project]
-->

#### [Secret link to project](https://link.here)
#### Customer username: `user-to-import-as`
#### Project path: `fillout/thepath/here`
#### Import date: YYYY-MM-DD (set due date with `/due`)
#### Access Request Issue: [link] (for admin imports only)

### Support
- [ ] Provide a temporary secret link to the export from the customer
- [ ] Confirm the customer has sufficient access to create a project in the namespace they want
- [ ] Add the namespace/project path to this issue as a comment

- [ ] If this is an admin import, fill out an [access request](https://gitlab.com/gitlab-com/access-requests/issues/new?issuable_template=New%20Access%20Request) and link it above. 
- List the emails of users contained within the import here:
   - ____
   - ____
   - ____

- [ ] Wait for the script to send a message to #annoucements confirming it finished

### Production
- [ ] Grab the Slack token from 1Password (search for `Import Slack token`)
- [ ] Copy the file to `/tmp` and make sure is accessible by the `git` user
- [ ] If the importer is admin, check for any dodgy emails outside the customer's organization (such as @gitlab.com):
```sh
 tar -xOf /tmp/project_export.tar.gz project.json  | python -m json.tool | grep '"email"' | uniq
 ```
- [ ] Run as **root** on a **tmux** session (Adding slack token, and `-u -p -f` options):
```sh
sudo -u git -H bash -c "EXECJS_RUNTIME=Disabled SLACK_TOKEN='changeme' RAILS_ENV=production /opt/gitlab/embedded/bin/ruby <(curl -s https://gitlab.com/gitlab-com/runbooks/raw/master/scripts/project_import.rb) -u gitlab_username -p namespace/project -f /path/to/export.tar.gz"
```
- [ ] Wait for the script to send a message to #annoucements confirming it finished
- [ ] Exit the tmux session and remove the export file

/label ~oncall ~import

/confidential 

# Group Project Request

- Project / Group Name (<17 characters):
- Project Administrator (email):

### Provide a brief overview of the reason for this project and why it is needed and for how long it will be used.


## Security

### Provide a list of data and the corresponding classification that will be used in this project and how it will be accessed.


## Group Project Access Checklist

Make sure the following criteria is met and understood by the project administrator. 

- [ ] If the gitlab.com database is copied, that data has been processed by the [pseudonymization script]( https://gitlab.com/gitlab-com/runbooks/blob/master/howto/pseudonymization-gitlab-db.md).
- [ ] Regular security updates are applied to all nodes in the project.
- [ ] Unused instances will be removed in a timely manner
- [ ] The Project Administrator is responsible for any users or additional administrators that they add to the project
- [ ] The Project Administrator is responsible for justifying any cloud spend within the project.
- [ ] Group Projects are intended for development, test, or demo work. Everything in these projects is considered temporary.

## Infrastructure Tasks

- [ ] Create file in https://ops.gitlab.net/gitlab-com/group-projects named `environments/(group name from above).tf` by copying an existing file and changing the Administrator and Group Name variables
- [ ] Merge the change to master
- [ ] Create a branch from master named `(group name from above)` and push
- [ ] Verify that the pipeline completed successfully at https://ops.gitlab.net/gitlab-com/group-projects/pipelines
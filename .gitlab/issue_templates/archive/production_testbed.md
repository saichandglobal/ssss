# Production testbed questionnaire 

## Security

### Provide a brief overview of the reason for this testbed and why it is needed and for how long it will be used.
### Attach any relevant architecture diagrams that show a testbed topology.
### Provide a list of data and the corresponding classification that will be used on the testbed and how it will be accessed.
### Provide a brief description of how the testbed is configured and managed.

## Production access checklist

Make sure the following criteria is met before any production data accessed by the testbed.
If there are any exceptions please note them below and have it reviewed by security.

- [ ] If the gitlab.com database is copied, that data has been processed by the [pseudonymization script]( https://gitlab.com/gitlab-com/runbooks/blob/master/howto/pseudonymization-gitlab-db.md).
- [ ] Testbed infrastructure OS configuration is configuration managed using source control.
- [ ] Regular security updates are applied to all nodes in the testbed.
- [ ] All inbound traffic to all GitLab services is
  - [ ] restricted to be originated from the local network
  - [ ] tunneled via our bastion hosts
  - [ ] ingresses through a configured load balancer with clearly defined
    firewall rules
- [ ] All service related outbound traffic is
  - [ ] restricted to the local network
  - [ ] egresses via a NAT endpoint
- [ ] All connections are over encrypted channels.
- [ ] Logging is configured such that application and system logs are forwarded and indexed so that they can be searched.

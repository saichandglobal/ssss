Title: Site Reliability Engineer Onboarding Issue 2 - Gather Context

[Fill in name and start date]

### Welcome to your second onboarding issue!

The goal of this issue is to guide you on where to look for information and gather context for our infrastructure. By the end of this issue you should have a sense of where to look for information, and have a general high level understanding of our infrastructure here at GitLab. You should also be familiar with how to make changes in some of the applicable code bases and feel comfortable exploring the existing infrastructure.

This is a living document. If you see opportunities for improvements or outdated links, please open an MR and suggest changes.

As a handbook-first company, we rely on documentation for sharing knowledge. However, it's *a lot* of reading, and not everyone processes information best that way. Feel free to ask for pairing sessions on #infrastructure-lounge and from your onboarding buddy, take frequent breaks, and anything else you know works for you to pace yourself. 
Also be sure to schedule some coffee chats with team mates to connect and get to know each other. As an async org, it's extra important that we make time for these social calls.

1. [ ] **Infrastructure Overview**
    1. [ ] Architecture overview
        1. [ ] Read the [infrastructure handbook](https://about.gitlab.com/handbook/engineering/infrastructure/) and pages linked from there.
        1. [ ] Ask on #infrastructure-lounge for someone to schedule a synchronous [architecture overview session](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/onboarding/architecture.md) with you.
        1. [ ] Read about the [application architecture](https://docs.gitlab.com/ce/development/architecture.html)
        1. [ ] Checkout the diagrams showing a before and after we moved some of the services to Kubernetes [here](https://gitlab.com/gitlab-com/runbooks/-/tree/hp-api/docs/api#architecture).
        1. [ ] Read the [Life of a web request](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/infra_tutorial_life_of_web_request/source/handbook/engineering/infrastructure/tutorials/overview_life_of_a_web_request.html.md) and the [Life of a GIT request](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/infra_tutorial_life_of_git_request/source/handbook/engineering/infrastructure/tutorials/overview_life_of_a_git_request.html.md) tutorials.
        1. [ ] Watch the [gitlab.com infrastructure overview](https://www.youtube.com/watch?v=uCU8jdYzpac), keeping in mind that it was recorded a few years ago, and some of the info is no longer applicable, example, [GitLab Takeoff](https://gitlab.com/gitlab-org/takeoff) is deprecated in favor of the [Deployer](https://ops.gitlab.net/gitlab-com/gl-infra/deployer).
        1. [ ] Check out [the service inventory catalog](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)
        1. [ ] Clone and get familiar with the [runbooks repo](https://gitlab.com/gitlab-com/runbooks) . There are a lot of useful materials in it which will help you become familiar with the infrastructure. Depending on your role, you will find some parts more useful than others. Here are some examples, you don't need to read these now, just make sure you know they are here:
        1. [ ] Checkout the [docs](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs) which is presumably the most updated directory at the time of this writing.
        1. [ ] Read about our [logging infrastructure](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/logging)
    1. [ ] Monitoring
        1. [ ] Get familiar with the dashboards in the [private monitoring infrastructure](https://dashboards.gitlab.net/)
        1. [ ] Get familiar with the dashboards in the [public monitoring infrastructure](https://dashboards.gitlab.com/)
        1. [ ] Understand the dashboards we use to get a general sense of how things are running
        1. [ ] Get familiar with how we [create and modify](https://gitlab.com/gitlab-com/runbooks/blob/master/dashboards/README.md) dashboards
        1. [ ] Get familiar with [prometheus](https://thanos.gitlab.net/graph), investigate how to [query](https://prometheus.io/docs/querying/basics/) to get information out of it.
        1. [ ] Get familiar with [prometheus alert manager](https://alerts.gitlab.net), checkout the documentation of this in the [runbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/monitoring/alerts_manual.md).
        1. [ ] Checkout [Lifecycle of an Alert](https://www.youtube.com/watch?v=KXs50X2Td2I) for an intro to our implementation of prometheus, thanos, alertmanager and more.
    1. [ ] Kubernetes
        1. [ ] Read the different sections in the [K8s Operations Howto](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/kube/k8s-operations.md) page.
        1. [ ] Review Our GKE / K8s setup - [K8s workloads](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com)
    1. [ ] Review Our Infrastructure as code - https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure
    1. [ ] Review our Configuration management: 
        1. [ ] [cookbooks](https://gitlab.com/gitlab-cookbooks/gitlab-server)
        1. [ ] [chef repo](https://ops.gitlab.net/gitlab-cookbooks/chef-repo)

1. [ ] **Making Changes**
    1. [ ] Issues and Epics
        1. [ ] Review issues labeled as `outage` in the [infrastructure issue tracker](https://gitlab.com/groups/gitlab-com/gl-infra/-/issues?scope=all&utf8=%E2%9C%93&state=closed&label_name%5B%5D=outage).
        1. [ ] Ask your onboarding buddy to point you to the ongoing Epics that define the team strategy. [Example](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/509)
        1. [ ] Familiarize yourself with the [team board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/1433541?label_name[]=team%3A%3AReliability)
   
    1. [ ] Setup the [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit/-/tree/master/) locally. Play with it. Break it. Destroy it.
    1. [ ] Get comfortable making Merge or Access Requests
        1. [ ] Make a merge request to add yourself to your team's page, example, [Reliability](https://about.gitlab.com/handbook/engineering/infrastructure/team/reliability/), [Delivery](https://about.gitlab.com/handbook/engineering/infrastructure/team/delivery/) or [Scalability](https://about.gitlab.com/handbook/engineering/infrastructure/team/scalability/).
        1. [ ] Open an [access request](https://gitlab.com/gitlab-com/access-requests/issues/new?issuable_template=New+Access+Request) to add yourself to the prod-eng-team Slack group. This will have the side effect of familiarizing yourself with access requests. Note that this is a Slack *group*, not a Slack channel. Mention `@gitlab-com/business-technology/team-member-enablement` in the MR. ([AR docs](https://about.gitlab.com/handbook/business-technology/team-member-enablement/onboarding-access-requests/access-requests/))
        1. [ ] Submit a fix to an alert in the runbooks (or submit a new one).
            1. [ ] After having the above alert MR merged, run `chef-client` in prometheus to enable the new alert.
        1. [ ] Contribute a merge request to each of the following repos: gitlab-ce, gitlab-ee, gitaly, workhorse, gitlab-runner (or take a look at the [engineering projects](https://about.gitlab.com/handbook/engineering/projects) for more inspiration). The idea here is to get comfortable with the application architecture and codebase.
        1. [ ] Make an improvement to any of the [onboarding issue templates](https://gitlab.com/gitlab-com/gl-infra/infrastructure/edit/master/.gitlab/issue_templates/) or the onboarding info in [the handbook](https://about.gitlab.com/handbook/engineering/infrastructure/sre-onboarding/).
        1. [ ] Make a cookbook change to https://gitlab.com/gitlab-cookbooks/gitlab-server
            1. [ ] Roll the above change via https://ops.gitlab.net/gitlab-cookbooks/chef-repo 
        1. [ ] If pairing is a useful vehicle for learning for you, ask to schedule some pairing sessions with team mates to pair on issues they are working on.
        1. [ ] Look at the [Team Board's](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/1433541?label_name[]=team%3A%3AReliability) "Ready" column and choose an issue to start working on. Ask to pair if you like.
1. [ ] **Next Onboarding Issue**
    1. [ ] Create a new issue and assign it to yourself, using the [Oncall Onboarding](https://gitlab.com/gitlab-com/gl-infra/infrastructure/edit/master/.gitlab/issue_templates/oncall_onboarding.md) issue template.
    
    

# Infrastructure Overview

Our core infrastructure is currently hosted on several cloud providers,
all with different functions. This document does not cover servers that
are not integral to the public facing operations of GitLab.com. 

## Azure

The main portion of GitLab.com is hosted on Microsoft Azure. We have
the following servers there.

* 5 HAProxy load balancers for GitLab.com
* 2 HAProxy load balancers for GitLab Pages
* 2 HAProxy nodes for altssh.GitLab.com
* 20 worker nodes (Nginx, Workhorse, Unicorn + Rails, Redis + Sidekiq)
* 2 PostgreSQL servers
* 5 Redis servers
* 3 Prometheus monitoring servers
* 11 NFS servers

We also use availability sets to ensure that a minimum number of servers in each
group are available at any given time. This ensures that Azure will not reboot
all instances in the same availability set at the same time for anything that
is planned.

Additionally, we utilize an Azure load balancer to manage PostgreSQL failovers.

<create graphic to go here>

This constitutes our core infrastructure.

## Digital Ocean

Digital Ocean houses several servers that do not need to directly interact
with our main infrastructure. There are many of these that do a variety of
things, however not all will be listed here.

The primary things on Digital Ocean at this time are: 

* Blackbox monitoring servers
* Shared runner managers
* Runner cache servers
* ELK servers

# Technology at GitLab

We use a lot of cool ([but boring](https://about.gitlab.com/handbook/#values)])
technologies here at GitLab. Below is a non-exhaustive list of tech we use here.

* [Ruby](https://www.ruby-lang.org/) (probably goes without saying)
* [Chef](https://www.chef.io/chef/)
* [Prometheus](https://prometheus.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Redis](https://redis.io/)
* [ELK Stack](https://www.elastic.co/products)

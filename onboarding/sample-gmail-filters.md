# Let's talk about email..

We get a lot, the labels and filters below are just meant to be a starting place to help process all the things that come in.

## Labels & Filters

### Labels:

* Issues-Comments : issues for some reason you are getting emails for - maybe issue creator/participant
* Issues-Mentions : issues in which you have been @-mentioned
* Pipelines : if you get automated emails for pipelines
* File : general label to just file things away
* File-hiring : label specific to emails from Greenhouse

### Filters:

Matches: from:(gitlab@mg.gitlab.com)
Do this: Apply label "IssuesComments"

Matches: to:(ops-contact+ops-gitlab-net@gitlab.com)
Do this: Apply label "IssuesComments"

Matches: from:(gitlab@mg.gitlab.com) <your gitlab handle>
Do this: Apply label "IssueMentions"

Matches: from:(no-reply@pagerduty.com)
Do this: Apply label "PagerDuty"

Matches: from:(notify@mg.ops.gitlab.net OR notify@mg.dev.gitlab.org) subject:Pipeline (gitlab-cookbooks OR runbooks OR gitlab.com-infrastructure OR dev-resources OR gitter-infrastructure OR gitaly OR gitlab-com-infrastructure OR gitlab-ee OR gitlabhq OR gitlab-workhorse OR omnibus-gitlab OR gitlab-shell)
Do this: Skip Inbox, Apply label "Pipelines"

Matches: from:(root@dev.gitlab.org) list:(<ops-contact.gitlab.com>)
Do this: Apply label "File"

Matches: from:(no-reply@greenhouse.io)
Do this: Apply label "File-hiring"

Matches: from:(google-my-business-noreply@google.com)
Do this: Apply label "File"

Matches: to:(ops-contact@gitlab.com) cron
Do this: Apply label "File"

Matches: from:(@sslmate.com) list:<ops-contact.gitlab.com>
Do this: Apply label "File"

### Workflow

The primary goal of all of your filters is to make sure every email coming into your inbox is labeled before your read it.
Gmail is really good at searching, so you want to be able to quickly scan and archive most things.  If you need them, you can search for them later.
Usually check email 2-3 times a day in dedicated times when you want to process things and pick the labels like Issues-Mentions first.

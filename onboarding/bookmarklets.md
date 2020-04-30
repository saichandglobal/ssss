# GitLab Infrastructure Onboarding

## Bookmarklets

### Switch between `gitlab.com` and `ops.gitlab.net`

This is useful for moving back-and-forth between mirrored repos, e.g. `ops.gitlab.net/gitlab-cookbooks/gitlab-haproxy` and `gitlab.com/gitlab-cookbooks/gitlab-haproxy`.

You can give this the short name 🔛.

```
javascript:if (location.host === "ops.gitlab.net" || location.host === "gitlab.com") { location = `${location.protocol}//${(location.host === "gitlab.com") ? "ops.gitlab.net" : "gitlab.com"}${location.pathname.replace(/\/-\/.*/, '')}` }
```

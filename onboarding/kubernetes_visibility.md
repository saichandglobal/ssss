### Kubernetes Visibility

We sometimes utilize Kubernetes, it would be wise to monitor which cluster you are connected too.

#### PS1

https://github.com/jonmosco/kube-ps1

#### tmux status line

Add something similar to this to view this on the status line inside of tmux:

```
set-option -g status-right "gcloud: #(gcloud config configurations list | grep True | awk {'print $1'}) || kubectx: #(kubectl config current-context)"
```

The above example places the name of the gcloud configuration that you may have active as well as which cluster your current context is configured too.  Example output would look something like this:

```
gcloud: gitlab-staging-1 || kubectx: gke_gitlab-staging-1_us-east1_gstg-gitlab-gke
```
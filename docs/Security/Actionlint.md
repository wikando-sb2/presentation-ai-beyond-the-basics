# Static GitHub Actions analysis with actionlint

[actionlint](https://github.com/rhysd/actionlint) checks GitHub Actions workflows for syntax,
expression, job dependency, and shell-script errors.

The official container is configured in `compose.actionlint.yaml`, so no local installation is
needed. Run all GitHub Actions checks or actionlint alone with:

```bash
make static-gha
make static-gha-actionlint
```

The Compose service has no network access and mounts the repository read-only. Its project-specific
configuration lives in `.github/actionlint.yml`. CI runs actionlint through the pinned
`devops-actions/actionlint` wrapper.

# Static GitHub Actions analysis with zizmor

[zizmor](https://docs.zizmor.sh/) checks GitHub Actions workflows for security issues such as
unpinned action references, template injection, excessive permissions, and credential persistence.

The official container is configured in `compose.zizmor.yaml`, so no local installation is needed.
Run all GitHub Actions checks or zizmor alone with:

```bash
make static-gha
make static-gha-zizmor
```

The local command scans all workflows and reads `.github/zizmor.yml` through the `ZIZMOR_CONFIG`
environment variable. The Compose service has no network access and mounts the repository read-only.

CI runs the same zizmor version through the pinned `zizmorcore/zizmor-action` wrapper. Renovate
groups updates to the local image and the CI tool version so new findings can be addressed together.

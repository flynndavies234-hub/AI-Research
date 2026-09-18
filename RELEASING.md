# Releasing AI Research

V2.2.1 uses GitHub Releases as its update provider.

For future versions, bump package.json, commit, then push a v-prefixed tag. GitHub Actions builds the NSIS installer and publishes latest.yml, the installer, and blockmap. Installed V2.2.1+ clients can detect those releases.

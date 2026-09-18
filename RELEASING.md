# Releasing an update

1. Increase the version in `package.json`, for example from `2.2.0` to `2.2.1`.
2. Commit the updated source.
3. Create and push a tag matching the version:
   ```
   git tag v2.2.1
   git push origin v2.2.1
   ```
4. GitHub Actions builds the Windows installer and publishes the release assets.
5. Installed AI Research clients can check the GitHub releases feed and download the newer version.

## Important
The application must use the GitHub update provider for:
`flynndavies234-hub/AI-Research`

Do not delete old releases until a newer release has been verified.

# Dollbrick Improv Collective

https://dollbrick.com

## Development

This is a **zero-build** React site with Cloudflare Pages Edge Functions for show-specific meta tag injection.

### Local Development

No build steps needed! It's all pure JS importing React on the fly.

* Clone the repo
* Host the server:
  * **Node** (recommended): `npm start`
  * **Python**: `cd public && python3 -m http.server 8080`
  * **VS Code Live Preview**:
    * Install the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension
    * Open the Command Palette (F1) and run `Live Preview: Start Server`
* Open the url in your browser

### Adding Shows

1. Edit [public/data/shows.js](public/data/shows.js)
2. Add your show to the `shows` array
3. Commit and push - Cloudflare Pages will auto-deploy

### Deployment

See [CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md) for Cloudflare Pages deployment instructions.

**Why Cloudflare?** Social media platforms (Discord, WhatsApp, iMessage, etc.) don't execute JavaScript when generating link previews. The Edge Function injects show-specific meta tags server-side for any request with a show ID parameter.


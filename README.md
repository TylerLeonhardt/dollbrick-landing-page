# Dollbrick Improv Collective

https://dollbrick.com

## Development

This is a **zero-build** React site that runs entirely in the browser with no build step required.

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
3. Commit and push to deploy

### Deployment

This site can be deployed to any static hosting provider:
* **GitHub Pages**: Enable in repository settings
* **Netlify**: Connect your repository and set build output to `public/`
* **Vercel**: Import your repository and set output directory to `public/`
* **Cloudflare Pages**: See [CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md) for details

No build command needed - just serve the `public/` directory!


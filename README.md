## Requirements

* https://parceljs.org/
* https://babeljs.io/

## Updating Files

1. Clone repository from GitHub
2. Install project dependencies
```
npm install
```
3. Run dev enviroment locally
```
npm run dev
```
4. Run build to deploy
```
npm run build
```
5. Commit changes and push back to GitHub repo


## Netlify Continuos Development

### Build Settings

* Build command: `npm run build`
* Publish directory: `dist/`
* Build: `Activate builds`

### Deploy contexts

* Production branch: `main`
* Deploy previews: `Any pull request against your production branch / branch deploy branches`
* Branch deploys: `Deploy only the production branch`

<!-- Deployment Trigger - 2 -->

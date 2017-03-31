# Publish Package

Before publishing, update the package version number in:
- package.json
- ack-angular/package.json

After running the build command:
- git push `/ack-angular` to `master` branch
  - NOTE : I keep a folder called ack-angular#dist to copy/paste this folder and push
  - npm publish `ack-angular` folder
- git push `/example/www/` to `gh-pages` branch
  - NOTE : I keep a folder called ack-angular#gh-pages to copy/paste this folder and push
- git push `/` to `src` branch
  - NOTE : This is what I keep as my root ack-angular folder

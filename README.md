# Angular ES6 Boilerplate "Penguin Edition"

Created by Daniel Gacitua

This is a boilerplate template based on Angular 1.6 and Webpack 2 for starting frontend projects. It uses ECMAScript 6 standard for Javascript with class-oriented design.

This template uses the following technologies:
- JavaScript with ECMAScript 6 standard
- AngularJS 1.6.5
- Angular Material 1.1.4
- jQuery 3
- Font Awesome 4
- UI-Router 1.0

## Minimum requirements

Installation steps described below are for Ubuntu 16.04:

- Node.js 4.x (or higher)

    ```
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

## Install and usage instructions

- Download this template as ZIP (either from Releases or `master` branch)
- Enter to the template's directory and edit your project name, author and license in `package.json`
- Run `npm install` to install all NPM dependencies
- Run `npm run serve` to enable developer mode with browser live reload 
- Run `npm run build` to package your project as a static web application (the result will be available on `dist` folder on project's root directory)
- To install a production NPM package, run `npm install --save <mypackage>`
- To install a development NPM package, run `npm install --save-dev <mypackage>`

## File structure
```
angular-es6-boilerplate-penguin/
├── app/
│   ├── modules/
│   │    ├── routes.js
│   │    └── services.js
│   ├── services/
│   │    ├── date.js
│   │    └── randomNumber.js
│   ├── pages/
│   │    └── main/
│   │       ├── main.css
│   │       ├── main.html
│   │       └── main.js
│   ├── index.html
│   └── index.js
├── .babelrc
├── .gitignore
├── README.md
├── package.json
└── webpack.config.js
```

## License

MIT
<h1 align="center">welcome to express-boilerplate-generator 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/github/package-json/v/open-devs/express-boilerplate-generator" />
  <a href="https://www.npmjs.com/package/express-boilerplate-generator" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/express-boilerplate-generator">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/express-boilerplate-generator">
  <img alt="npm" src="https://img.shields.io/npm/dm/express-boilerplate-generator">
  <a href="https://github.com/open-devs/express-boilerplate-generator#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-blue.svg" />
  </a>
  <a href="https://github.com/open-devs/express-boilerplate-generator/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-blue.svg" />
  </a>
  <a href="https://github.com/open-devs/express-boilerplate-generator/blob/master/LICENSE" target="_blank">
  <img alt="License: MIT" src="https://img.shields.io/npm/l/express-boilerplate-generator" />
  <img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/express-boilerplate-generator">
  </a>
</p>

> generates new [express](https://expressjs.com/) applications in everyone's favourite language [typescript](https://github.com/microsoft/TypeScript) with various options to choose from based on your project needs

### 🏠 [homepage](https://github.com/open-devs/express-boilerplate-generator#readme)

### 📰 [npm](https://www.npmjs.com/package/express-boilerplate-generator)

## install

```sh
$ npm i -g express-boilerplate-generator
```

## usage

Run anyone of following commands:

```sh
$ express-gen
# or
$ express-typescript-generator
# or
$ express-ts-gen
```

Or, to avoid installation and usage simply use the following command:

```sh
$ npx express-boilerplate-generator
```

## ❓ what is it

creates a new express application as a starter boilerplate similar to the express-gen module. except this new application is configured to use typeScript instead of plain javascript and provides various options such as, kind of project structure to use with focus on auth support along with documentaion to fasten the development process.

## 🤔 why express-boilerplate-generator

nodejs is great for the rapid development of web-projects, but is often neglected because of the lack of type safety. typescript solves this issue and (along with its linter file) can even make your code more robust than some other static languages like java.

there are some other tools out there to generate express apps with javascript such as Express application generator, but these either haven't been updated in a while or don't support typescript or don't have pre-added documentation support.

in this application you have two options to setup a project either with or without auth.

## 📜 different options available explained

<table>
<caption>description of various options available</caption>
<thead>
<tr>
<th>name</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/open-devs/express-boilerplate-generator/blob/master/lib/templates/express-server-boilerplate/README.md" target="_blank">express-server-boilerplate</a></td>
<td>this type of structure provides auth-less express server boilerplate codes to kickstart your backend development along with the support of typedoc & swagger.</td>
</tr>
<tr>
<td><a href="https://github.com/open-devs/express-boilerplate-generator/blob/master/lib/templates/express-server-boilerplate-auth/README.md" target="_blank">express-server-boilerplate-auth</a></td>
<td>this type of structure provides express server boilerplate codes to kickstart your backend development with authentication support. It uses passport-jwt and passport as dependency.</td>
</tr>
</tbody>
</table>
<br>

happy app-deving 😊

## 👤 author

 **open devs (open.devs.github@gmail.com)**

* website: https://opendevs.in/
* github: [@open-devs](https://github.com/open-devs)
* core members: [@alok722](https://github.com/alok722), [@mikr13](https://github.com/mikr13)

## 🚀 future scope

* adding docker & container configurations
* adding template support
* more template structures

## 🤝 contributing

contributions, issues and feature requests are welcome!<br />feel free to check [issues page](https://github.com/open-devs/fastify-typescript-generator/issues). you can also take a look at the [contributing guide](https://github.com/open-devs/fastify-typescript-generator/blob/master/CONTRIBUTING.md).

## 🙌 show your support

give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/opendevs" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## 📝 license

copyright © 2020 [open devs (open.devs.github@gmail.com)](https://github.com/open-devs).<br />
This project is [MIT](https://github.com/open-devs/express-boilerplate-generator/blob/master/LICENSE) licensed.

***
_this README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
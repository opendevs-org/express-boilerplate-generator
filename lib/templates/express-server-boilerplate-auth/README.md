<h1 align="center">welcome to express-server-boilerplate with auth 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-blue.svg" />
</p>

> an *auth* [express](https://expressjs.com/) server boilerplate to kickstart your backend development.

## 🛠 usage

```sh
$ git clone `URL`

$ npm i

$ npm run start:dev
```

## ❓ what is it

It is an express server boilerplate codes to kickstart your backend development with authentication support. It uses passport-jwt and passport as dependency.

<details>
<summary>:zap: API routes</summary>
* /api/auth/register -- add User <br/>
* /api/auth/login -- authenticate user <br/>
* /api/product/read -- read all products * <br/>
* /api/product/read/:_id -- read product by id * <br/>
* /api/product/add -- add product * <br/>
* /api/product/update/:_id -- update product by id * <br/>
* /api/product/delete/:_id -- delete product by id * <br/>

** _product api expects jwt token as Authorization Bearer header, you can get the token by making an api call to login after registration._
</details>

happy backend-deving 😊

## 🕺 Author

**open devs (open.devs.github@gmail.com)**

* website: https://opendevs.in/
* github: [@open-devs](https://github.com/open-devs)
* core members: [@alok722](https://github.com/alok722), [@mikr13](https://github.com/mikr13)

## 🙌 show your support

give a ⭐️ if this project helped you!


***
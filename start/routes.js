'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('books.index')

Route.on('/').render('Home')

Route.get('/books','BookController.index')

Route.get('/books/:id','BookController.details')

Route.get('users:id','UserController.show').middleware('auth')

Route.get('login','UserController.login')

Route.get('register','RegisterController')


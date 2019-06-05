'use strict'


const Book = use('App/Models/Book')

class BookController {
async index({view}){
    const books = await Book.all();
console.log(books.toJSON());
return view.render('books.index',{
    title: 'Ksiunżki',
    books: books.toJSON()
})

}
}

module.exports = BookController

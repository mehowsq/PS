"use strict";

const Book = use("App/Models/Book");

class BookController {
  async index({ view }) {
    const books = await Book.all();

    return view.render("books.index", {
      title: "Ksiunżki",
      books: books.toJSON()
    });
  }
  async details({ params, view }) {
    const book = await Book.find(params.id);
    const author = await book.author().fetch();
    console.log(book.toJSON());
    console.log(author)
    return view.render("books.details", {
      daneKsiazki: book.toJSON()
    });
  }
}

module.exports = BookController;

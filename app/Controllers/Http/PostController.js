'use strict'

class PostController {
    async index({ view }){
        const posts = [
            {title:'Pierwszy post', body:'To jest pierwszy post'},
            {title:'Drugi post', body:'To jest drugi post'},
            {title:'Trzeci post', body:'To jest trzeci post'}
        ]

        return view.render('posts.index', {
            title: 'Ostatnie posty: ',
            posts: posts
        });
    }//async zawsze przed funkcjami 
}

module.exports = PostController

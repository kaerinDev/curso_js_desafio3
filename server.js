const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    noCache:true
})

server.get('/', function(req, res){
    const about = {
        rockseat_url: "https:rocketseat.com.br",
        image:{ url: "https://camo.githubusercontent.com/e3a00cb35e63ebc807f3d6c3178e1f17c24a70f3/68747470733a2f2f726f636b6574736561742e636f6d2e62722f7374617469632f6f672e706e67", 
            name: "Rocketseat logo" },
        description: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
        tecnologias: [ "Javascript", "HTML5", "CSS3" ],
        links: [
            { url: "https://www.facebook.com/rocketseat", name: "Facebook"},
            { url: "https://www.instagram.com/rocketseat_oficial/", name: "Instagram"},
            { url: "https://twitter.com/rocketseat", name: "Twitter"}
        ]
    }
    return res.render('about', { about })
})

server.get('/courses', function(req, res){
    return res.render('content', { items: cards})
}) 

server.get('/courses/:id', function(req, res){
    const id = req.params.id
    
    const courses = cards.find(function(courses){
        return courses.id == id
        
    })
    
    if (!courses) {
        return res.render('not-found')
    }

    return res.render('courses', { item: courses})
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(5050, function(){
    console.log("funciona")
})
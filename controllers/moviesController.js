const db = require("../database/models");

module.exports = {
    list: function(req, res){
        db.Movie.findAll()
        .then((movies) => {
            res.render("movies", {movies: movies})
        })
        .catch((resultado)=> {
            console.log(resultado)
        })
        
    },
    findByPk: function(req, res){
        db.Movie.findByPk(req.params.id)
        .then((movieDetail) =>{
            res.render("detail", {movieDetail: movieDetail})
        })
            .catch((resultado) => {
                console.log(resultado)
            })
    },
    create: function(req, res){
       db.Genero.findAll()
           .then(genero => {
             res.render('crear', {genero: genero})
           })
       
    }
}
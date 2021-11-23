module.exports = (sequelize, dataTypes) => {
    let alias = "Movie";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: dataTypes.STRING,
        rating: dataTypes.DECIMAL,
        awards: dataTypes.INTEGER,
        release_date: dataTypes.DATE,
        length: dataTypes.INTEGER,
        genre_id: dataTypes.INTEGER
    };
    let config = {
        tableName: "movies",
        timestamps: false
    }
    const Movie = sequelize.define(alias, cols, config);

     Movie.associate = function(models){
        Movie.belongsTo(models.Genero,{
            as: "genero",
            foreignKey: "genre_id"
        })
    
        Movie.belongsToMany(models.Actor,{
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }
    return Movie;
}

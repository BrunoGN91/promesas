module.exports = function (sequelize, dataTypes){
    let alias = "Genero";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: dataTypes.STRING
        }
        
    
    }
    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
        Genero.hasMany(models.Movie,{
            as: "peliculas",
            foreignKey: "genre_id"
        })
    }
    return Genero
}
const { DataTypes } = require( 'sequelize' );
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = ( sequelize ) => {
  // defino el modelo
  sequelize.define( 'Activities', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
  },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dificulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:5,
         } 
    },

    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:0,
        max:24,
         } 
    },

    season: {
      type:DataTypes.ENUM("Verano", "Otoño", "Invierno","Primavera"),
      allowNull: false,
    },
  },
    {
      timestamps: false
    } )
};
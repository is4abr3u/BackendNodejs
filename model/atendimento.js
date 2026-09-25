import database from "../config/database.js"

class Atendimentos{
    constructor(){
        this.model = database.db.define("Atendimentos",{

            id: {
                type: database.db. Sequelize.INTEGER,
                primaryKey: true, 
                autoincrement: true
            }, 

            dia:{
                type: database.db. Sequelize.DATE,
            },

            hora:{
                type: database.db. Sequelize.TIME,
                unique: true
            },

            valor:{
                type: database.db. Sequelize.DECIMAL,
            },

            status:{
                type: database.db. Sequelize.STRING,
            }



        })
       
    }
}

export default new Atendimentos().model
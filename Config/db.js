const mongoose = require('mongoose')

const db = async () => {
    await mongoose.connect('mongodb+srv://kalpeshrnw:IR3SSq8dF6iEpE0a@examfinal.qci6qhn.mongodb.net/exam')
    console.log('DataBase Connected ! ')
}

module.exports = db;
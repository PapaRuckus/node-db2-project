const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = () => {
  // return db('cars').where()
}

const create = () => {
  
}


module.exports = {
  getAll,
  getById,
  create
}
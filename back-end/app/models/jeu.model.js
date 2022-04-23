const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Jeu', {
  quizId: Joi.string().required(),
  userId: Joi.string(),
  answers: Joi.array().allow([]),
  })
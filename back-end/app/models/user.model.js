const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  protanopie: Joi.boolean(),
  glaucome: Joi.boolean(),
  arthrose: Joi.boolean(),
  temps: Joi.number(),
  photo: Joi.string().allow(''),
})

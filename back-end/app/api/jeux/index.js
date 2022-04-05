const { Router } = require('express')

const { Jeu } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const { buildQuizz, buildQuizzes } = require('./manager')

const router = new Router()

router.get('/', (req, res) => {
    try {
      const jeux = buildQuizzes()
      res.status(200).json(jeux)
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.get('/:quizId', (req, res) => {
    try {
      const jeux = buildQuizz(req.params.quizId)
      res.status(200).json(jeux)
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.post('/', (req, res) => {
    try {
      const jeu = Jeu.create({ ...req.body })
      res.status(201).json(jeu)
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.put('/:quizId', (req, res) => {
    try {
      res.status(200).json(Jeu.update(req.params.quizId, req.body))
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.delete('/:quizId', (req, res) => {
    try {
      Jeu.delete(req.params.quizId)
      res.status(204).end()
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  module.exports = router
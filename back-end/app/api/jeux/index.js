const { Router } = require('express')

const { Jeu } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const QuizRouter = require('../quizzes')
const { buildJeu, buildJeux } = require('./manager')

const router = new Router()

router.use('/:jeuId/quizzes', QuizRouter)

router.get('/', (req, res) => {
    try {
      const jeux = buildJeux()
      res.status(200).json(jeux)
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.get('/:jeuId', (req, res) => {
    try {
      const jeu = buildJeu(req.params.jeuId)
      res.status(200).json(jeu)
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.post('/', (req, res) => {
    try {
      console.log(req.body)
      const jeu = Jeu.create({ userId: req.body.userId, quizId: req.body.quizId, answer: req.body.answers })
      res.status(201).json(jeu)
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.put('/:jeuId', (req, res) => {
    try {
      res.status(200).json(Jeu.update(req.params.jeuId, req.body))
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  router.delete('/:jeuId', (req, res) => {
    try {
      Jeu.delete(req.params.jeuId)
      res.status(204).end()
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  module.exports = router
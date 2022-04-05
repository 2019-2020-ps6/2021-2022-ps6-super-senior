const { Jeu } = require('../../models')

/**
 * Function buildQuizz.
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param jeuId
 */
const buildJeu = (jeuId) => {
  const jeu = Jeu.getById(jeuId)
  return jeu
}

/**
 * Function buildQuizzes.
 * This function aggregates the questions and answers from the database to build entire quizzes.
 */
const buildJeux = () => {
  const jeux = Jeu.get()
  return jeux.map((jeu) => buildJeu(jeu.id))
}

module.exports = {
  buildJeu,
  buildJeux,
}
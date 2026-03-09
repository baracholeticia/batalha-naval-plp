import express from 'express';
import GameController from './controllers/GameController.js';

const router = express.Router();

// Cria um novo jogo
router.post('/game/start', GameController.startGame);

// atualiza a tela ao recarregar a página)
router.get('/game/:id', GameController.getState);

// Executa um ataque: front vai enviar { "row": 5, "col": 5 } no nody
router.post('/game/:id/attack', GameController.attack);

export default router;
import GameService from '../services/GameService.js';

export default class GameController {
    
    // POST /api/game/start
    static startGame(req, res) {
        try {
            const { mode, gameMode, aiLevel } = req.body;
            
            const result = GameService.createGame(mode, gameMode, aiLevel);
            
            return res.status(201).json({
                message: "Jogo iniciado com sucesso!",
                gameId: result.gameId,
                state: result.gameState
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    // GET /api/game/:id
    static getState(req, res) {
        try {
            const { id } = req.params;
            const state = GameService.getGameState(id);
            
            return res.status(200).json(state);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    // POST /api/game/:id/attack
    static attack(req, res) {
        try {
            const { id } = req.params;
            const { row, col } = req.body;

            if (row === undefined || col === undefined) {
                return res.status(400).json({ error: "Linha (row) e Coluna (col) são obrigatórios." });
            }

            const result = GameService.processAttack(id, row, col);
            
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
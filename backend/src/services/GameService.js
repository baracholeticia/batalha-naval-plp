import GameEngine from '../game/GameEngine.js';
import CampaignManager from '../game/CampaingManager.js';
import { randomUUID } from 'crypto';

class GameService {
    constructor() {
        this.activeGames = new Map(); 
        this.campaignManagers = new Map();
    }

    createGame(mode = 'PVP', gameMode = 'classic', aiLevel = 1) {
        const gameId = randomUUID();

        const engine = new GameEngine({ mode, gameMode });
        this.activeGames.set(gameId, engine);

        if (mode === 'IA') {
            const humanPlayer = engine.players[0];
            const campaign = new CampaignManager(humanPlayer, { mode, gameMode });
            campaign.currentLevel = aiLevel - 1; 
            campaign.startNextLevel(engine); 
            
            this.campaignManagers.set(gameId, campaign);
        }

        return {
            gameId,
            gameState: engine.getPublicState()
        };
    }

    getGameState(gameId) {
        const game = this.activeGames.get(gameId);
        if (!game) throw new Error("Partida não encontrada!");
        return game.getPublicState();
    }

    processAttack(gameId, row, col) {
        const game = this.activeGames.get(gameId);
        if (!game) throw new Error("Partida não encontrada!");

        const humanResult = game.attack(row, col);

        let aiResult = null;

        // 2. Se for modo IA, o jogo não acabou e for a vez do PC, manda a IA jogar
        if (game.mode === 'IA' && game.state === 'playing') {
            const currentPlayer = game.getCurrentPlayer();
            
            if (currentPlayer.type === 'computer') {
                const campaign = this.campaignManagers.get(gameId);
                if (campaign) {
                    // O CampaignManager já cuida de chamar a IA correta e executar o ataque no engine
                    campaign.playComputerTurn(); 
                    aiResult = "IA realizou sua jogada."; 
                }
            }
        }

        // Retorna o estado atualizado do tabuleiro para o Frontend desenhar
        return {
            humanAttack: humanResult,
            aiAttackMsg: aiResult,
            gameState: game.getPublicState()
        };
    }
}

export default new GameService();
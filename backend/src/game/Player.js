export default class Player {
    constructor(id, name, type='human') {
        this.id = id;
        this.name = name;
        this.type = type;
        this.board = null;

        this.hasMovedThisTurn = false; //indica s eo jogador ja movimentou algum navio(modo dinamico)
    }

    setBoard(board) {
        this.board = board;
    }

    attack(targetPlayer, row, col){
        if(!this.board){
            throw new Error("Jogador não possui um tabuleiro definido");
        }
        if(!targetPlayer.board){
            throw new Error("Jogador alvo não possui um tabuleiro definido");
        }
        return targetPlayer.board.receiveAttack(row, col);
    }
}
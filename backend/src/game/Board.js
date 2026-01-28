class Board{
    constructor(){
        this.grid = this.createGrid(10, 10); //cria um tabuleiro 10x10
        this.ships = []; //lista de navios não afundados no tabuleiro
        this.attacks = []; //lista de ataques já realizados
    }   

    createGrid(rows, cols){
        const grid = [];
        for(let i = 0; i < rows; i++){
            const row = new Array(cols).fill(null);
            grid.push(row);
        }   
        return grid;
    }

    isValidPlacement(ship, row, col, orientation) {
        if (orientation === 'horizontal') {
            if (col + ship.size > 10){
                return false;
            }
        } else {
            if (row + ship.size > 10){
                return false;
            }
        }
        //verificca se a posição já está ocupada
        for (let i = 0; i < ship.size; i++) {
            let targetRow;
            let targetCol;
            if (orientation === 'horizontal') {
                targetRow = row;
                targetCol = col + i;
            }else {
                targetRow = row + i;
                targetCol = col;
            }
            if (this.grid[targetRow][targetCol] instanceof Object) {
                return false;
            }
        }
        return true;
    }


    placeShip(ship, row, col, orientation){
        //row e col variam de 0 a 9
        //orientation pode ser 'horizontal' ou 'vertical'

        if(!this.isValidPlacement(ship, row, col, orientation)){
            throw new Error("Posição inválida para o navio");
        }

        if(orientation === 'horizontal'){
            for(let i = 0; i < ship.size; i++){
                this.grid[row][col + i] = ship;
            }
        } else if (orientation === 'vertical'){
            for(let i = 0; i < ship.size; i++){
                this.grid[row + i][col] = ship;
            }
        }
        this.ships.push(ship);
    }

    receiveAttack(row, col){

        const attackKey = `${row},${col}`;
        if(this.attacks.includes(attackKey)){
            throw new Error("Posição já atacada");
        }

        this.attacks.push(attackKey);
        const target = this.grid[row][col];

        if(target instanceof Object){ 
            target.hit();
            if(target.isSunk()){
                return{
                    status: 'sunk', //acertou e afundou
                    ship: target
                };
            } else {
                return {
                    status: 'hit' //apenas acertou
                };
            }
        } else {
            return {
                status: 'miss' //errou
            };
        }
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.isSunk());
    }
}
module.exports = Board;
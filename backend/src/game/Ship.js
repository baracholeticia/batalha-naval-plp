class Ship{
    constructor(type, size){
        this.type = type;
        this.size = size;
        this.hits = 0; //número de acertos no navio
        this.sunk = false; //informa se o navio está afundado
    }

    hit(){
        if(!this.sunk){
            this.hits++;
        }
        if(this.hits >= this.size){
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }
}

module.exports = Ship;
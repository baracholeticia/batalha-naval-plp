export default class Ship{
    constructor(id, type, size){
        this.id = id;
        this.type = type;
        this.size = size;
        this.hits = 0; //número de acertos no navio
        this.sunk = false; //informa se o navio está afundado

        this.row = null;
        this.col = null;
        this.orientation = null;
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
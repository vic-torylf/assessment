const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let playing = true;

class Field {
    constructor(field) {
        this._field = field;
        this.positionY = 0;
        this.positionX = 0;
    }

    get field() {
        return this._field;
    }

    print() {
        return this.field.map(row =>
            row.join('')
        ).join('\n');
    }

    ask() {
        let move = prompt('Go find your hat');
        switch(move.toLowerCase()) {
            case 'w':
                console.log('Moving up');
                this.positionY -= 1;
                break;
            case 'd':
                console.log('Moving right');
                this.positionX += 1;
                break;
            case 's':
                console.log('Moving down');
                this.positionY += 1;
                break;
            case 'a':
                console.log('Moving left');
                this.positionX -= 1;
                break;
            default:
                console.log('press w, a, s, d to move');
                this.ask;
                break;
        }    
    }

    checkWin() {
        if (this.field[this.positionY] == undefined || this.field[this.positionX] == undefined) {
            console.log('You are out of boundary.')
            return playing = false;
        }
        switch (this.field[this.positionY][this.positionX]) {
            case hat:
                console.log('You found it!')
                playing = false;
                break;
            case hole:
                console.log('You fell in a hole!');
                playing = false;
                break;
            case fieldCharacter:
                console.log('Keep looking for the hat...');
                this.field[this.positionY][this.positionX] = pathCharacter;
                break;
        }
    }
    
    static generateField(height, width, percentage) {

        const fieldOrHole = (percentage) => {
            if (percentage >= 0 && percentage <= 100) {
              const ranNum = Math.random() * 100;
              if (ranNum < percentage) {
                return hole;
              } else {
                return fieldCharacter;
              }
            } else {
              console.log('Please enter a number between 0 - 100');
            }
        }

        const plainField = () => {
            function makeWidthArray() {
                let widthArray = [];
                for (let i=0; i < width; i++) {
                    widthArray.push(fieldOrHole(percentage));
                }
                return widthArray;
            }
            let plainField = [];
            for (let i=0; i < height; i++) {
                plainField.push(makeWidthArray());
            }
            return plainField;
        }

        const gameReadyField = plainField();

        do {
            gameReadyField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hat;
        }   while (gameReadyField[0][0] == hat);
        
        gameReadyField[0][0] = pathCharacter;

        return gameReadyField;
    }

}

const myField = new Field(Field.generateField(10,10,20));

function game() {
    while(playing) {
        console.log(myField.print());
        myField.ask();
        myField.checkWin();
    }
    console.log('Game Over!');
}

game();



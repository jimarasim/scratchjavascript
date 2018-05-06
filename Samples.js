module.exports = class Samples {
    outputConsoleLog(message) {
        console.log(message);
    }
    
    printCharactersBackwards(input) {
        let x = new String();
        for(let i=input.length-1;i > -1; i--) {
            x += input.charAt(i);
        }
        return x;
    }
    
    printSentenceBackwards(input) {
        let x = input.split(' ');
        let y = new String();
        for(let i=x.length-1; i > -1; i--) {
            y += x[i] + ' ';
        }
        return y;
    }
    
    firstNonRepeatingCharacter(input) {
        let x = new Map();
        for(let i=0; i<input.length; i++) {
            let character = input.charAt(i);
            if(x.has(character)) {
                let increment = x.get(character)+1;
                x.set(character,increment);
            } else {
                x.set(character,1);
            }
        }
        
        for(let i of x.keys()) {
            if(x.get(i) === 1) {
                return i;
            }
        }
        
        return '';
    }
};



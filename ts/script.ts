function random (){
    let num:number;
    num = Math.floor((Math.random()*100)+1);
    return num
}


class player {
    name: string;
    choice: number;
    constructor(name:string , choice:number){
        this.name = name;
        this.choice = choice;
    }

    
    error(value:number) {
        let error:number = Math.abs(this.choice - value);
        return error;
    }
}

function startGame(){
let p1 = new player('Rick', random())
let p2 = new player('Morty', random())


let extracted:number = random()

if(p1.choice == extracted){
    console.log(`******\n${p1.name} ha indovinato! \nEstratto: ${extracted}\n******`)
    console.log(`scelta di ${p1.name}: ${p1.choice}`)
    console.log(`scelta di ${p2.name}: ${p2.choice}`)
}else if(p2.choice == extracted){
    console.log(`******\n${p2.name} ha indovinato! \nEstratto: ${extracted}\n******`)
    console.log(`scelta di ${p1.name}: ${p1.choice}`)
    console.log(`scelta di ${p2.name}: ${p2.choice}`)
}else if(p1.error(extracted) < p2.error(extracted)){
    console.log(`***\nNessuno ha indovinato, ma ${p1.name} si è avvicinato di più, bravo! \nEstratto: ${extracted}`)
    console.log(`scelta di ${p1.name}: ${p1.choice}`)
    console.log(`scelta di ${p2.name}: ${p2.choice}`)
}else{
    console.log(`***\nNessuno ha indovinato, ma ${p2.name} si è avvicinato di più, bravo! \nEstratto: ${extracted}`)
    console.log(`scelta di ${p1.name}: ${p1.choice}`)
    console.log(`scelta di ${p2.name}: ${p2.choice}`)
}

}

startGame()



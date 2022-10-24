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
        return error
    }
}

function startGame(){
let p1 = new player('Rick', random())
let p2 = new player('Morty', random())
// console.log(p1.name, p1.choice, p1.error(50))

let extracted:number = random()

if(p1.choice == extracted){
    console.log(`******\n ${p1.name} ha indovinato! Estratto: ${extracted}\n******`)
}else if(p2.choice == extracted){
    console.log(`******\n ${p2.name} ha indovinato! Estratto: ${extracted}\n******`)
}else if(p1.error < p2.error){
    console.log(`***\nNessuno ha indovinato, ma ${p1.name} si è avvicinato di più, bravoh \n Estratto: ${extracted} \n scelto: ${p1.choice}\n***`)
}else{
    console.log(`***\nNessuno ha indovinato, ma ${p2.name} si è avvicinato di più, bravoh \n Estratto: ${extracted} \n scelto: ${p2.choice}\n***`)
}

}

startGame()



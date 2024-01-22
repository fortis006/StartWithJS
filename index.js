// function CreateCard(InitName)   //構造函數
// {
//     this.name = InitName
// } 

class Card1  
{
    constructor(InitName)
    {
        this.name = InitName
    }
}

const c1 = new  Card1("YI-AN")
console.log(c1.name);



class Card2  
{
    constructor(InitName)
    {
        this.name = InitName
        this.hello2 = this.hello.bind(this) //綁定this永遠指向Card2
    }
    hello () {
        console.log("hello", this.name)
    }
}

const n1 = {name: "UC"}
n1.hello2 = c1.hello
n1.hello2()
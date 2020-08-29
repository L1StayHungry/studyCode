class Student{
    constructor(name,number){
        this.name=name;
        this.number=number;

    }

    sayHi(){
        console.log(`姓名 ${this.name},学号 ${this.number}`)
    }
}

class teacher extends Student{
    constructor(name,number,major){
        super(name,number)
        // this.number=number
        this.major=major
    }

    eatsome(){
        console.log(`${this.name} 111`)
    }
}

const xialuo =new Student('下落',100)
console.log(xialuo.name)
xialuo.sayHi()

const lwo =new teacher('下我',100,100)
console.log(lwo.name)
lwo.sayHi()
lwo.eatsome()

console.log(lwo instanceof teacher)
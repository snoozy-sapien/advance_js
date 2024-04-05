let myName = "mohit    "

console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mohit = function(){
    console.log(`mohit is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Mohit says hello`);
}

heroPower.mohit()
myHeros.heyMohit()


//innheritance

const Teacher = {
    makeVideo: true
}

const TASupport = {
    isAvailable: false
}

const TeachingSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport,
}

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
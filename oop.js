const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "mohit",
    loginCount: 2,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

const promiseOne = new Promise()
// "new" keyword is a constructor function, allow to make single instances
const date = new Date() 


function User(username, loginCount, isLoggedIn){
    this.Username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User("mohit", 12, true)
// const userTwo = User("chai", 11, false)
// console.log(userOne);
//here values will overwrite therefore we use "new" keyword

const userOne = new User("mohit", 12, true)
const userTwo = new User("chai", 11, false)
console.log(userOne);
console.log(userTwo);
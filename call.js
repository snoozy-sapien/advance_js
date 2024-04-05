function SetUsername(username){
    //complex DB calls
    this.Username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
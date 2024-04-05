//creation of promise

const promiseOne = new Promise(function(resolve, reject){
    //DO an async task
    //ex. DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
//promise will resolve or reject


//or
promiseOne.then(function(){
    console.log("promise consumed")//1st task will complete then this will print
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aync task 2");
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(ressolve, reject){
    setTimeout(function(){
        reesolve({username: "chai", email: "hur@gmail.com"}, 1000)
    })

    promiseThree.then(function(user){
        console.log(user);
    })
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"mohit", password:"1234"})
        }
        else{
            reject('ERROR: Sommething weent wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finnally(() => console.log("The promise is. either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"mohit", password:"5678"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUsers(){
    const response = await fetch('https://api.publicapis.org/entries')
    const data = response.json()
    console.log(data);
} catch (error){
    console.log("E:", error);
}
getAllUsers()

fetch('https://api.publicapis.org/entries')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
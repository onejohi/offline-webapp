(function() {
    //Check to see if localStorage is supported
    if(window.localStorage)
        console.log("Local Storage Supported")
    else
        console.log("No support for Local Storage")

    //prompt user for username and age
    let username = prompt("Enter username:", "")
    let age = prompt("Enter age:", "")

    //add username and age to localstorage
    window.localStorage.setItem("username", username)
    window.localStorage.setItem("age", age)

    //show number of objects stored
    console.log(window.localStorage.length)

    console.log(window.localStorage.getItem("username"))
    console.log(window.localStorage.getItem("age"))

})();
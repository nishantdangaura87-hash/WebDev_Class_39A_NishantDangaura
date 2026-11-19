let isLoggedIn = false;
// let role = "admin";
let role = "guest";


if(isLoggedIn === false){
    console.log("Please login");
    if( role === "admin" ){
            console.log("Welcome Admin");
    }
    else{
        console.log("welcome user")
    }
}
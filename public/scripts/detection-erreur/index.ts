const values = [1, 2, 3, 4, 5];

if (values.length > 2) {
    console.log("array has more than two items");
}else {
    console.log("array has two items or less");
}


function greet(user: { username: string }){
    return "Hello, " + user.username.toUpperCase();
}

const user = { username: "Marissabelle" };
greet(user);
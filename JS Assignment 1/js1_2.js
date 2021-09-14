let obj = [{username : "user1", password: "password"},
{username : "user2", password: "password1"},
{username : "user3", password: "password2"},
{username : "user4", password: "thispassword"} ];

let username_given = prompt(`Please enter your username:`).toString();
let password_given = prompt(`Please enter your password:`).toString();


function function_objects (user, pass, ob){
    if (ob.map((o) => o.username === user && o.password === pass).includes(true)) 
    {
        alert("You have been logged in.");
    } 
    else 
    {
        alert("Username and password not found.");
    }
}

function_objects(username_given, password_given, obj);

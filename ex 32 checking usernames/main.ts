// Array of current users
let Current_users = [ "Zain", "Zunair", "Huzaifa", "Ahsan"]

// Array of new users
let new_users = ["Hamza", "Zunair", 'Zain', "Mahad", "Areeb"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_users =>{

    //Making a condition for username already exist and save in our_condition variable
    let our_condition = Current_users.some(Current_one_users => Current_one_users.toLowerCase() === new_one_users.toLowerCase())

    // Print Different messages using If-Else statements
    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken!`)
    }else{
        console.log(`This username ${new_one_users} is available`)
    }   
})
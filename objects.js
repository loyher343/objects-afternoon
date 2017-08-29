// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here

var user = {
    name : 'loy',
    age  : '23',
    password : 'password',

};

// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here
user.email = 'email@email.com';
user.alertUser = alert(user.name);


// Now loop over your user object and alert each of the keys.

// Code Here
for(var key in user){
    alert(user.key)
}    



// Now loop over your user object and alert each of the values for each key.

// Code Here
for(var key in user){
    alert(user[key])
}


// Remove the username from your user object

// Code Here
delete user.name;


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

// Code Here
var creditCard = {
    number: 12345434543,
    cvc   :  545,
    type  : "master",
    limit :  12
}


// Create a variable called alternating. Set it equal to the string bonusCategories.

// Code Here
var alternating = 'bonusCategories';


/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */

// Code Here
    creditCard[alternating] = [obj{key1:val1,key2:val2}, obj1{key3:val3,key4:val4}]
    creditCard.bank = {name:'the Wells',address: '1233 somewhere st'}


// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here
function merge(obj1,obj2){
    return obj = Object.assign(obj1,obj2)
}

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here

  function (obj){
    for(var i = 0; i < obj.allies.length; i++){
        // return o.allies[i];
        if(obj.allies[i]==='LittleFinger'){
            obj.allies.splice(i,1);
            obj.allies.push('Dragon Lady')
            return obj.allies
        }
    }
  }

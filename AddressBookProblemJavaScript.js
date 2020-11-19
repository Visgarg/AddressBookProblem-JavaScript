const { keyIn } = require('readline-sync');
const { isPrimitive } = require('util');

//defining new class Address book
class AddressBook
{
    //creating parametrized constructor using spread array
    constructor(...params)
    {
        //defining first name, last name, address , city, state, zip, phone number and email
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    //getter and setter for first name
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else throw "Invalid first Name";
    }
    //getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else throw "Invalid last Name";
    }
    //getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex= RegExp('^[A-Z0-9a-z]{4,}$');
        if(addressRegex.test(address))
            this._address= address;
        else throw "Incorrect Address";
    }
    //getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(cityRegex.test(city))
            this._city= city;
        else throw "Incorrect city";
    }
    //getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(stateRegex.test(state))
            this._state= state;
        else throw "Incorrect State";
    }
    //getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex= RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Incorrect zip";
    }
    //getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneNumberRegex= RegExp('^[7-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else throw "Incorrect phone number";   
    }
    //getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex= RegExp('^[a-z]{1}[a-z0-9]{2,}([._+-]?[a-z0-9]+)?[@]{1}[a-z1-9]+[.]{1}(co|net|com|gov)([.]{1}[a-z]{2,3})?$')
        if(emailRegex.test(email))
            this._email= email;
        else throw "Invalid Email";
    }
    //defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+"\nlast Name: "+this.lastName+"\nAddress: "+ this.address+"\nCity: "+ this.city+"\nState: "+this.state+"\nZip: "+this.zip+"\nPhone Number: "+this.phoneNumber+"\nemail: "+this.email+"\n"; 
    }
    
}
let addressBookArray= new Array();
let cityMap= new Map();

prompt= require('readline-sync');
while(true)
{
    try
    {
     let firstName= prompt.question("Please enter your firstName: ");
     if(firstName=="")
      break;
     let lastName= prompt.question("Please enter your lastName: ");
     let address= prompt.question("Please enter your Address: ");
     let city= prompt.question("Please enter your city: ");
     let state= prompt.question("Please enter your state: ");
     let zip= prompt.question("Please enter your zip: ");
     let phoneNumber= prompt.question("Please enter your phonenumber: ");
     let email = prompt.question("please enter your email: ");
     let addressBook= new AddressBook(firstName,lastName,address,city,state,zip,phoneNumber,email);
     //UC 7 Checking if details already exists in table
     if(addressBookArray.find(contacts=>contacts.firstName==addressBook.firstName && contacts.lastName==addressBook.lastName && contacts.address==addressBook.address && contacts.city==addressBook.city && contacts.state==addressBook.state && contacts.zip==addressBook.zip && contacts.phoneNumber==addressBook.phoneNumber && contacts.email==addressBook.email))
        throw "Details you are entering already exists";
    else
        addressBookArray.push(addressBook);

     console.log("\nDetails entered successfully, please enter first name to add more details else press enter");
    }
    catch(e)
     {
        console.error(e);
        console.log("Please enter input again");
     }
}  

try
{ 
    //Creating object for class Address book with parameters for constructor
    let addressBookObject= new AddressBook("Vishal","Garg","Barwala","Hisar","Haryana","125 121",8570934858,"vishal.garg@capgemini.com");
    //creating array and pushing address book object inside array
    addressBookArray.push(addressBookObject);
    let addressBookObject1= new AddressBook("Mahak","Singla","Sector14","Hisar","Haryana",125001,9595959595,"mahak.singla@gmail.com")
    addressBookArray.push(addressBookObject1);
    //cityMap.set(addressBookObject1.city,cityArray.push(addressBookObject1));
    let addressBookObject2= new AddressBook("Darpan","Singhal","Adampur","Jind","Haryana","136 119","7895432343","darpan.singhal@exl.com");
    addressBookArray.push(addressBookObject2);
    //cityMap.set(addressBookObject2.city,cityArray.push(addressBookObject2));
    //printing all the details pushed in array
    console.log("\nPrinting Address book array\n")
    addressBookArray.forEach(contact=>console.log(contact.toString()));
    //Editing Details in the address book using filter and foreach
    console.log("\nUC-4Editing the array\n")
    addressBookArray.filter(contact=>contact.firstName=="Vishal"&& contact.city=="Hisar").forEach(contact=>{contact.lastName="Kumar"; contact.address="Mumbai"} );;
    addressBookArray.forEach(contact=>console.log(contact.toString()));
   
}
catch(e)
{
    console.error(e);
}
 //deleting details from the address book array 1st method
 let filteredArray= addressBookArray.filter(contact=>contact.firstName!="Vishal" && contact.lastName!="Kumar");
 console.log("\nUC-5Deleting Elements from array, by making new array and not adding specific values\n");
 //console.log(deletedArray);
 filteredArray.forEach(contact=>console.log(contact.toString()));
 //deleting details from address book array 2nd method
 console.log("\nUC-5Deleting Elements from array, using splice\n");
 for(let contact=0;contact<addressBookArray.length;contact++)
 {
     if(addressBookArray[contact].firstName=="Vishal" && addressBookArray[contact].lastName=="Kumar")
     {
         addressBookArray.splice(contact,1);
     }

 }
console.log("UC5-Deleting Elements from array -2nd method\n");
addressBookArray.forEach(contact=>console.log(contact.toString()));

//UC6 finding out the size of array using reduce function
let addressBookCount= addressBookArray.reduce((count,contact)=>count= count+1,0);
console.log("UC6-Printing the count of address book contacts: "+addressBookCount);
//UC8 ability to search person in particular city or state
console.log("\nUC8- Searcing for contacts in city Hisar\n")
addressBookArray.filter(contact=>contact.city.includes("Hisar")).forEach(contact=>console.log(contact.toString()));
//UC8 searching for a person in specific state
console.log("\nUC8- Searcing for contacts in state Haryana\n")
addressBookArray.filter(contact=>contact.firstName.includes("Mahak")&& contact.state.includes("Haryana")).forEach(contact=>console.log("UC8 Searching for mahak in specific state Haryana:\n"+contact.toString()));
//UC9 viewing contact details by city
//debugger;
/*let cityArray=new Array();
for(let contacts of addressBookArray)
{
    if(!cityMap.keys.includes(contacts.city))
    {
         cityArray= new Array();
        cityMap.set(contacts.city,cityArray.push(contacts));
    }
    else
    {
        cityMap.set(contacts.city,cityArray.push(contacts));
    }
}
console.log(cityMap);*/
//creating array of cities, adding all cities in one array
let citiesArray= new Array();
 addressBookArray.forEach(contact=>{if(!citiesArray.includes(contact.city)) {citiesArray.push(contact.city)}});
 //iterating over each city and printing values for each city
 console.log("\nUC9- viewing persons for each city\n");
 for(let cities of citiesArray)
 {
     //printing city
     console.log(cities+"==>");
     //printing all the contact details for each city using foreach and filter
    addressBookArray.filter(contact=>contact.city==cities).forEach(contact=>console.log(contact.toString()));
 }
 //creating array of states, adding all states in one array
let statesArray= new Array();
addressBookArray.forEach(contact=>{if(!statesArray.includes(contact.state)) {statesArray.push(contact.state)}});
//iterating over each city and printing values for each state
console.log("\nUC9- viewing persons for each city\n");
for(let states of statesArray)
{
    //printing state
    console.log(states+"==>");
    //printing all the contact details for each state using foreach and filter
    addressBookArray.filter(contact=>contact.state==states).forEach(contact=>console.log(contact.toString()));
}
//UC10 Printing the count for each city or state
console.log("\nUC10-Printing count by city");
for(let cities of citiesArray)
{
    //gtting length of contacts for particular city
    console.log(cities+"=>"+(contacts=>contacts.city.includes(cities)).length);
}
//UC10 Printing the count for each city or state
console.log("\nUC10-Printing count by states");
for(let states of statesArray)
{
    console.log(states+"=>"+(contacts=>contacts.state.includes(states)).length);
}
//UC11 sorting entries on the person name
//creating personNames array which contain first names and last names of each individual in address book
let personNames= new Array();
addressBookArray.forEach(contact=>{
    if(!personNames.includes(contact.firstName+" "+contact.lastName))
    {
    personNames.push(contact.firstName+" "+contact.lastName);
    }
});
//sorting personNames array
console.log(personNames.sort());
console.log("\nUC11-Printing contacts sorted by names");
for(let person of personNames)
{
    //filtering contacts by checking if first name and last name include person from person names and printing each contact which is filtered.
    addressBookArray.filter(contacts=>person.includes(contacts.firstName+" "+contacts.lastName)).forEach(contact=>console.log(contact.toString()));
}
//making variable check to specify to whether sorting is to be done on city, state or zip.
let check= "city";
//UC12 Sorting the Address Book by city, state or zip
console.log("\nUC12-Sorting contacts by city\n");
//sorting by array containing objects of string type is done by comparing ascii values
addressBookArray.sort(contacts=>
    {
        let a= contacts.check;
        let b= contacts.check;

        if(a<b)
            return -1;
        if(a>b)
            return 1;
        return 0;
    }).forEach(contacts=>console.log(contacts.toString()));
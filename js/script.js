$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault();

    })


function Contact(first,last,street,city,state){
    this.firstname=first;
    this.lastname=last;
    this.address=address;
    this.street=street;
    this.city=city;
    this.state=state;
    
}
let inputFirstName=$("input#first-name").val();
let inputLastName=$("input#first-name").val();
let inputAddressName=$("input#address").val();
let inputStreet=$("input#street").val();
let inputCity=$("input#city").val();
let inputState=$("input#state").val();

let newContact=contact(inputFirstName,inputLastName,inputState,inputStreet,inputAddressName)
}


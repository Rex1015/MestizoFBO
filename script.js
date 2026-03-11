function scrollToBooking(){

document.getElementById("booking").scrollIntoView({
behavior:"smooth"
});

}

function showContact(){

let form = document.getElementById("contactForm");

if(form.style.display === "none" || form.style.display === ""){
form.style.display = "block";
}
else{
form.style.display = "none";
}

}

document.getElementById("bookingForm").addEventListener("submit", function(event){

event.preventDefault();

alert("Thank you! Your booking request has been received. Our team will contact you shortly.");

});

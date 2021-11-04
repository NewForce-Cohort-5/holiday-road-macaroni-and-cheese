export const Parks = (park) => {
    return `
    <section class="parkcard">
        <div class="park_name">${park.fullName}
       
        <button id="parks-details" type="button">Details</button></div>
        <article id="parkinfo" style="display: none;">
        <p class="park_url"><a href=${park.url} target="_blank" rel="noopener noreferrer"> Visit the website</a></p> 
        <div class="park_latitude">${park.latitude}</div>
       
        <div class="park_longitude">${park.longitude}</div>
        <div class="park_state">${park.states}</div>
        
         <div class="park_state">${park.description}</div>
         <div class="park_zip">${park.addresses[0].postalCode}</div>
         <div class="park_phone">${park.contacts.phoneNumbers[0].phoneNumber}</div>
         <div class="park_email">${park.contacts.emailAddresses[0].emailAddress}</div>
         </article>
         </section>

    `
}
//  phoen number diplay format= the dispyed right

 
document.querySelector(".parks-container").addEventListener("click", (event)=> {

  if(event.target.id === "parks-details")
    var x = document.getElementById("parkinfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
)
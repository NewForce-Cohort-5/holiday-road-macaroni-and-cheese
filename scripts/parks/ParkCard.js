export const Parks = (park) => {
    return `
    <section id="parkinfo">
        <div class="park_name">${park.fullName}</div>
        <button id="parks-details" type="button">Details</button>
        <p class="park_url"><a href=${park.url} target="_blank" rel="noopener noreferrer"> Visit the website</a></p> 
        <div class="park_latitude">${park.latitude}</div>
        </section>
        <div class="park_longitude">${park.longitude}</div>
        <div class="park_state">${park.states}</div>
         </section>
         <div class="park_state">${park.description}</div>
         </section>

    `
}
//  <div class="park_contact_eMail">${park.data.contacts.phoneNumners.emailAddresses}</div>
//<div class="park_contact_phone">${park.data.contacts.phoneNumners[0].phoneNumber}</div> II need a help with how to reach the info
 
document.querySelector(".parks-container").addEventListener("click", ()=> {
    var x = document.getElementById("parkinfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
)
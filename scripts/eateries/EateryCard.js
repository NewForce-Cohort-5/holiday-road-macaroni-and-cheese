export const Eateries = (eateries) => {
    return `
    <section id="eateries_card>
    <div class="eateries_name"><p>
        ${eateries.businessName}</p>
    </div>
    <button id="eateries-details" type="button">Details</button>
    <article id="eatinfo" style="display: none;">
    <div class="eateries_city">
    ${eateries.city}
</div>
     <div class="eateries_state">
         ${eateries.state}
     </div>

    <div class="eateries_blurb">
        ${eateries.description}
    </div>
    <div class="eateries_ameneties_wheelchairAccessible">Wheelchair Accessible: 
    ${eateries.ameneties.wheelchairAccessible}
</div>
<div class="eateries_ameneties_petFriendly">Pet Friendly: 
    ${eateries.ameneties.petFriendly}
</div>
<div class="eateries_ameneties_wifi">wifi: 
    ${eateries.ameneties.wifi}
</div>
<div class="eateries_ameneties_restrooms">Restrooms: 
    ${eateries.ameneties.restrooms}
</div>
</article>
</section>
    `
 
}



document.querySelector(".eateries-container").addEventListener("click", (event)=> {

    if(event.target.id == "eateries-details")
    var x = document.getElementById("eatinfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
)
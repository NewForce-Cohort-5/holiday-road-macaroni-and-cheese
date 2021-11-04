export const Attractions = (attractions) => {
    return `
        <section id="attractions_card>
            <div class="attractions_name">
                ${attractions.name}
            </div>

            <button id="attractions-details" type="button">Details</button>

            <article id="attractioninfo" style="display: none;">
             <div class="attractions_state">
                 ${attractions.state}
             </div>

             <div class="attractions_city">
                 ${attractions.city}
             </div>

            <div class="attractions_blurb">
                ${attractions.description}
            </div>
            </article>
        </section>
            `
}

document.querySelector(".attractions-container").addEventListener("click", (event) => {

    if(event.target.id === "attractions-details")
    var x = document.getElementById("attractioninfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
)

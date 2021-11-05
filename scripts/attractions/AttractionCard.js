export const Attractions = (attractions) => {
    return `
        <section id="attractions_card>
            <div class="attractions_name">
                ${attractions.name}
            </div>
            <button id="attractions-details" type="button">Details</button>
            <article id="attractionsinfo" style="display: none;">
             <div class="attractions_state">
                 ${attractions.state}
             </div>

            <div class="attractions_blurb">
                ${attractions.description}
            </div>

        </section>
            `
}
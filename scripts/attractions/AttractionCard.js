export const Attractions = (attractions) => {
    return `
        <section id="attractions_card>
            <div class="attractions_name">
                ${attractions.name}
            </div>

             <div class="attractions_state">
                 ${attractions.state}
             </div>

            <div class="attractions_blurb">
                ${attractions.description}
            </div>

        </section>
            `
}
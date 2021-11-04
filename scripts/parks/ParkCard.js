export const Parks = (park) => {
    return `
    <section id="parks_card">
        <div class="park_name">${park.data.fullName}</div>
        <p class="park_url"><a href=${park.data.url}> Visit the website</a></p> 
        <div class="park_latitude">${park.data.latitude}</div>
        </section>
        <div class="park_longitude">${park.data.longitude}</div>
        <div class="park_state">${park.data.state}</div>
        <div class="park_contact_phone">${park.data.contacts.phoneNumners[0].phoneNumber}</div>
        <div class="park_contact_eMail">${park.data.contacts.phoneNumners.emailAddresses}</div>
        </section>
    `
}
//   add here 
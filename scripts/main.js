import { ParkSelect } from "./parks/ParkSelect.js";
import { AttractionSelect } from "./attractions/AttractionSelect.js"
import {EaterySelect} from "./eateries/EaterySelect.js"
import { settings } from "./Settings.js"

//console.log (settings.npsKey)







ParkSelect()
EaterySelect()
AttractionSelect()

// 

// document.querySelector("#parks-details").addEventListener("click", ()=> {
//     var x = document.getElementById("parkinfo");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// 
// Hides and shows info when "details" button is clicked
// document.querySelector("#parks-details").addEventListener("click", ()=> {
//     var x = document.getElementById("parkinfo");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   })


document.querySelector("#parks-details").addEventListener("click", ()=> {
    var x = document.getElementById("parkinfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
)

<<<<<<< HEAD
document.querySelector(".attractions-container").addEventListener("click", ()=> {
    var x = document.getElementById("attractioninfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
=======
// document.querySelector("#attractions-details").addEventListener("click", ()=> {
//     var x = document.getElementById("attractioninfo");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
>>>>>>> main
    
// )

document.querySelector("#eateries-details").addEventListener("click", ()=> {
    var x = document.getElementById("eatinfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
)



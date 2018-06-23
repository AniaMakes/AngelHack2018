import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { vibration } from "haptics";



// Update the clock every minute
//clock.granularity = "minutes";

// Get a handle on the <text> element

const mybutton = document.getElementById("mybutton");


// Update the <text> element every tick with the current time
// clock.ontick = (evt) => {
//   let today = evt.date;
//   let hours = today.getHours();
//   if (preferences.clockDisplay === "12h") {
//     // 12h format
//     hours = hours % 12 || 12;
//   } else {
//     // 24h format
//     hours = util.zeroPad(hours);
//   }
//   let mins = util.zeroPad(today.getMinutes());
//   myLabel.text = `${hours}:${mins}`;
// }


 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let runBeat = false;

function toggle(){
  console.log(toggle);
  if (runBeat){
    runBeat = false;
    mybutton.text = "Click Me!";

  }
  else{
    runBeat = true;
    generateBeats(500);
    
  }
}


function generateBeats(delay) {
  if (runBeat) {
      console.log("beat");
      vibration.start("bump");
     mybutton.text = "Clicked";

        setTimeout(function () {
      generateBeats(delay);
    }, delay);
    
  }
}

mybutton.onactivate = function(evt) {
  console.log("CLICKED!");
  toggle();
}

// generateBeats(500);

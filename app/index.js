import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { vibration } from "haptics";
import document from "document";

import { display } from "display";
display.autoOff = false;
display.on = true;

const mybutton = document.getElementById("primary-button");
const musicButton = document.getElementById("music-button");
const chaChaButton = document.getElementById("music-button-2");


function BpmToMs(bpm) {
  return 60*1000/bpm;
}

var runBeat = false;
let runMusic = false;
var bpm = 100;
var increment = 2;

/*
  generateBeats(delay)
  delay - ms
*/
function generateBeats() {
  if (runBeat) {
      console.log("beat");
      vibration.start("bump");
      evaluateText();
      setTimeout(function () {   generateBeats();},  BpmToMs(bpm));

  }
}

function waltz(callback) {
	setTimeout(function() {
		setTimeout(function() {
			setTimeout(function() {
				vibration.start("bump")
          musicButton.text = "3"
        console.log(3);
                    if(runMusic == false){ musicButton.text = "Waltz"}

        callback()
			}, BpmToMs(100))
			vibration.start("bump")
        musicButton.text = "2"
      console.log(2);

		}, BpmToMs(100))
	vibration.start("confirmation")
  musicButton.text = "1";
  console.log(1);
},
BpmToMs(100))
}

function chacha(callback) {
	setTimeout(function() {
		setTimeout(function() {
			setTimeout(function() {
				setTimeout(function() {
					setTimeout(function() {
						vibration.start("bump")
						chaChaButton.text = "4"
						console.log(4);
                                if(runMusic == false){ chaChaButton.text = "Cha Cha"}


						callback()

					}, BpmToMs(120))
          vibration.start("bump")
					chaChaButton.text = "and";
					console.log(
          "and");

				}, BpmToMs(120))
        vibration.start("bump")
				chaChaButton.text = "3";
				console.log(3);

			}, BpmToMs(120))
			vibration.start("bump")
			chaChaButton.text = "2"
			console.log(2);

		}, BpmToMs(80))
		vibration.start("confirmation")
		chaChaButton.text = "1";
		console.log(1);
	}, BpmToMs(80))
}




function generateWaltz(){
  if(runMusic){
    console.log("waltzing");
    waltz(function (){generateWaltz()});
  }
}

function generateChaCha(){
  if(runMusic){
    console.log("cha cha time");
    chacha(function (){generateChaCha()});
  }
}

musicButton.onactivate = function(evt) {
  console.log(musicButton.text);
  runMusic = runMusic == true ? false : true;
  generateWaltz();

}




chaChaButton.onactivate = function(evt) {
  console.log(musicButton.text);
  runMusic = runMusic == true ? false : true;
  generateChaCha();
  if (runBeat) {
    //myButton.to = "Stop";
  }
}

function evaluateText(){
  if(mybutton.text == "Start")
  {mybutton.text = "><"}
  else if(mybutton.text == "><"){
    mybutton.text = ">====<"}
  else if (mybutton.text == ">====<"){
    mybutton.text = "><"
  }
  }


function CPR() {
  // assuming CPR bpm = 100
  generateBeats(BpmToMs(100));
}


mybutton.onactivate = function(evt) {
  console.log(mybutton.text);
  runBeat = runBeat == true ? false : true;
  generateBeats(BpmToMs(bpm));
  console.log(bpm);
  if (runBeat) {
    //myButton.to = "Stop";
  }
}


let content = document.getElementById("content");

let volupbtn = document.getElementById("volup");
volupbtn.onactivate = function(evt) {
  bpm += increment;
  content.text = `BPM: ${bpm}`;
}

let voldownbtn = document.getElementById("voldown");
voldownbtn.onactivate = function(evt) {
  bpm -= increment;
  content.text = `BPM: ${bpm}`;
}

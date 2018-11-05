"use strict";

export default class TextToSpeech {
  constructor() {
    this.volume = 1;
    this.pitch = 1;
    this.rate = 1;
    this.speaker = "UK English Male";
  }

  getVolume() {
    return this.volume;
  }

  getPitch() {
    return this.pitch;
  }

  getRate() {
    return this.rate;
  }

  getSpeaker() {
    return this.speaker
  }

  setVolume(val) {
    this.volume = val;
  }

  setPitch(val) {
    this.pitch = val;
  }

  setRate(val) {
    this.rate = val;
  }

  setSpeaker(val) {
    this.speaker = val
  }

  play(text) {
    var data = {
      volume: this.getVolume(),
      pitch: this.getPitch(),
      rate: this.getRate()
    };
    console.log(data);
    responsiveVoice.speak(text, this.getSpeaker(), data);
  }
}

// var obj = new TextToSpeech();
// obj.getSpeaker()

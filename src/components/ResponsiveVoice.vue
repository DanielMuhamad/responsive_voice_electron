<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col offset-md>
          <b-card-group style="width: 700px">
            <b-card>
              <b>Responsive Voice</b>
              <b-card-body>
                <!-- text input -->
                <b-form-textarea id="input-text" v-model="textarea" placeholder="Type your text ..." :rows="3" :max-rows="6">
                </b-form-textarea>
  
                <br>
                <b-form-group>
                  <!-- select speaker -->
                  <b-form-select id="select-speaker" size="sm" v-model="selected" :options="speakers" v-on:change="changeSpeaker">
                  </b-form-select>
  
                  <!-- play button -->
                  <b-button id="btn-play" @click="playSound()" variant="success" size="sm" title="Play">
                    <font-awesome-icon icon="play"></font-awesome-icon>
                  </b-button>

                  <!-- reset button -->
                  <a id="undo" href="" title="Reset">
                    <font-awesome-icon id="fa-reset" icon="undo" />
                  </a>
                </b-form-group>

                <br>
                <b-row>
                  <b-col>
                    <b-form-group class="volume-slider">
                      <span title="Volume"><font-awesome-icon id="fa-volume" icon="volume-down" /></span>
                      <input id="volume" type="range" step="0.1" min="0" max="1" ref="input" v-model="data.volume" v-on:input="setVolume($event.target.value)" />
                      <span id="slider-desc">Volume: {{ data.volume }}</span>
                    </b-form-group>
                  </b-col>
                  
                  <b-col>
                    <b-form-group>
                      <span title="Pitch"><font-awesome-icon id="fa-volume" icon="spinner" /></span>
                      <input id="pitch" type="range" step="0.1" min="0" max="2" ref="input" v-model="data.pitch" v-on:input="setPitch($event.target.value)" />
                      <span id="slider-desc">Pitch: {{ data.pitch }}</span>
                    </b-form-group>
                  </b-col>

                  <b-col>
                    <b-form-group>
                      <span title="Rate/Speed"><font-awesome-icon id="fa-volume" icon="rocket" /></span>
                      <input id="rate" type="range" step="0.1" min="0" max="2" ref="input" v-model="data.rate" v-on:input="setRate($event.target.value)" />
                      <span id="slider-desc">Rate/Speed: {{ data.rate }}</span>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TextToSpeech from "../responsiveVoice/TextToSpeech.js";

export default {
  data() {
    return {
      textarea: "",
      selected: "UK English Female",
      sp: [
        {
          value: "idn-male",
          text: "Indonesian Male"
        }
      ],
      speakers: [],
      data: {
        volume: 0.5,
        pitch: 1,
        rate: 1
      },
      tts: new TextToSpeech()
    };
  },

  mounted() {
    this.loadAllSpeakers();
  },

  methods: {
    playSound: function() {
      const text = document.getElementById("input-text").value;
      this.tts.play(text);
    },

    setVolume: function(val) {
      this.tts.setVolume(val);
    },

    setPitch: function(val) {
      this.tts.setPitch(val);
    },

    setRate: function(val) {
      this.tts.setRate(val);
    },

    loadAllSpeakers: function() {
      var voicelist = responsiveVoice.getVoices();
      for (var i = 0; i < voicelist.length; i++) {
        var name = voicelist[i].name;
        var dt = {
          value: name,
          text: name
        };
        this.speakers.push(dt);
      }
    },

    changeSpeaker: function(val) {
      this.tts.setSpeaker(val);
      console.log(val);
    },

    totalValue: function() {
      return this.test * 10;
    }
  }
};
</script>

<style scoped>
@import url('../assets/css/responsive_voice.css');
</style>
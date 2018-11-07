<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-card-group>
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
                  <b-button id="btn-play" @click="playSound()" variant="success" size="sm">
                    <font-awesome-icon icon="play"></font-awesome-icon>
                  </b-button>
                </b-form-group>
  
                <b-row>
                  <b-col>
                    <b-form-group class="volume-slider">
                      <font-awesome-icon id="fa-volume" icon="volume-down" />
                      <input id="volume" type="range" step="0.1" min="0" max="1" ref="input" v-model="data.volume" v-on:input="setVolume($event.target.value)" />
                      <span>Volume</span>
                    </b-form-group>
                  </b-col>
                  
                  <b-col>
                    <b-form-group>
                      <font-awesome-icon id="fa-volume" icon="spinner" />
                      <input id="pitch" type="range" step="0.1" min="0" max="2" ref="input" v-model="data.pitch" v-on:input="setPitch($event.target.value)" />
                      <span>Pitch</span>
                    </b-form-group>
                  </b-col>

                  <b-col>
                    <b-form-group>
                      <font-awesome-icon id="fa-volume" icon="rocket" />
                      <input id="rate" type="range" step="0.1" min="0" max="2" ref="input" v-model="data.rate" v-on:input="setRate($event.target.value)" />
                      <span>Rate/Speed</span>
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
      selected: "UK English Male",
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
    }
  }
};
</script>

<style scoped>
#volume {
  margin: 5px;
}

#fa-volume {
  padding: 5px;
  width: 28px;
  height: 28px;
}

#pitch {
  margin: 5px;
}

#rate {
  margin: 5px;
}

#select-speaker {
  width: 45%;
}

#btn-play {
  /* border-radius: 50%; */
  border-color: #00c482;
  margin-left: 20px;
  background-color: #00c482;
}
</style>
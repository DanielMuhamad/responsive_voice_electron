<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col cols="3">
          <b-card-group>
            <b-card>
              <b>Responsive Voice</b>
              <b-card-body>
                <!-- text input -->
                <b-form-textarea id="input-text" v-model="textarea" placeholder="Type your text ..." :rows="3" :max-rows="6">
                </b-form-textarea>
  
                <!-- select speaker -->
                <br>
                <b-form-select id="select-speaker" size="sm" v-model="selected" :options="speakers" v-on:change="changeSpeaker">
                </b-form-select>
                <p>hasil: {{ selected }}</p>
  
                <!-- play button -->
                <br>
                <br>
                <b-button @click="playSound()" variant="success" size="sm">
                  <font-awesome-icon icon="play-circle"></font-awesome-icon> Play
                </b-button>
  
                <!-- volume slider -->
                <br>
                <br>
                <input type="range" step="0.1" min="0" max="1" ref="input" v-model="data.volume" v-on:input="setVolume($event.target.value)" />
  
                <!-- pitch slider -->
                <br>
                <br>
                <input type="range" step="0.1" min="0" max="2" ref="input" v-model="data.pitch" v-on:input="setPitch($event.target.value)" />
  
                <!-- volume slider -->
                <br>
                <br>
                <input type="range" step="0.1" min="0" max="2" ref="input" v-model="data.rate" v-on:input="setRate($event.target.value)" />
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
      sp: [{ value: "idn-male", text: "Indonesian Male" }],
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
        var dt = { value: name, text: name };
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
  padding: 5px;
}

#pitch {
  padding: 5px;
}

#rate {
  padding: 5px;
}
</style>
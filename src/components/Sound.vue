<template>
    <div>
        <b-container fluid>
            <b-row class="justify-content-center">
                <b-col cols="4">
                    <b-card-group>
                        <b-card>
                            <b>Responsive Sound</b>
                            <b-card-body>
                                <!-- text input -->
                                <b-form-textarea id="text" v-model="textarea" placeholder="Input text here ..." :rows="4" :max-rows="6">
                                </b-form-textarea>
    
                                <!-- select speaker -->
                                <br>
                                <b-form-select v-model="selected" :options="speakers" class="mb-3" size="sm">
                                    <template>
</template>
                                </b-form-select>

                                <!-- button -->
                                <b-button @click="playSound()" variant="success">
                                    <font-awesome-icon icon="play-circle"></font-awesome-icon>
                                </b-button>

                                <!-- volume slider -->
                                <br>
                                <br>
                                <span>Volume: </span> <b-form-input type="range" @change="setVolume(this.val)"></b-form-input>

                                <!-- pitch slider -->
                                <br>
                                <span>Pitch: </span> <b-form-input type="range"></b-form-input>

                                <!-- rate slider -->
                                <br>
                                <span>Rate: </span> </span> <b-form-input type="range"></b-form-input>
                            </b-card-body>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
  components: {
    VueSlider
  },
  data() {
    return {
      selected: null,
      textarea: "",
      speakers: ["Uk English Male", "Indonesian Female"],

      data: {
        volume: 1,
        picth: 1,
        rate: 1
      }
    };
  },

  methods: {
    playSound: function() {
      var text = (document.getElementById("text").value = this.textarea);
      responsiveVoice.speak(text, this.speakers[0], { volume: 0.1 });
    },

    setVolume: function(val) {
      var v = val / 100;
      this.data.volume = v;
    }
  }
};
</script>

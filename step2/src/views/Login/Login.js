import Vue from 'vue';
import temp from './Login.html';

export default Vue.extend({
  template: temp,
  methods: {
    login () {
      this.$router.push("app")
    }
  }
});


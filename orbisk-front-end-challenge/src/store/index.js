import Vue from "vue";
import Vuex from "vuex";

import pictures from "./pictures/index";


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
   pictures
  }
});
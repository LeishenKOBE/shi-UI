import Vue from "vue";
import MyButton from "./Button";
const Components = {
  MyButton,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;

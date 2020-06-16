import MyButton from "./src/index.vue";
MyButton.install = (Vue) => Vue.component(MyButton.name, MyButton);
export default MyButton;

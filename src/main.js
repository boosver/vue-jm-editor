import JmEditor from './JmEditor.vue';

JmEditor.install = Vue => Vue.component('jm-edtior', JmEditor);//注册组件
// 标签的方式引入，留到后面再另开新篇讨论
const install = function (Vue, opts = {}) {

    Vue.component('jm-edtior', JmEditor);
}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
if(typeof window !== 'undefined' && !window.Vue){
    throw('该组件需要Vue请引入Vue文件~~~~~~~~~')
    
}


export default JmEditor;
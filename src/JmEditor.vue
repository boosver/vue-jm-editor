<template>
  <div ref="box" id="box" v-html="jmContentData"></div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "JmEditor",
  props: {
    dfaultPrompt: {
      type: String,
      default: "<p>点击此处进行编辑</p>",
    },
    jmContent: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      jmContentData: "",
      wholeDom: "",
    };
  },
  created() {

    
  },
  mounted() {
    this.jmContentData =
      this.jmContent == "" ? this.dfaultPrompt : this.jmContent;
    console.log(document.getElementById("box"));
    this.wholeDom.onclick = (e) => {
      console.log(e)
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      this.domOnclick(e);
    };



    this.$emit("jm-mounted", "success");
  },
  methods: {
    domOnclick(e) {
      var domClassName = e.toElement.classList;
      console.log(e)
      
      // if (domClassName.contains("jm-dom-border")) {
      //   domClassName.remove("jm-dom-border");
      // } else {
      //   domClassName.add("jm-dom-border");
      // }

      return false;
    },
  },
};
</script>

<style>
.jm-dom-border {
  border: 2px solid red;
}
</style>
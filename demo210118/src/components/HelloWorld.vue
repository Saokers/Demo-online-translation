<template>
  <div class="Test">
    <h2>在线翻译</h2>
    <div class="translate">
      <Input style="width:35%" v-model="src" :rows="4" type="textarea" placeholder="输入一些文字" />
      <Button style="height:10%;  margin: 0 4vw; " type="success">自动翻译</Button>
      <Input style="width:35%" v-model="msg" :rows="4" type="textarea" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      src: "",
    };
  },
  mounted() {},
  methods: {
    translate(val) {
      this.$axios
        .get(
          "http://api.tianapi.com/txapi/fanyi/index?key=6ebe662fe0ca9ab98920152dd3971998&text=" +
            val
        )
        .then((res) => {
          console.log(res);
          this.msg = res.data.newslist[0].dst;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    src(newval, oldval) {
      this.translate(newval);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.translate {
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>

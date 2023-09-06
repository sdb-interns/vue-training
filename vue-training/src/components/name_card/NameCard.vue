<template>
  <div class="main-block full box">
    <div class="editor half">
      <div>名字: 山田</div>
      <div>名前: 太郎</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameCard",
  data() {
    return {
      lastName: "",
      firstName: "",
    };
  },
}
</script>

<style scoped>
.main-block {
  width: 100%;
  position: relative;
  padding: 15px;
}

.full {
  width: 100%;
  position: relative;

}

.half {
  width: 40%;
  position: relative;
}

.box {
  display:flex;
  justify-content:center;
  align-items:center;
}

.preview {
  color: #333333;
  background-color: #00b09a;
  border: 1px solid #ccc;
  height: 200px;
  padding: 15px;
}
</style>

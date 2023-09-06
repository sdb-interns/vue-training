<template>
  <div class="main-block full box">
    <div class="editor half">
      <div>会社名: </div>
      <input type="text" v-model="company" />
      <div>名字: </div>
      <input type="text" v-model="lastName" />
      <div>名前: </div>
      <input type="text" v-model="firstName" />
      <div>住所: </div>
      <input type="text" v-model="address" />
      <div>電話番号: </div>
      <input type="text" v-model="phone" />
    </div>
    <div class="preview half">
      <p>{{ lastName + "　" + firstName }}</p>
      <p>{{ company }}</p>
      <p>{{ fullName }}</p>
      <p>{{ address }}</p>
      <p>{{ phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      lastName: "山田",
      firstName: "太郎",
      company: "SDB株式会社",
      address: "東京都1-1-1",
      phone: "09012345678",
    };
  },
  computed: {
    fullName() {
      return this.lastName + "　" + this.firstName;
    },
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

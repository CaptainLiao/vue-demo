<template>
  <div class="hello" id="demo">
    <h1>{{ title }}</h1>
    <input type="text" v-model="msg">

    <ul>
      <li v-for="item in items">
        <p v-text="item.lable"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '做一个Todo List Demo',
      items: [
        {
          label: "learn",
          isFinished: false
        },
        {
          label: "work",
          isFinished: true
        }

      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

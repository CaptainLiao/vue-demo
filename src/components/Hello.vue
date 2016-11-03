<template>
  <div id="demo">
    <h1>{{ title }}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addMsg" placeholder="请输入今天要完成的事情">
    <p>the new msg is: {{newItem}}</p>
    <ul>
      <li v-for="item in items">
        <p v-text="item.label" :class="{finished:item.isFinished}"  @click="toggleClass(item)"></p>
        <span @click="delItem(item)">点击删除此项</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from "../store"

  export default {
    data () {
      return {
        title: "做一个demo",
        items: Store.fetch(),
        newItem: ""
      }
    },
    props: ['msg'],
    methods: {
      addMsg: function (){
        this.items.push({
          label: this.newItem,
          isFinished: false
        });
        console.log(this.newItem);
        this.newItem = "";
      },
      delItem: function (item) {
        console.log(item);
        this.items.splice(item,1)
      },
      toggleClass: function (item) {
        item.isFinished = !item.isFinished;
      }
    },
    watch: {
      "items": {
        handler: function (item) {
          Store.save(item)
        },
        deep: true
      }
    }
  }
</script>

<style>
  .finished {
    text-decoration: underline;
  }
  li {
    margin-top: 1rem;

  }
  p {
    margin: 0;
    line-height: 2rem;
  }
  span {
    font-size: 0.875rem;
    color: #999;
    cursor: pointer;
  }


  #demo {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 60%;
    margin: 60px auto;
  }
</style>

<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="main">
<div id = "app">
    <div class="container-fluid">
        <div class="row">
            <div class = "col-md-12">
                <h1>Список задач в городе</h1>
            </div>
        </div>
    </div>
    <br/>

    <div class="container">
        <div class="row">
            <div class="col">
                <span class="zadacha">Название задачи </span>
                <input type="text" v-model="itemTitle">
            </div>
        </div>


        <br/>

        <div class="row">
            <div class="col">
                <span class="opisanie">Описание </span>
                <input type="text" v-model="itemDesc">
            </div>
        </div>

        <br/>

        <div class="rowD">
            <div>
                <input class="colDob" type="submit" value=" + Добавить" v-on:click.prevent="addTask" >
            </div>
        </div>
    </div>

    <hr/>

    <div id="list" contenteditable="true">
    <div class="container">
        <div class="row">
            <div class="card" v-for="item in items">
                <div class="card-block">
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                </div>
                <button class="btn btn-xs btn-danger" @click="deleteItem(item)">x</button>
            </div>
        </div>
    </div>
    </div>

</div>
</div>
</template>

<script>
  export default {
    name: 'task',
    data() {
      return {
        title: 'Список',
        items: [],
        itemTitle: '',
        itemDesc: '',
        itemCountry: '',
        tasks: {

        }
      }
    },
    methods: {
//      addCountry: function () {
//        if (this.itemCountry !== '') {
//          const item = {};
//          item.country = this.itemCountry;
//          this.items.push(item);
//          this.itemCountry = '';
//        }
//      },
//      addTask: function () {
//        if (this.itemTitle !== '') {
//          const item = {};
//          item.title = this.itemTitle;
//          item.desc = this.itemDesc;
//          this.items.push(item);
//          this.itemTitle = '';
//          this.itemDesc = '';
//        }
//      },
      addTask: function () {
        if (this.itemTitle !== '') {
          console.log(this.$route);
          if (typeof this.tasks[this.$route.params.city] === 'undefined')
            this.tasks[this.$route.params.city] = [];

          const item = {};
          item.title = this.itemTitle;
          item.desc = this.itemDesc;
          this.tasks[this.$route.params.city].push(item);
          this.itemTitle = '';
          this.itemDesc = '';
        }
      },
      deleteItem: function (item) {
        console.log(this.tasks[this.$route.params.city].indexOf(item));
        this.tasks[this.$route.params.city].splice(this.tasks[this.$route.params.city].indexOf(item), 1);
        console.log(this.tasks);
        this.$forceUpdate()
      },
      editItem: function(item) {
        this.desc = itemTitle;
        this.title = itemDesc;
      },
//      addCity: function () {
//        if (this.itemCity !== '') {
//          const item = {};
//          item.city = this.itemCity;
//          this.items.push(item);
//          this.itemCity = '';
//        }
//      },

    }
  }
</script>
<style>
body{
    height: 100%;
    width: 100%;
    background:  #4b5257 url(../photo/bgFirst.jpeg)  no-repeat center top;
    background-size: cover; /* Масштабируем фон */
    font: 15px Tahoma, sans-serif;
    border-top: 8px solid #7e7e7e;

    padding: 10px;

}
#app{

    height: 100%;
    max-width: 600px;
    width:  600%;
    padding: 100px 60px 50px;
    margin: 0 auto;
    background: url(../photo/opacity.jpg);
    opacity: 0.6;
}
h1, .zadacha, .opisanie{
    text-align: center;
    color: black;
    cursor: pointer;
    border: none;
    opacity: 1;
}

.colDob{
    width: 150px;
    text-decoration:none; text-align:center;
    padding:11px 18px;
    border:groove 1px #c71010;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius: 2px;
    font:20px "MS Serif", "New York", serif;
    font-weight:bold;
    color:ghostwhite;
    background:#c71010;
    -webkit-box-shadow:0px 0px 2px #c71010, inset 0px 0px 1px #f71313;
    -moz-box-shadow: 0px 0px 2px #c71010,  inset 0px 0px 1px #f71313;
    box-shadow:0px 0px 2px #c71010, inset 0px 0px 1px #f71313;

}
.colDob:hover{
     padding:11px 14px;
     border:groove 1px #ed0e0e;
     -webkit-border-radius:2px;
     -moz-border-radius:2px;
     border-radius: 2px;
     font:19px "Palatino Linotype", "Book Antiqua", Palatino, serif;
     font-weight:bold;
     color:white;
     background-color:#f71313;
     background-image: -moz-linear-gradient(top, #f71313 0%, #de1b1b 100%);
     background-image: -webkit-linear-gradient(top, #f71313 0%, #de1b1b 100%);
     background-image: -o-linear-gradient(top, #f71313 0%, #de1b1b 100%);
     background-image: -ms-linear-gradient(top, #f71313 0% ,#de1b1b 100%);

     background-image: linear-gradient(top, #f71313 0% ,#de1b1b 100%);
     -webkit-box-shadow:0px 0px 2px #fc0000, inset 0px 0px 1px #f71313;
     -moz-box-shadow: 0px 0px 2px #fc0000,  inset 0px 0px 1px #f71313;
     box-shadow:0px 0px 2px #fc0000, inset 0px 0px 1px #f71313;
 }
.btn{
    text-decoration:none; text-align:center;
    padding:11px 32px;
    border:solid 1px #e62020;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius: 2px;
    font:18px "Trebuchet MS", Arial, Helvetica, sans-serif;
    font-weight:bold;
    color:#f7f7f7;
    background:#e62020;
    -webkit-box-shadow:0px 0px 2px #e62020, inset 0px 0px 1px #e62020;
    -moz-box-shadow: 0px 0px 2px #e62020,  inset 0px 0px 1px #e62020;
    box-shadow:0px 0px 2px #e62020, inset 0px 0px 1px #e62020;

}
.btn:hover{
     padding:8px 25px;
     border:none;
     -webkit-border-radius:2px;
     -moz-border-radius:2px;
     border-radius: 2px;
     font:16px "Trebuchet MS", Arial, Helvetica, sans-serif;
     font-weight:bold;
     color:#fcfcfc;
     background:#e62020;
     -webkit-box-shadow:0px 0px 2px #e62020, inset 0px 0px 1px #e62020;
     -moz-box-shadow: 0px 0px 2px #e62020,  inset 0px 0px 1px #e62020;
     box-shadow:0px 0px 2px #e62020, inset 0px 0px 1px #e62020;

 }
</style>

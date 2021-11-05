<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <button type="button" :class= "assignClassName(variant)" class="btn"><slot/></button>
   
  </div>
</template>

<script>
export default {
  name: "SgdsButton",
  props: {
    msg: String,
    variant: {
      type: String,
      validator: (value) => ['sgds-btn-primary', 'sgds-btn-secondary', 'sgds-btn-warning'].indexOf(value)!== -1
      }
    
  },
  data() {
    return{
      grey: false,
      className: ''
    }
  },
  methods : {
    assignClassName(variant) {
      if (variant == 'sgds-btn-primary') {
        return 'btn-primary'
      }
      if( variant == 'sgds-btn-secondary'){
        return 'btn-secondary'
      }
      if( variant == 'sgds-btn-warning'){
        return 'btn-warning'
      }
      return ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.btn-primary{
  background-color: #bbbb;
  border-color: #bbbb;
}

</style>

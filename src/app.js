import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currenciesArray: []
    },

    mounted(){
      this.getCurrencies()
    },

    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currency => this.currenciesArray = currency.rates)
      }
    },

  })
})

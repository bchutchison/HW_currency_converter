import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currenciesArray: [],
      newExchangeAmount: null,
      newExchangeAmountOne: null,
      newExchangeAmountTwo: null,
      selectedCurrencyRate: null,
      selectedCurrencyRateOne: null,
      selectedCurrencyRateTwo: null
    },

    mounted(){
      this.getCurrencies()
    },

    computed: {
      changeCurrencyEuros: function() {
        return this.newExchangeAmount * this.selectedCurrencyRate
      },
      changeCurrencySelected: function() {
        return this.newExchangeAmount / this.selectedCurrencyRate
      },
      changeCurrencyOne: function() {
        return this.selectedCurrencyRateTwo / this.selectedCurrencyRateOne * this.newExchangeAmountOne
      },
      changeCurrencyTwo: function() {
        return this.selectedCurrencyRateOne / this.selectedCurrencyRateTwo * this.newExchangeAmountOne 
      }

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

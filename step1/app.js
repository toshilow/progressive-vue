window.onload = function () {
  new Vue({
    el: '#app',
    data: {
      plan: 100,
      size: 0,
      options: [],
    },
    computed: {
      total: function () {
        return[
          this.plan,
          (this.size * 500),
        ].concat(this.options).reduce(function(a, b) {return Number(a) + Number(b)})
      }
    }
  })
}
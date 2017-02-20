import Vue from 'vue'

export default new Vue({
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList () {
      this.$http.get('/static/news.json').then(this.onGetListSuccess)
    },
    onGetListSuccess (response) {
      this.list = response.data
    }
  }
})

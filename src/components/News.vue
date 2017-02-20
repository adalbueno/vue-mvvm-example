<template>
  <div class="news">
    <h1>List in the component</h1>
    <ul>
      <li v-for="news in list">
        <h2>{{ news.title }}</h2>
        <p>{{ news.body }}</p>
      </li>
    </ul>
    <hr />
    <h1>List in another component (with the same source - the model)</h1>
    <news-list></news-list>
  </div>
</template>

<script>
import NewsModel from '../models/NewsModel'

export default {
  name: 'news',
  computed: {
    list: () => NewsModel.list
  },
  mounted () {
    NewsModel.getList()
  }
}
</script>

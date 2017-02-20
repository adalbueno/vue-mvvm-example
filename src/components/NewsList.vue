<template>
  <div class="news">
    <ul>
      <li v-for="news in list">
        <h1>{{ news.title }}</h1>
        <p>{{ news.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import NewsModel from '../models/NewsModel'

export default {
  name: 'teste',
  computed: {
    list: () => NewsModel.list
  }
}
</script>

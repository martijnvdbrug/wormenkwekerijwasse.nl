<template>
  <g-link :to="`/informatie/${blog.slug}`" >
    <div class="card shadowed article-card">
      <div class="card-divider article-head">
        <h4>{{ blog.title }}</h4>
      </div>
      <div class="card-divider article-date">
        <p style="color: gray;">{{ blog.createdAt | date }} door {{ blog.author }}</p>
      </div>
      <AsyncImage :src="blog.featuredImage"/>
      <div class="card-section">
        <p>{{ blog.description }}</p>
      </div>
    </div>
  </g-link>
</template>
<script>
export default {
  props: ['blog']
}
</script>
<style>
.article-head {
  padding-bottom: 0;
}

.article-date {
  padding-top: 0;
  padding-bottom: 10px;
  font-size: 0.8rem;
}
</style>
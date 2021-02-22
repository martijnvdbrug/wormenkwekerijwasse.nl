<template>
  <Layout>
    <h1>Wormenkwekerij Wasse advies en Informatie</h1>
    <br>

    <div class="grid-x grid-margin-x small-up-1 medium-up-3 large-up-4">

      <div v-for="blog in $context.blogs"
           class="cell" style="margin-bottom: 1rem;">
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
      </div>
    </div>

  </Layout>
</template>
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
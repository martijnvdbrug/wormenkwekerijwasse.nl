<template>
  <Layout>
    <h1>Wormenkwekerij Wasse advies en informatie</h1>
    <br>

    <div class="grid-x grid-margin-x small-up-1 medium-up-3 large-up-4">

      <div v-for="blog in $context.blogs"
           class="cell" style="margin-bottom: 1rem;">

        <BlogPreview :blog="blog"/>

      </div>
    </div>

  </Layout>
</template>
<script>
import BlogPreview from '../components/BlogPreview';
export default {
  components: {BlogPreview}
}
</script>
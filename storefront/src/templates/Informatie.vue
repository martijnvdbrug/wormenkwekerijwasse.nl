<template>
  <Layout>
    <g-link to="/">Terug naar de winkel</g-link>
    <h1>Wormenkwekerij Wasse advies en informatie</h1>
    <p><g-link to="/faq/">Bekijk hier eerder gestelde vragen, antwoorden en opmerkingen</g-link></p>
    <br>

    <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4">

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
  mixins: [require('../mixins/load-foundation')],
  components: {BlogPreview},
  metaInfo() {
    return {
      title: `Officiele website van Wormenkwekerij Wasse in Beilen`,
    }
  },
}
</script>
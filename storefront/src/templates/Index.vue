<template>
  <Layout>
    <section id="intro"><h1>Welkom bij Wormenkwekerij Wasse</h1></section>
    <section id="categories"><h2>In ons assortiment:</h2></section>
    <section id="featured-products">
      <h2>Populaire producten:</h2>
      <div v-for="product of $context.featuredProducts">
        {{ product.name }}
        <ReviewComponent :product-id="product.id"></ReviewComponent>
      </div>
    </section>
  </Layout>
</template>

<script>
import ReviewComponent from '../components/ReviewComponent';

export default {
  components: {
    ReviewComponent
  },
  created() {
  }
}
</script>
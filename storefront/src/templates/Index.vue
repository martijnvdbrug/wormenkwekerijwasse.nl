<template>
  <Layout>

    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-6">
        DIT IS HOMEE
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
        HOMEPIE
      </div>
      <div class="cell small-12 medium-6">
        <h5 class="block-header">In ons assortiment:</h5>
        <div class="grid-y grid-margin-y" style="height: 100%;">
          <div class="cell small-6">
            <div class="grid-x grid-margin-x small-up-2" style="height: 100%;">
              <div class="cell">
                cell
              </div>
              <div class="cell">
                cell
              </div>
            </div>
          </div>
          <div class="cell small-6">
            <div class="grid-x grid-margin-x small-up-2" style="height: 100%;">
              <div class="cell">
                cell
              </div>
              <div class="cell">
                cell
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>

    <!-- Featured products -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell"><h5 class="block-header">Populaire producten:</h5></div>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">
      <div class="cell">product</div>
      <div class="cell">product</div>
      <div class="cell">product</div>
      <div class="cell">product</div>
      <div class="cell">product</div>
      <div class="cell">product</div>
      <div class="cell">product</div>
      <div class="cell">product</div>
    </div>



<!--    <section id="intro"><h1>Welkom bij Wormenkwekerij Wasse</h1></section>
    <section id="categories"><h2>In ons assortiment:</h2></section>
    <section id="featured-products">
      <h2>Populaire producten:</h2>
      <div v-for="product of $context.featuredProducts">
        {{ product.name }}
      </div>
    </section>-->



  </Layout>
</template>

<script>

export default {
  components: {
  },
  created() {
  }
}
</script>
<style>
.cell {
  background: grey;
  border: solid 1px black;
}
</style>
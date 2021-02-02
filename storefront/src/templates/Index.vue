<template>
  <Layout>

    <div class="grid-x grid-margin-x">

      <div class="cell small-12 medium-6">
        <div class="card shadowed" style="margin-bottom: 0; height: 100%;">
          <div class="responsive-embed" style="height: 315px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cLblUjpFdfU?autoplay=1" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="card-section">
            <h5>Welkom bij Wormenkwekerij Wasse!</h5>
            <p>
              Wormenkwekerij Wasse is de expert op het gebied van compostwormen en viswormen.
              Hier komt nog meer informatie voor op de homepagina. <g-link to="/"> Lees hier meer over wormen</g-link>
            </p>
          </div>
        </div>
      </div>

      <div class="cell small-12 medium-6">
        <h5 class="block-header">In ons assortiment:</h5>
        <div class="grid-y grid-margin-y" style="height: 100%;">
          <div class="cell small-6">
            <div class="grid-x grid-margin-x small-up-2" style="height: 100%;">
              <div class="cell">
                <CategoryCard img="/img/zand.jpeg" title="Wormentoren" link-to="/" />
              </div>
              <div class="cell">
                <CategoryCard img="/img/zand.jpeg" title="Wormentoren" link-to="/" />
              </div>
            </div>
          </div>
          <div class="cell small-6">
            <div class="grid-x grid-margin-x small-up-2" style="height: 100%;">
              <div class="cell">
                <CategoryCard img="/img/zand.jpeg" title="Wormentoren" link-to="/" />
              </div>
              <div class="cell">
                <CategoryCard img="/img/zand.jpeg" title="Wormentoren" link-to="/" />
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
      <div class="cell">

        <div class="card shadowed">
<!--          <div class="card-divider">
            This is a header
          </div>-->
          <img src="/img/zand.jpeg">
          <div class="card-section">
            <h4>Wormentoren</h4>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
          </div>
        </div>
      </div>

      <div class="cell">
      </div>
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
/*.cell {
  background: grey;
  border: solid 1px black;
}*/
</style>
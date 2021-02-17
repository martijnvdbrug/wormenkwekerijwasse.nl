<template>
  <Layout>

    <div class="grid-x grid-margin-x">

      <div class="cell small-12 medium-6 margin-bottom-2">
        <div class="card shadowed article-card">
          <div class="responsive-embed" style="height: 315px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cLblUjpFdfU?autoplay=1" frameborder="0"
                    allow="autoplay; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="card-section">
            <h5>Welkom bij Wormenkwekerij Wasse!</h5>
            <p>
              Wormenkwekerij Wasse is de expert op het gebied van compostwormen en viswormen.
              Hier komt nog meer informatie voor op de homepagina.
              <g-link to="/"> Lees hier meer over wormen</g-link>
            </p>
          </div>
        </div>
      </div>

      <div class="cell small-6 medium-3 margin-bottom-2">

        <div class="card shadowed article-card">
          <div class="card-divider">
            <h4>Laatste nieuws</h4>
          </div>
          <AsyncImage src="/img/zand.jpeg"/>
          <div class="card-section">
            <h5>Nieuws artikel 1</h5>
            <p>Hier kun je de laatste nieuws artikelen plaatsen</p>
            <p>Dit gebeurt er als er meer content is is</p>
          </div>
        </div>

      </div>
      <div class="cell small-6 medium-3 margin-bottom-2">

        <div class="card shadowed article-card">
          <div class="card-divider">
            <h4>Laatste nieuws</h4>
          </div>
          <AsyncImage src="/img/zand.jpeg"/>
          <div class="card-section">
            <h5>Nieuws artikel 2</h5>
            <p>Hier kun je de laatste nieuws artikelen plaatsen</p>
          </div>
        </div>

      </div>

    </div>

    <!-- First 8 categories -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell">
        <h5>In ons assortiment: </h5>
      </div>
    </div>

    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

      <div v-for="collection of collections" class="cell">
        <Card
            :img="asset(collection)"
            :img-alt="collection.name"
            :link-to="`/${categoryPrefix}/${collection.slug}/`"
            :title="collection.name"
        ></Card>
      </div>

    </div>

    <!-- Featured products -->
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell"><h5>Populaire producten:</h5></div>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">

      <div v-for="product of $context.featuredProducts" class="cell">
        <Card
            :img="asset(product)"
            :img-alt="product.name"
            :link-to="`/${productPrefix}/${product.slug}/`"
            :title="product.name"
            :price="product.defaultPrice"
        ></Card>
      </div>

    </div>
  </Layout>
</template>

<script>
import {categoryPrefix, productPrefix} from '../util';

export default {
  data() {
    return {
      collections: [],
      productPrefix, categoryPrefix
    }
  },
  methods: {
    asset(assetHolder) {
      return assetHolder?.featuredAsset?.preview;
    }
  },
  created() {
    this.collections = this.$context.collections.slice(0, 8);
  }
}
</script>
<style>
.article-card {
  height: 100%;
}

.article-card img {
  height: 100%;
  object-fit: cover;
}
</style>
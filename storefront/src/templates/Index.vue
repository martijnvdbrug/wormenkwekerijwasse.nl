<template>
  <Layout>

    <div class="grid-x grid-margin-x">

      <div class="cell small-12 margin-bottom-2">
        <div class="card shadowed article-card">
          <div class="card-section">
            <h5>Welkom bij Wormenkwekerij Wasse!</h5>
            <p>
              Wormenkwekerij Wasse is de expert op het gebied van compostwormen, viswormen en alles wat daar bij komt
              kijken. Bekijk hieronder anders <a href="#video">onze video!</a>
            </p>
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


    <br>
    <br>
    <!-- video en blogs -->
    <div class="grid-x grid-margin-x">

      <div class="cell small-12 medium-6 margin-bottom-2" id="video">
        <div class="card shadowed article-card">
          <div class="responsive-embed" style="height: 315px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cLblUjpFdfU" frameborder="0"
                    allow="picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="card-section">
            <p>
              De wormenkwekerij van Frank Wasse in het Drentse Beilen loopt goed. Door de toenemende belangstelling voor
              bodemverbetering en de vermindering van kunstmest steeg in het afgelopen jaar de vraag naar wormen en
              wormenmest.
            </p>
          </div>
        </div>
      </div>

      <div class="cell small-6 medium-3 margin-bottom-2">

        <BlogPreview :blog="$context.blogs[0]" class="hide-image"/>

      </div>
      <div class="cell small-6 medium-3 margin-bottom-2">

        <BlogPreview :blog="$context.blogs[1]" class="hide-image"/>

      </div>

    </div>

  </Layout>
</template>

<script>
import {categoryPrefix, productPrefix} from '../util';
import BlogPreview from '../components/BlogPreview';

export default {
  mixins: [require('../mixins/load-foundation')],
  components: {BlogPreview},
  metaInfo() {
    return {
      title: `Officiele website van Wormenkwekerij Wasse in Beilen`,
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': "http://schema.org",
          '@type': "LocalBusiness",
          'name': 'Wormenkwekerij Wasse',
          'image': '/logo-wormenkwekerijwasse.png',
          'telephone': '+31 06 18441825',
          'email': 'info@wormenkwekerijwasse.nl',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Vorrelveen 6',
            'addressLocality': 'Beilen',
            'postalCode': '9411 VP',
            'addressCountry': 'NL'
          },
        }
      }]
    }
  },
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
</style>

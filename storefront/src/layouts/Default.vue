<template>
  <div>

    <div class="title-bar shadowed" data-responsive-toggle="responsive-menu" data-hide-for="medium">
      <div class="grid-x align-bottom">
        <div class="cell small-3">
          <button class="menu-icon" type="button" data-toggle="responsive-menu" style="margin-bottom: 8px;"></button>
        </div>
        <div class="cell small-6 text-center">
          <g-link to="/"><img src="/logo-wormenkwekerijwasse.png" alt="Wormenkwekerij Wasse" style="height: 100px;"/>
          </g-link>
        </div>
        <div class="cell small-3 text-right">
          <CartIcon/>
        </div>
      </div>
    </div>

    <div class="top-bar shadowed" id="responsive-menu">

      <div class="grid-x align-bottom" style="width:100%">
        <div class="cell small-3 hide-for-small-only">
          <g-link to="/"><img src="/logo-wormenkwekerijwasse.png" alt="Wormenkwekerij Wasse" style="height: 100px;"/>
          </g-link>
        </div>
        <div class="cell small-8">
          <ul class="vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">
            <li>
              <a href="#"><h5>Assortiment</h5></a>
              <ul class="menu vertical mobile-accordion">
                <li v-for="collection of collections">
                  <g-link :to="`/${categoryPrefix}/${collection.slug}`">{{
                      collection.name
                    }}
                  </g-link>
                  <g-link v-for="subCollection of collection.children"
                          class="is-submenu-item"
                          style="padding-left: 30px;"
                          :to="`/${categoryPrefix}/${subCollection.slug}`">
                    {{ subCollection.name }}
                  </g-link>
                </li>
              </ul>
            </li>
            <li>
              <g-link to="/informatie/"><h5>Advies & informatie </h5></g-link>
            </li>
            <li>
              <a href="#contact"><h5>Contact</h5></a>
            </li>
          </ul>
        </div>
        <div class="cell small-1 hide-for-small-only align-right">
          <CartIcon/>
        </div>
      </div>

    </div>

    <div class="container">

      <Breadcrumb v-if="$context.breadcrumb" :items="$context.breadcrumb"/>

      <slot/>
    </div>

    <div class="footer shadowed">
      <div class="grid-x grid-margin-x">
        <div class="cell medium-12 large-4 text-center">
          <h4>Assortiment</h4>
          <p>
            <g-link v-for="collection of $static.Vendure.collections.items" :to="`${categoryPrefix}/${collection.slug}`"
                    v-bind:key="collection.slug">{{ collection.name }}<br></g-link>
          </p>
        </div>
        <div class="cell medium-12 large-4 text-center" id="contact">
          <h4>Contact</h4>
          <p><a href="tel:00310618441825">06 18441825</a></p>
          <p><a href="mailto:info@wormenkwekerijwasse.nl">info@wormenkwekerijwasse.nl</a></p>
          <p><strong>Wormenkwekerij adres:</strong><br>
            Wormenkwekerij Wasse<br>
            9411 VP, Beilen<br>
            Vorrelveen 6<br>
          </p>
          <p><strong>Factuur adres:</strong><br>
            Reikampen 6<br>
            9415 RB, Hijken<br>
            Drenthe<br>
            Kvk: 66626811<br>
            Btw nr: NL001413015b26<br>
          </p>
          <p><strong><a href="/privacy-beleid/">Privacy beleid</a></strong></p>
        </div>
        <div class="cell medium-12 large-4 text-center">
          <h4>Afhalen is mogelijk op</h4>
          <p>Maandag, Woensdag en Vrijdag van 10:00 uur tot 17:00 uur.</p>
          <p>Buiten deze tijden alleen mogelijk op afspraak.</p>
          <p>Telefonisch bereikbaar van:
            ma-vrij 10:00 uur tot 18:00</p>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import CartIcon from '../components/CartIcon';
import {categoryPrefix, getTopLevelCollections, productPrefix} from '../util';

export default {
  components: {CartIcon},
  mixins: [
    require('../mixins/load-foundation'),
  ],
  data() {
    return {
      productPrefix,
      categoryPrefix,
      collections: []
    }
  },
  metaInfo() {
    return {
      meta: [
        {
          name: 'description',
          content: "Wormenkwekerij Wasse, Koop hier gemakkelijk online uw wormen en wormencompost of snufffel eens tussen alle informatie en advies."
        }
      ]
    }
  },
  created() {
    this.collections = getTopLevelCollections(this.$static.Vendure.collections.items);
  }
}
</script>
<static-query>
{
  Vendure {
    collections {
      items {
          id
          name
          slug
          description
          children {
            id
            name
            slug
            description
          }
      }
    }
  }
}
</static-query>
<style>
.menu h5 {
  margin-bottom: 0;
}

.menu a {
  padding: 0 3rem;
}

.title-bar {
  background: white;
}

.title-bar {
  padding: 10px;
}

.container {
  padding: 30px 10px;
}

.footer {
  padding: 20px;
  background: white;
}

.no-js .top-bar {
  display: none;
}

@media screen and (min-width: 40em) {
  .no-js .top-bar {
    display: block;
  }

  .no-js .title-bar {
    display: none;
  }
}
</style>
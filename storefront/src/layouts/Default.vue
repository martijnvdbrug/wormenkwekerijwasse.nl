<template>
  <div>

    <div class="title-bar shadowed" data-responsive-toggle="responsive-menu" data-hide-for="large">
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
        <div class="cell small-3 hide-for-medium-only hide-for-small-only">
          <g-link to="/"><img src="/logo-wormenkwekerijwasse.png" alt="Wormenkwekerij Wasse" style="height: 100px;"/>
          </g-link>
        </div>
        <div class="cell small-8">
          <ul class="vertical large-horizontal menu" data-responsive-menu="accordion large-dropdown">
            <li>
              <a class="menu-item" href="/assortiment/"><h5>Assortiment</h5></a>
              <ul class="menu vertical mobile-accordion">
                <li v-for="collection of collections">
                  <g-link class="menu-item" :to="`/${categoryPrefix}/${collection.slug}`">{{
                      collection.name
                    }}
                  </g-link>
                  <g-link v-for="subCollection of collection.children"
                          class="sub-collection"
                          :key="subCollection.slug"
                          :to="`/${categoryPrefix}/${subCollection.slug}`">
                    {{ subCollection.name }}
                  </g-link>
                </li>
              </ul>
            </li>
            <li>
              <g-link class="menu-item" to="/informatie/"><h5>Advies & informatie </h5></g-link>
            </li>
            <li>
              <a class="menu-item" href="#contact"><h5>Contact</h5></a>
            </li>
            <li>
              <a class="menu-item" href="/faq/"><h5>FAQ</h5></a>
            </li>
          </ul>
        </div>
        <div class="cell small-1 hide-for-medium-only hide-for-small-only align-right">
          <CartIcon/>
        </div>
      </div>

    </div>

    <div class="container">

      <div class="grid-x">
        <div class="cell show-for-large large-1"></div>
        <div class="cell large-10">

          <Breadcrumb v-if="$context.breadcrumb" :items="$context.breadcrumb"/>

          <slot/>
        </div>
        <div class="cell show-for-large large-1"></div>
      </div>


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
        </div>

        <div class="cell medium-12 large-4 text-center" id="klantenservice">
          <h4>Klantenservice</h4>
          <p><a href="/privacy-beleid/">Privacy beleid</a></p>
          <p><a href="/verzendkosten/">Verzendkosten</a></p>
          <p><a href="/wanneer-komt-pakket-aan/">Wanneer komt mijn pakket aan?</a></p>
          <p><a href="/retour-en-restitutie-beleid/">Retour en restitutiebeleid</a></p>
          <p><a href="/waarmee-kan-je-betalen/">Waarmee kan ik betalen?</a></p>
          <p><a href="/faq/">Vragen, antwoorden en opmerkingen</a></p>
          <p><strong>Afhalen is mogelijk</strong></p>
          <p>Maandag, Woensdag en Vrijdag van 10:00 uur tot 17:00 uur.</p>
          <p>Buiten deze tijden alleen mogelijk op afspraak.</p>
          <p>Telefonisch bereikbaar van:
            ma-vrij 10:00 uur tot 18:00</p>
        </div>
      </div>

      <div class="grid-x">
        <div class="cell small-12 large-12 text-center">

          <!-- Begin Mailchimp Signup Form -->
          <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
          <div id="mc_embed_signup">
            <form action="https://wormenkwekerijwasse.us1.list-manage.com/subscribe/post?u=53d72f8e65e2d0cb6c2ed2c3c&amp;id=a88584e992" method="post" id="mc-embedded-subscribe-form" target="_blank" name="mc-embedded-subscribe-form" class="validate" novalidate>
              <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">Meld je aan voor de nieuwsbrief</label>
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email adres" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_53d72f8e65e2d0cb6c2ed2c3c_a88584e992" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Aanmelden" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color: #5FAD56;"></div>
              </div>
            </form>
          </div>

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

.menu-item {
  padding: 0 3rem !important;
}

.title-bar {
  background: white;
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
<template>
  <Layout>

    <g-link to="/">Terug naar de winkel</g-link>

    <h1>Verzendkosten</h1>

    <div class="card shadowed">

      <div class="card-section">

        <h4>Nederland</h4>
        <p>
          Gratis verzenden vanaf €50,- <br>
          Bestelling onder de € 50,- € 5,95
        </p>

        <h4>België</h4>
        <p>
          Bestelling tot 499 kilo € 6,99 <br>
          Bestelling van 500 kilo tot 999 kilo € 20,00 <br>
          Bestelling boven de 1000 kilo € 35,00
        </p>

        <h4>Duitsland</h4>
        <p>
          Bestelling tot 499 kilo € 6,99 <br>
          Bestelling van 500 kilo tot 999 kilo € 20,00 <br>
          Bestelling boven de 1000 kilo € 35,00
        </p>

        <h4>De rest van de wereld</h4>
        <p>
          Pakketten vanaf € 25,00
        </p>

      </div>

    </div>


  </Layout>
</template>
<script>
export default {
  mixins: [require('../mixins/load-foundation')],
}
</script>
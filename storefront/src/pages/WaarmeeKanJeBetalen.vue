<template>
  <Layout>

    <g-link to="/">Terug naar de winkel</g-link>
    <h1>Waarmee kan ik betalen?</h1>

    <div class="card shadowed">
      <div class="card-section">

        <p> U kunt betalen met de volgende betaalmethoden:</p>

        <div class="grid-x grid-margin-x small-up-2 medium-up-4 text-center align-bottom">
          <div class="cell">
            <img src="/img/ideal.jpg" alt="Ideal betaling">
            <p> Ideal </p>
          </div>

          <div class="cell">
            <img src="/img/bank-contakt.png" alt="Bank contact betaling">
            <p> Bank Contact </p>
          </div>

          <div class="cell">
            <img src="/img/kcb.jpg" alt="KBC">
            <p> KBC </p>
          </div>

          <div class="cell">
            <img src="/img/sepa.png" alt="SEPA">
            <p> SEPA </p>
          </div>

          <div class="cell">
            <img src="/img/sofort.png" alt="Sofort">
            <p> Sofort </p>
          </div>

          <div class="cell">
            <img src="/img/belfius.jpg" alt="Belfius">
            <p> Belfius </p>
          </div>

        </div>

      </div>
    </div>

  </Layout>
</template>
<script>
export default {
  mixins: [require('../mixins/load-foundation')],
}
</script>
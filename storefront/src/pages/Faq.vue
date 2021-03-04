<template>
  <Layout>

    <g-link to="/">Terug naar de winkel</g-link>
    <h1>FAQ - Vragen, reacties, opmerkingen</h1>
    <p>Heeft u vragen, reactie, opmerkingen of wilt u gewoon wat kwijt? Laat het weten via een reactie op deze
      pagina.</p>

    <div class="card shadowed">

      <div class="card-section">
        <Disqus shortname="wormenkwekerijwasse" :page-config="config" lang="nl"/>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  mixins: [require('../mixins/load-foundation')],
  data() {
    return {
      config: {
        slug: 'vragen_reacties_opmerkingen_en_foto_upload'
      }
    }
  }
}
</script>
<template>
  <Layout>
    <h1>Wachtwoord opnieuw instellen</h1>
    <div class="grid-x grid-margin-x">
      <div class="cell">
        <div class="card shadowed article-card" style="padding: 30px;">

          <form v-on:submit.prevent="reset()">
            <div class="grid-x grid-margin-x">
              <div class="cell small-12">
                <label>Nieuw wachtwoord:
                  <input ref="newPassword" type="password" name="newPassword" required v-model="newPassword"
                         minlength="8">
                </label>
                <input id="showpassword" v-on:change="togglePass($event.target.checked)" type="checkbox"><label
                  for="showpassword">Laat
                wachtwoord zien</label>
              </div>
              <div v-if="error" class="cell small-12">
                <p style="color: red;">{{ error }}</p>
              </div>
              <div class="cell small-12 text-right">
                <input type="submit" class="button" value="Instellen">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </Layout>
</template>
<script>
export default {
  mixins: [require('../mixins/load-foundation')],
  data() {
    return {
      newPassword: undefined,
      error: undefined,
      token: undefined,
    }
  },
  methods: {
    async reset() {
      try {
        await this.$vendure.resetPassword(this.token, this.newPassword);
      } catch (e) {
        this.error = `Er is een fout opgetreden bij het opnieuw instellen van het wachtwoord. Neem contact met ons op`;
        console.error(e);
      }
    },
    togglePass(checked) {
      if (checked) {
        this.$refs['newPassword'].type = 'text';
      } else {
        this.$refs['newPassword'].type = 'password';
      }
    },
  },
  mounted() {
    this.token = this.$route.query.token;
    if (!this.token) {
      this.error = `Geen token in URL gevonden, kan het wachtwoord niet resetten!`;
    }
  }
}
</script>
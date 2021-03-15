<template>
  <form v-if="!activeCustomer" v-on:submit.prevent="login()">
    <div class="grid-x grid-padding-x">
      <div class="cell small-12"><p><strong>Bent u al klant? Dan kunt u hier inloggen:</strong></p></div>
      <div v-if="loginError" class="cell small-12" style="font-size: 0.9rem;">
        <a v-on:click="requestReset()">Wachtwoord opnieuw instellen </a>
        <p v-if="resetEmailSent">Er is een email met wachtwoord reset link naar u verstuurd.</p>
        <p style="color: red;">{{ this.loginError }}</p>
      </div>
      <div class="cell small-6 ">
        <label>Emailadres
          <input type="email" autocomplete name="email" v-model="loginEmail">
        </label>
      </div>
      <div class="cell small-6">
        <label>Wachtwoord
          <input type="password" name="password" required v-model="password"/>
        </label>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="cell small-12 text-right">
        <input type="submit" class="button" value="Login">
      </div>
    </div>
  </form>
</template>
<script>
export default {
  computed: {
    activeCustomer() {
      return this.$store?.activeCustomer;
    }
  },
  data() {
    return {
      resetEmailSent: false,
      loginError: undefined,
      loginEmail: undefined,
      password: undefined,
    }
  },
  methods: {
    async requestReset() {
      await this.$vendure.requestResetPassword(this.loginEmail);
      this.resetEmailSent = true;
    },
  }
}
</script>


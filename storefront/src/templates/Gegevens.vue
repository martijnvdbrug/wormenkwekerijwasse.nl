<template>
  <Layout>
    <ClientOnly>

      <div class="grid-x grid-margin-x">
        <div class="cell show-for-large large-2"></div>
        <div class="cell small-12 large-8">

          <div class="grid-x grid-padding-x">
            <div class="cell small-2" style="position: relative;">
              <g-link class="button" to="/winkelmand/" style="position: absolute; bottom: 0; left: 0;">
                Terug
              </g-link>
            </div>
            <div class="cell small-10 text-right">
              <h1> Uw gegevens</h1>
            </div>
          </div>

          <div class="grid-x grid-margin-x">
            <div class="cell">
              <div class="card shadowed article-card" style="padding: 30px;">

                <div v-if="activeCustomer" class="grid-x grid-padding-x" style="margin-bottom: 20px;">
                  <div class="cell small-12">
                    <i class="fi-check green" style="font-size: 2rem;"></i>
                    <p style="margin-bottom: 5px;">U bent ingelogd met <i>{{ activeCustomer.emailAddress }}</i>
                    </p>
                    <a v-on:click="logout">Log uit</a>
                  </div>
                </div>

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

                <form v-on:submit.prevent="submit()">
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-12"><p><strong>Of ga door met bestellen:</strong></p></div>
                    <div class="cell small-6 ">
                      <label>Bedrijfsnaam
                        <input type="text" name="company" v-model="address.company">
                      </label>
                    </div>
                  </div>
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-6 ">
                      <label>Voornaam*
                        <input type="text" name="firstname" required v-model="customer.firstName"/>
                      </label>
                    </div>
                    <div class="cell small-6">
                      <label>Achternaam*
                        <input type="text" name="lastname" required v-model="customer.lastName">
                      </label>
                    </div>
                  </div>
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-6 ">
                      <label>Telefoonnummer*
                        <input type="tel" name="phoneNumber" required v-model="customer.phoneNumber">
                      </label>
                    </div>
                    <div class="cell small-6">
                      <label>Email*
                        <input type="email" name="email" required v-model="customer.emailAddress"
                               :disabled="activeCustomer">
                      </label>
                    </div>
                  </div>
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-8">
                      <label>Straat*
                        <input type="text" name="street" required v-model="address.streetLine1">
                      </label>
                    </div>
                    <div class="cell small-4">
                      <label>Huisnr*
                        <input type="text" name="housenr" required v-model="address.streetLine2">
                      </label>
                    </div>
                  </div>
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-8">
                      <label>Plaats*
                        <input type="text" name="city" required v-model="address.city">
                      </label>
                    </div>
                    <div class="cell small-4">
                      <label>Postcode*
                        <input type="text" name="postalcode" required v-model="address.postalCode">
                      </label>
                    </div>
                  </div>
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-6">
                      <label>Land
                        <select name="country" v-model="address.countryCode">
                          <option v-for="country of $context.availableCountries"
                                  :value="country.code">
                            {{ country.name }}
                          </option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div v-if="!activeCustomer" class="grid-x grid-padding-x">
                    <div class="cell small-12">
                      <input id="account" v-model="createAccount" type="checkbox"><label for="account">Maak een account
                      aan voor {{ this.customer.emailAddress }}</label>

                    </div>
                    <div class="cell small-6" v-if="createAccount">
                      <label >Wachtwoord:
                        <input ref="newPassword" type="password" name="newPassword" :required="!!createAccount" v-model="newPassword" minlength="8">
                      </label>
                      <input id="showpass" v-on:change="togglePass($event.target.checked)" type="checkbox"><label for="showpass">Laat wachtwoord zien</label>
                    </div>
                  </div>
                  <div class="grid-x grid-padding-x">
                    <div class="cell small-12 text-right">
                      <input type="submit" class="button" value="Bestellen">
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
          <div class="cell show-for-large large-2"></div>
        </div>
      </div>

    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  mixins: [require('../mixins/load-foundation'), require('../mixins/empty-basket-validator')],
  computed: {
    activeCustomer() {
      return this.$store.activeCustomer;
    }
  },
  data() {
    return {
      resetEmailSent: false,
      loginError: undefined,
      loginEmail: undefined,
      password: undefined,
      createAccount: false,
      newPassword: undefined,
      customer: {
        emailAddress: undefined,
        firstName: undefined,
        lastName: undefined,
        phoneNumber: undefined,
      },
      address: {
        company: undefined,
        city: undefined,
        streetLine1: undefined,
        streetLine2: undefined,
        postalCode: undefined,
        countryCode: 'NL'
      }
    }
  },
  methods: {
    togglePass(checked){
      if (checked) {
        this.$refs['newPassword'].type = 'text';
      } else {
        this.$refs['newPassword'].type = 'password';
      }
    },
    async requestReset() {
      await this.$vendure.requestResetPassword(this.loginEmail);
      this.resetEmailSent = true;
    },
    async register() {
      await this.$vendure.register({
        emailAddress: this.customer.emailAddress,
        password: this.newPassword
      })
    },
    async login() {
      try {
        await this.$vendure.login(this.loginEmail, this.password);
        this.loginError = undefined;
      } catch (e) {
        if (e.message?.indexOf('ER_ROW_IS_REFERENCED') > -1) {
          this.loginError = `Er is iets misgegaan met inloggen. U kunt uw bestelling afmaken door uw adresgegevens hieronder in te vullen.`;
        } else {
          this.loginError = `Emailadres of wachtwoord is onjuist`;
        }
        throw e;
      }
      if (this.activeCustomer) {
        this.setCustomer(this.activeCustomer);
        this.setAddress(this.activeCustomer.addresses?.[0])
      }
    },
    async logout() {
      await this.$vendure.logout();
      this.$router.push('/winkelmand/')
    },
    setCountry(countryName) {
      const country = this.$context.availableCountries?.find(c => c.name === countryName);
      if (country) {
        this.address.countryCode = country.code;
      }
    },
    async submit() {
      this.register().catch(e => console.error(e));// Registering should not be blocking
      const address = {
        ...this.address,
        fullName: `${this.customer.firstName} ${this.customer.lastName}`,
        defaultBillingAddress: true,
        defaultShippingAddress: true,
        phoneNumber: this.customer.phoneNumber,
      };
      if (this.activeCustomer) {
        const c = this.customer;
        delete c.emailAddress;
        await Promise.all([
          this.$vendure.updateCustomer(c),
          this.$vendure.setOrderShippingAddress(address)
        ]);
        if (this.activeCustomer.addresses?.[0]) {
          this.$vendure.updateCustomerAddress({
            id: this.activeCustomer.addresses?.[0].id,
            ...address
          }).catch(e => console.error(e));
        } else {
          this.$vendure.createCustomerAddress(address).catch(e => console.error(e));
        }
      } else {
        await Promise.all([
          this.$vendure.setCustomerForOrder(this.customer),
          this.$vendure.setOrderShippingAddress(address)
        ]);
      }
      this.$router.push('/verzending/')
    },
    setAddress(address) {
      this.address.company = address?.company;
      this.address.streetLine1 = address?.streetLine1;
      this.address.streetLine2 = address?.streetLine2;
      this.address.city = address?.city;
      this.address.postalCode = address?.postalCode;
      this.setCountry(address?.country);
    },
    setCustomer(customer) {
      this.customer.firstName = customer?.firstName;
      this.customer.lastName = customer?.lastName;
      this.customer.phoneNumber = customer?.phoneNumber;
      this.customer.emailAddress = customer?.emailAddress;
    }
  },
  async mounted() {
    const activeOrder = await this.$vendure.getActiveOrder();
    await this.$vendure.getActiveCustomer();
    if (this.activeCustomer) {
      this.setCustomer(this.activeCustomer);
      this.setAddress(this.activeCustomer.addresses?.[0])
    } else {
      // Set Customer, if already set on order
      this.setCustomer(activeOrder?.customer);
      // Set Address, if already set on order
      this.setAddress(activeOrder?.shippingAddress);
    }
  }
}
</script>
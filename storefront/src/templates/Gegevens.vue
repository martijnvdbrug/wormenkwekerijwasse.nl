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
              <h1> Jouw gegevens</h1>
            </div>
          </div>

          <div class="grid-x grid-margin-x">
            <div class="cell">
              <div class="card shadowed article-card" style="padding: 30px;">

                <form v-on:submit.prevent="submit()">
                  <div class="grid-x grid-padding-x">
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
                      <label>Telefoonnummer
                        <input type="tel" name="phoneNumber" v-model="customer.phoneNumber">
                      </label>
                    </div>
                    <div class="cell small-6">
                      <label>Email*
                        <input type="email" name="email" required v-model="customer.emailAddress">
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
  data() {
    return {
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
    setCountry(countryName) {
      const country = this.$context.availableCountries?.find(c => c.name === countryName);
      if (country) {
        this.address.countryCode = country.code;
      }
    },
    async submit() {
      const address = {
        ...this.address,
        fullName: `${this.customer.firstName} ${this.customer.lastName}`,
        defaultBillingAddress: true,
        defaultShippingAddress: true,
        phoneNumber: this.customer.phoneNumber,
      };
      await Promise.all([
        this.$vendure.setCustomerForOrder(this.customer),
        this.$vendure.setOrderShippingAddress(address)
      ]);
      this.$router.push('/verzending/')
    },
  },
  async mounted() {
    const activeOrder = await this.$vendure.getActiveOrder();
    // Set Customer, if already set on order
    this.customer.firstName = activeOrder?.customer?.firstName;
    this.customer.lastName = activeOrder?.customer?.lastName;
    this.customer.phoneNumber = activeOrder?.customer?.phoneNumber;
    this.customer.emailAddress = activeOrder?.customer?.emailAddress;
    // Set Address, if already set on order
    this.address.company = activeOrder?.shippingAddress?.company;
    this.address.streetLine1 = activeOrder?.shippingAddress?.streetLine1;
    this.address.streetLine2 = activeOrder?.shippingAddress?.streetLine2;
    this.address.city = activeOrder?.shippingAddress?.city;
    this.address.postalCode = activeOrder?.shippingAddress?.postalCode;
    this.setCountry(activeOrder?.shippingAddress?.country);
  }
}
</script>
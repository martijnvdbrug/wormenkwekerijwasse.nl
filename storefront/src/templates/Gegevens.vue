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
                        <input type="text" name="city" required v-model="address.city" maxlength="29">
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
                    <div class="cell small-6">
                      <label>Optionele notitie
                        <textarea id="textarea" name="customerNote" rows="3" maxlength="254" v-model="customerNote"></textarea>
                      </label>
                    </div>
                  </div>

                  <!-- billing address -->
                  <div class="cell small-12">
                    <input id="account" v-model="differentBillingAddress" type="checkbox"><label for="account">Ik wil een ander factuuradres opgeven</label>
                  </div>
                  <div v-if="differentBillingAddress">
                    <div class="grid-x grid-padding-x">
                      <div class="cell small-6 ">
                        <label>Bedrijfsnaam*
                          <input type="text" :required="differentBillingAddress" name="company" v-model="billingAddress.company">
                        </label>
                      </div>
                    </div>
                    <div class="grid-x grid-padding-x">
                      <div class="cell small-8">
                        <label>Straat*
                          <input type="text" name="street" :required="differentBillingAddress" v-model="billingAddress.streetLine1">
                        </label>
                      </div>
                      <div class="cell small-4">
                        <label>Huisnr*
                          <input type="text" name="housenr" :required="differentBillingAddress" v-model="billingAddress.streetLine2">
                        </label>
                      </div>
                    </div>
                    <div class="grid-x grid-padding-x">
                      <div class="cell small-8">
                        <label>Plaats*
                          <input type="text" name="city" :required="differentBillingAddress" v-model="billingAddress.city" maxlength="29">
                        </label>
                      </div>
                      <div class="cell small-4">
                        <label>Postcode*
                          <input type="text" name="postalcode" :required="differentBillingAddress" v-model="billingAddress.postalCode">
                        </label>
                      </div>
                    </div>
                    <div class="grid-x grid-padding-x">
                      <div class="cell small-6">
                        <label>Land
                          <select name="country" v-model="billingAddress.countryCode">
                            <option v-for="country of $context.availableCountries"
                                    :value="country.code">
                              {{ country.name }}
                            </option>
                          </select>
                        </label>
                      </div>
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
      return this.$store?.activeCustomer;
    }
  },
  data() {
    return {
      customerNote: undefined,
      differentBillingAddress: false,
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
      },
      billingAddress: {
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
    getCountryCode(countryName) {
      const country = this.$context.availableCountries?.find(c => c.name === countryName);
      if (country) {
        return country.code;
      }
    },
    async submit() {
      const address = {
        ...this.address,
        fullName: `${this.customer.firstName} ${this.customer.lastName}`,
        defaultBillingAddress: !this.differentBillingAddress,
        defaultShippingAddress: true,
        phoneNumber: this.customer.phoneNumber,
      };
      if (this.activeCustomer) {
        const c = this.customer;
        delete c.emailAddress;
        await this.$vendure.updateCustomer(c);
        if (this.activeCustomer.addresses?.[0]) {
          this.$vendure.updateCustomerAddress({
            id: this.activeCustomer.addresses?.[0].id,
            ...address
          }).catch(e => console.error(e));
        } else {
          this.$vendure.createCustomerAddress(address).catch(e => console.error(e));
        }
      } else {
        await this.$vendure.setCustomerForOrder(this.customer);
      }
      if (this.differentBillingAddress) {
        const billingAddress = {
          ...this.billingAddress,
          fullName: `${this.customer.firstName} ${this.customer.lastName}`,
          defaultBillingAddress: true,
          defaultShippingAddress: false,
          phoneNumber: this.customer.phoneNumber,
        };
        await this.$vendure.setOrderBillingAddress(billingAddress);
      }
      await this.$vendure.setOrderShippingAddress(address);
      if (this.customerNote) {
        await this.$vendure.setOrderNote(this.customerNote);
      }
      this.$router.push('/verzending/')
    },
    setAddress(address) {
      this.address.company = address?.company;
      this.address.streetLine1 = address?.streetLine1;
      this.address.streetLine2 = address?.streetLine2;
      this.address.city = address?.city;
      this.address.postalCode = address?.postalCode;
      this.address.countryCode = this.getCountryCode(address?.country) || 'NL';
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
      this.setAddress(this.activeCustomer.addresses?.[0]);
    } else {
      // Set Customer, if already set on order
      this.setCustomer(activeOrder?.customer);
      // Set Address, if already set on order
      this.setAddress(activeOrder?.shippingAddress);
    }
    this.customerNote = activeOrder?.customFields?.customerNote;
    if (activeOrder.billingAddress?.city) {
      this.differentBillingAddress = true;
      const address = activeOrder.billingAddress;
      this.billingAddress.company = address?.company;
      this.billingAddress.streetLine1 = address?.streetLine1;
      this.billingAddress.streetLine2 = address?.streetLine2;
      this.billingAddress.city = address?.city;
      this.billingAddress.postalCode = address?.postalCode;
      this.billingAddress.countryCode = this.getCountryCode(address?.country) || 'NL';
    }

  }
}
</script>
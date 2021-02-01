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
          <g-link to="/" aria-label="Shopping cart">
            <i class="fi-shopping-cart mobile-cart" data-fa-transform="down-4"></i>
          </g-link>
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
                <li>
                  <g-link to="/">Item 1A</g-link>
                </li>
                <li>
                  <g-link to="/">Item 1A</g-link>
                </li>
                <li>
                  <g-link to="/">Item 1A</g-link>
                </li>
                <li>
                  <g-link to="/">Item 1A</g-link>
                </li>
              </ul>
            </li>
            <li>
              <g-link to="/"><h5>Advies & informatie </h5></g-link>
            </li>
            <li>
              <g-link to="/"><h5>Contact</h5></g-link>
            </li>
          </ul>
        </div>
        <div class="cell small-1 hide-for-small-only align-right">
          <ul class="menu">
            <li>
              <g-link to="/" aria-label="Shopping cart">
                <h5>
                  <i class="fi-shopping-cart"></i>
                </h5>
              </g-link>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div style="padding: 10px;">
      <slot/>
    </div>

  </div>
</template>
<script>
export default {
  components: {},
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
  mounted() {
    $?.(document).foundation();
  }
}
</script>
<style>
.menu h5 {
  margin-bottom: 0;
}

.menu a {
  padding: 0 3rem !important;
}

.title-bar {
  background: white;
}

.is-submenu-item {
  padding-left: 20px;
}

.mobile-cart {
  font-size: 1.3rem;
}
.title-bar {
  padding: 10px;
}
</style>
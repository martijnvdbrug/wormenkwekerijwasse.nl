<template>
  <Layout>

    <div class="grid-x grid-margin-x">
      <div class="cell show-for-large large-2">
        <div class="card shadowed">
          <div class="card-section">
            <h6>Bekijk ook ons assortiment:</h6>
          </div>
          <div class="card-section assortiment">
            <ul>
              <li v-for="collection of $context.collections">
                <g-link :to="`/${categoryPrefix}/${collection.slug}`">{{
                    collection.name
                  }}
                </g-link>
                <g-link v-for="subCollection of collection.children"
                        class="is-submenu-item"
                        style="padding-left: 30px;"
                        :to="`/${categoryPrefix}/${subCollection.slug}`">
                  {{ subCollection.name }}
                </g-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cell small-12 large-8">

        <h1>{{ $context.blog.title }}</h1>
        <div class="card shadowed">
          <AsyncImage :src="$context.blog.featuredImage" style="object-fit: cover; height: 300px;"/>
          <div class="card-section" v-html="$context.blog.body">
          </div>
        </div>
      </div>
      <div class="cell show-for-large large-2"></div>
    </div>

  </Layout>
</template>
<script>
import {categoryPrefix} from '../util';

export default {
  data() {
    return {categoryPrefix}
  },
  mounted() {
    // Parse Embedded content in found in <pre> tags
    document.querySelector('pre').innerHTML = document.querySelector('pre').textContent;
  },
}
</script>
<style>
.assortiment ul {
  list-style-type: none;
}

.assortiment a {
  color: #5fad56;
  padding-bottom: 20px;
}

.assortiment li {
  padding-bottom: 20px;
}
</style>
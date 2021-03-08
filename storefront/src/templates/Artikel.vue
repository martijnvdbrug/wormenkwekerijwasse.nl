<template>
  <Layout>

    <h1>{{ $context.blog.title }}</h1>
    <p style="color: gray;">{{ $context.blog.createdAt | date }} door {{ $context.blog.author }}</p>
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 large-8">
        <div class="card shadowed">
          <AsyncImage :src="$context.blog.featuredImage" style="object-fit: cover; height: 300px;"/>
          <div class="card-section" v-html="$context.blog.body">
          </div>
          <div class="card-section">
            <div v-if="$context.disqusSlug" id="migrated-comments">
              <!--- Get migrated comments -->
              <Disqus shortname="wormenkwekerijwasse" :page-config="{slug: this.$context.disqusSlug}"
                      lang="nl"/>
            </div>
            <div v-else id="new-thread">
              <!--- Otherwise create new disciossion -->
              <Disqus shortname="wormenkwekerijwasse" lang="nl"/>
            </div>
          </div>
        </div>
      </div>


      <div class="cell show-for-large large-4">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>
<script>
import {categoryPrefix} from '../util';

export default {
  mixins: [require('../mixins/load-foundation')],
  data() {
    return {
      categoryPrefix,
      config: {
        slug: 'wormen_viswormen_en_compostwormen_bewaren'
      }
    }
  },
  mounted() {
    // Parse Embedded content in found in <pre> tags
    if (document.querySelector('pre')?.textContent) {
      document.querySelector('pre').innerHTML = document.querySelector('pre').textContent;
    }
    // Load instagram embed again ,in case instagram ambeds are here
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://www.instagram.com/embed.js')
    document.head.appendChild(externalScript)
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
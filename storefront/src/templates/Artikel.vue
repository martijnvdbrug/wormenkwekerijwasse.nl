<template>
  <Layout>

    <div class="grid-x grid-margin-x">
      <div class="cell show-for-large large-2"></div>
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
export default {
  mounted() {
    // Parse Embedded content in found in <pre> tags
    document.querySelector('pre').innerHTML = document.querySelector('pre').textContent;
  }
}
</script>
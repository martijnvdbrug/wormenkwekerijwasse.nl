<template>
  <div>
    <form v-if="!alreadySubmitted" v-on:submit.prevent="submit()">
      <fieldset>
    <span class="star-cb-group">
      <input type="radio" id="rating-5" name="rating" value="5" v-model="rating"/>
      <label for="rating-5">5</label>
      <input type="radio" id="rating-4" name="rating" value="4" checked="checked" v-model="rating"/>
      <label for="rating-4">4</label>
      <input type="radio" id="rating-3" name="rating" value="3" v-model="rating"/>
      <label for="rating-3">3</label>
      <input type="radio" id="rating-2" name="rating" value="2" v-model="rating"/>
      <label for="rating-2">2</label>
      <input type="radio" id="rating-1" name="rating" value="1" v-model="rating"/>
      <label for="rating-1">1</label>
      <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" v-model="rating"/>
      <label for="rating-0">0</label>
    </span>
      </fieldset>
      <label>Naam*
        <input type="text" name="name" v-model="authorName" required>
      </label>
      <label>Wat vind je van dit product?*
        <textarea name="body" rows="4" v-model="body" required>
      </textarea>
      </label>
      <label class="ohnohoney">
        Extra naam*
        <input class="ohnohoney" autocomplete="off" type="text" name="extraName" v-model="extraName">
      </label>
      <input :disabled="disableSubmit" type="submit" class="button" value="Verzenden">
    </form>
    <p v-else>Bedankt voor je review!</p>
  </div>
</template>
<script>
import {getSeoDescription} from '../seo-helpers';

export default {
  props: ['productId'],
  data() {
    return {
      body: undefined,
      rating: 4,
      authorName: undefined,
      extraName: undefined,
      disableSubmit: false,
      alreadySubmitted: false,
    }
  },
  mounted() {
  },
  methods: {
    async submit() {
      try {
        if (this.extraName) {
          console.log(`You're a bot, I'm not gonna submit this review`);
          return;
        }
        this.disableSubmit = true;
        const summary = getSeoDescription(this.body);
        await this.$vendure.submitReview({
          productId: this.productId,
          body: this.body,
          summary,
          rating: parseInt(this.rating),
          authorName: this.authorName,
        });
        this.alreadySubmitted = true;
      } catch (e) {
        this.disableSubmit = false;
      }
    }
  }
}
</script>
<style>
.star-cb-group {
  /* remove inline-block whitespace */
  font-size: 0;
  /* flip the order so we can use the + and ~ combinators */
  unicode-bidi: bidi-override;
  direction: rtl;
  /* the hidden clearer */
}

.star-cb-group * {
  font-size: 1rem;
}

.star-cb-group > input {
  display: none;
}

.star-cb-group > input + label {
  /* only enough room for the star */
  margin: 0;
  display: inline-block;
  overflow: hidden;
  text-indent: 9999px;
  width: 1em;
  white-space: nowrap;
  cursor: pointer;
}

.star-cb-group > input + label:before {
  display: inline-block;
  text-indent: -9999px;
  content: "☆";
  color: #888;
}

.star-cb-group > input:checked ~ label:before, .star-cb-group > input + label:hover ~ label:before, .star-cb-group > input + label:hover:before {
  content: "★";
  color: #5FAD56;
  text-shadow: 0 0 1px #333;
}

.star-cb-group > .star-cb-clear + label {
  text-indent: -9999px;
  width: .5em;
  margin-left: -.5em;
}

.star-cb-group > .star-cb-clear + label:before {
  width: .5em;
}

.star-cb-group:hover > input + label:before {
  content: "☆";
  color: #888;
  text-shadow: none;
}

.star-cb-group:hover > input + label:hover ~ label:before, .star-cb-group:hover > input + label:hover:before {
  content: "★";
  color: #5FAD56;
  text-shadow: 0 0 1px #333;
}

.ohnohoney {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>

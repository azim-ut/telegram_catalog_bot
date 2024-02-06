<template>
  <div v-for="row in $props.list" class="item">

    <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
        ></v-progress-linear>
      </template>

      <v-img
          cover
          height="250"
          v-if="row.picture.length>0"
          :src="row.picture[0]"
      ></v-img>

      <v-card-item>
        <v-card-title>{{ row.name }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon
              color="error"
              icon="mdi-fire-circle"
              size="small"
          ></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
          ></v-rating>

          <div class="text-grey ms-4">
            4.5 (413)
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $ • Italian, Cafe
        </div>

        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-actions>
        <v-btn
            color="deep-purple-lighten-2"
            variant="text"
            @click="reserve"
        >
          <font-awesome-icon icon="fas fa-shopping-cart" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapStores} from "pinia";
import {catalogStore} from "@/stores/catalog/catalog";
import type {CatalogItem} from "@/stores/catalog/types";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon},
  computed: {...mapStores(catalogStore)},
  props: {
    list: [] as CatalogItem[]
  },
  methods: {
  },
  mounted() {

  }
})
</script>

<style scoped>
.item{

}
.item .icon{
  width: 100px; height: 100px; border-radius: 10px;
}
</style>

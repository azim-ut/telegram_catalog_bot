<template>
  <div class="grid grid3">
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
        <div class="img" v-if="typeof row.picture === 'object' && row.picture.length>0" :style="{'background-image': 'url('+row.picture[0]+')'}"></div>
        <div class="img" v-if="typeof row.picture === 'string'" :style="{'background-image': 'url('+row.picture+')'}"></div>


        <v-card-item>
          <v-card-title>{{ row.name }}</v-card-title>
          <v-card-subtitle>
            <span class="me-1">{{row.vendor}}</span>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-chip v-for="param in row.param"
                    style="margin: 2px;"
                    size="x-small">
              {{param}}
            </v-chip>
            <div class="text-grey ms-4">


            </div>

          <div class="my-4 text-subtitle-1">
            {{printPrice(row.price, row.currencyId)}}
          </div>

          <div>{{$filters.str_limit(row.description, 100)}}</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <v-btn width="100%">
            <font-awesome-icon icon="fas fa-shopping-cart" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapStores} from "pinia";
import {catalogStore} from "@/stores/catalog/catalog";
import type {CatalogItem} from "@/stores/catalog/types";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {printPrice} from "@/main";

export default defineComponent({
  components: {FontAwesomeIcon},
  computed: {...mapStores(catalogStore)},
  props: {
    list: [] as CatalogItem[]
  },
  methods: {
    printPrice
  },
  mounted() {

  }
})
</script>

<style scoped>
.item{
  margin: 0 auto !important;

}
.item .v-card{
  margin: 5px auto !important;

}
.item .img{
  width: 100%;
  height: 250px;
  background: transparent no-repeat center center/cover;
}
.item .icon{
  width: 100px; height: 100px; border-radius: 10px;
}
</style>

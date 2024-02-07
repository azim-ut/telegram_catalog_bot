<template>
  <div class="grid catalogGrid forced">
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

        <div>
          {{row.name}}
        </div>
        <div class="price grid grid131">
          <div> - </div>
          <div>
            {{printNoCurrency(row.price)}}
          </div>
          <div> + </div>
        </div>
        <div class="img"
             v-if="typeof row.picture === 'object' && row.picture.length>0"
             :title="row.name"
             :alt="$filters.str_limit(row.description, 100)"
             :style="{'background-image': 'url('+row.picture[0]+')'}"></div>
        <div class="img"
             :title="row.name"
             :alt="$filters.str_limit(row.description, 100)"
             v-if="typeof row.picture === 'string'"
             :style="{'background-image': 'url('+row.picture+')'}"></div>
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
import {printNoCurrency, printPrice} from "@/main";

export default defineComponent({
  components: {FontAwesomeIcon},
  computed: {...mapStores(catalogStore)},
  props: {
    list: [] as CatalogItem[]
  },
  methods: {
    printNoCurrency,
    printPrice
  },
  mounted() {

  }
})
</script>

<style scoped>
.item{
  margin: 0 auto !important;
  position: relative;
}
.item .v-card{
  overflow: unset;
  margin: 5px auto !important;
  box-shadow: none;
  background: transparent;
}
.item .img{
  width: 150px;
  height: 150px;
  border-radius: 30px;
  box-shadow: -2px 2px 3px rgba(0,0,0,0.2);
  background: transparent no-repeat center center/contain;
}
.item .price{
  position: absolute;
  left: 10px;
  right: 10px;
  background: #9f9f9f;
  text-align: center;
  display: none;
}
.item .icon{
  width: 100px; height: 100px; border-radius: 10px;
}
.catalogGrid{
  grid-template-columns: 3fr 1fr;
}

@media (min-width: 200px) {
  .catalogGrid {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 300px) {
  .catalogGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 470px) {
  .catalogGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 800px) {
  .catalogGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 950px) {
  .catalogGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1050px) {
  .catalogGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1150px) {
  .catalogGrid {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media (min-width: 1350px) {
  .catalogGrid {
    grid-template-columns: repeat(7, 1fr);
  }
}
@media (min-width: 1450px) {
  .catalogGrid {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>

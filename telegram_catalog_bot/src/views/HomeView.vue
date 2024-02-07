<template>
  <main>
    <v-bottom-sheet v-model="showFilter">
      <v-card
          class="text-center"
          height="100vh"
      >
        <v-card-text>

          <div class="filterClsBtn" @click="showFilter = false">
            <font-awesome-icon icon="fas fa-close"></font-awesome-icon>
          </div>

          <div>
            <div v-for="cat in getCategories()">{{cat.title}}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>

    <ItemsList :list="getCatalogItems()"/>

    <div class="filterBtn" @click="showFilter = true">
      <font-awesome-icon icon="fas fa-filter"></font-awesome-icon>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ItemsList from "@/components/ItemsList.vue";
import {mapStores} from "pinia";
import {catalogStore} from "@/stores/catalog/catalog";
import type {CatalogItem, CategoryItem} from "@/stores/catalog/types";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon, ItemsList},
  computed: {...mapStores(catalogStore)},
  methods: {
    getCatalogItems(): CatalogItem[]{
      return this.catalogStore.getItems
    },
    getCategories(): CategoryItem[]{
      return this.catalogStore.getCategories
    },
  },
  data(){
    return {
      showFilter: false
    }
  },
  mounted() {

  }
})
</script>

<style scoped>
.filterBtn,
.filterClsBtn{
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  box-shadow: -3px 4px 12px rgba(0,0,0,0.2);
  text-align: center;
  line-height: 80px;
  background: #ffffff;
  border-radius: 50%;
  border: #b2b2b2 3px solid;
  font-size: 2rem;
  cursor: pointer;
  transition: .5s;
  color: #8398ad;
}
.filterClsBtn{
  width: 50px;
  height: 50px;
  font-size: 1rem;
  line-height: 45px;
}
.filterBtn:hover,
.filterClsBtn:hover{
  background: #fff;
  border: #b2b2b2 3px solid;
  color: #446583;
}
</style>

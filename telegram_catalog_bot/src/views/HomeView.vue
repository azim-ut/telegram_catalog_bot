<template>
  <main>
    <ItemsList :list="getCatalogItems()"/>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ItemsList from "@/components/ItemsList.vue";
import {mapStores} from "pinia";
import {catalogStore} from "@/stores/catalog/catalog";
import type {CatalogItem} from "@/stores/catalog/types";

export default defineComponent({
  components: {ItemsList},
  computed: {...mapStores(catalogStore)},
  methods: {
    getCatalogItems(): CatalogItem[]{
      return this.catalogStore.getItems
    },
  },
  mounted() {

  }
})
</script>

<style scoped>
</style>

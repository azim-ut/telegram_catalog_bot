<template>
  <main>
    <v-sheet max-width="100%" class="mx-auto">
      <v-form validate-on="submit lazy"
              @submit.prevent="submitFilter">
        <div>
          <v-text-field
              v-model="filterItems"
              label="Фильтр товаров"
          >
            <template v-slot:append>
              <v-btn
                  :loading="filterLoading"
                  type="submit"
                  block
                  size="large"
                  class="mt-2"
                  text="Submit"
              ></v-btn>
            </template>
          </v-text-field>
        </div>
      </v-form>
    </v-sheet>


    <v-bottom-sheet v-model="showFilter">
      <v-card
          class="text-center"
          height="100vh"
      >

        <div class="filterClsBtn" @click="showFilter = false">
          <font-awesome-icon icon="fas fa-angle-down"></font-awesome-icon>
        </div>
        <v-card-text>

          <div>

            <v-chip  v-for="(cat, index) in getCategories(filterPattern).filter(row => !row.muted && row.selected)"
                    style="margin: 2px;"
                    size="x-small">
              {{cat.title}}
            </v-chip>
            <v-sheet max-width="100%" class="mx-auto">
              <v-form validate-on="submit lazy"
                      @submit.prevent="submitFilter">
                <div>
                  <v-text-field
                      v-model="filterPattern"
                      label="Фильтр категорий"
                  >
                    <template v-slot:append>
                      <v-btn
                          :loading="filterLoading"
                          type="submit"
                          block
                          size="large"
                          class="mt-2"
                          text="Submit"
                      ></v-btn>
                    </template>
                  </v-text-field>
                </div>
              </v-form>
            </v-sheet>

            <v-list select-strategy="classic">
              <v-list-item @click="cat.selected = !cat.selected" v-for="(cat, index) in getCategories(filterPattern)">
                <template v-slot:prepend="{isActive}">
                  <v-list-item-action start>
                    <font-awesome-icon :icon="['far', 'square']" v-if="!cat.selected" />
                    <font-awesome-icon :icon="['far', 'square-check']" v-if="cat.selected" />
                  </v-list-item-action>
                </template>
                <v-list-item-title>
                  <div class="text alignL">{{cat.title}}</div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>

    <ItemsList :list="getCatalogItems()"/>

    <div class="filterBtn" @click="showFilter = true">
      <font-awesome-icon icon="fas fa-angle-up"></font-awesome-icon>
    </div>

    <div class="cartBtn" @click="showFilter = true">
      <font-awesome-icon icon="fas fa-shopping-cart" />
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
    getCategories(pattern: string): CategoryItem[]{
      if(!pattern || pattern === ''){
        return this.catalogStore.getCategories.sort((a:any, b:any) => a.title.localeCompare(b.title))
      }
      pattern = pattern.toLowerCase()
      return this.catalogStore.getCategories
          .filter((row: any) => row.title.toLowerCase().includes(pattern))
          .sort((a:any, b:any) => a.title.localeCompare(b.title))
    },
    submitFilter(){
      console.log(this.filterPattern)
    },

  },
  data(){
    return {
      filterLoading: false,
      showFilter: false,
      filterItems: '',
      filterPattern: '',
      timeout: null
    }
  },
  mounted() {
    this.catalogStore.clearCategories()
  }
})
</script>

<style scoped>
.cartBtn,
.filterBtn,
.filterClsBtn{
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  box-shadow: -3px 4px 12px rgba(0,0,0,0.2);
  text-align: center;
  line-height: 76px;
  background: #ffffff;
  border-radius: 50%;
  border: #b2b2b2 3px solid;
  font-size: 3rem;
  cursor: pointer;
  transition: .5s;
  color: #8398ad;
  z-index: 100;
}
.filterClsBtn{
  width: 50px;
  height: 50px;
  font-size: 2rem;
  line-height: 50px;
}
.cartBtn:hover,
.filterBtn:hover,
.filterClsBtn:hover{
  background: #fff;
  border: #b2b2b2 3px solid;
  color: #446583;
}

.cartBtn{
  left: 10px;
  right: auto;
  font-size: 2rem;
}
</style>

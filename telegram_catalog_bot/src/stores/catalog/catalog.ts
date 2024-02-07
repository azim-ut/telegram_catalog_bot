import {defineStore} from "pinia";
import type {CatalogItem, CatalogState, CategoryItem} from "./types"
import catalogJson from "@/data/xmltojson.json"

function parseCatalogItems(): CatalogItem[]{
    let res: CatalogItem[] = []
    if(catalogJson && catalogJson.yml_catalog.shop.offers.offer){
        catalogJson.yml_catalog.shop.offers.offer.forEach((row: any) => {
            return res.push(row)
        })
    }
    return res
}
function parseCategories(): CategoryItem[]{
    let res: CategoryItem[] = []
    if(catalogJson && catalogJson.yml_catalog.shop.categories.category){
        catalogJson.yml_catalog.shop.categories.category.forEach((row: any, ind: number) => {
            return res.push({
                id: ind,
                title: row,
                muted: false,
                selected: false
            })
        })
    }
    return res
}

export const catalogStore = defineStore('catalog', {
    state: (): CatalogState => ({
        items: parseCatalogItems(),
        categories: parseCategories()
    }),
    getters: {
        getItems: (state: CatalogState): CatalogItem[] => {
            const categories = state
                                            .categories
                                            .filter(cat => cat.selected)
                                            .map(cat => cat.id)
            if(categories.length === 0){
                return state.items.slice(0, 100)
            }
            return state.items.filter(row => {
                return categories.includes(row.categoryId);
            })
        },
        getCategories: (state: CatalogState): CategoryItem[] => state.categories.filter(cat => !cat.muted),
    },
    actions: {
        clearCategories(){
            this.$state.categories.forEach(row => row.muted = true)
            this.$state.items.forEach(item => {
                this.$state.categories
                    .filter(cat => cat.muted && cat.id === item.categoryId)
                    .forEach(cat => cat.muted = false)
            })
        }
    }
})
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
        getItems: (state: CatalogState): CatalogItem[] => state.items.slice(0, 100),
        getCategories: (state: CatalogState): CategoryItem[] => state.categories,
    },
    actions: {
    }
})
import {defineStore} from "pinia";
import type {CatalogItem, CatalogState} from "./types"
import catalogJson from "@/data/catalog_1.json"

function parseCatalogItems(): CatalogItem[]{
    let res: CatalogItem[] = []
    if(catalogJson && catalogJson.yml_catalog.shop.offers.offer){
        catalogJson.yml_catalog.shop.offers.offer.forEach((row: any) => {
            return res.push(row)
        })
    }
    return res
}

export const catalogStore = defineStore('catalog', {
    state: (): CatalogState => ({
        items: parseCatalogItems()
    }),
    getters: {
        getItems: (state: CatalogState): CatalogItem[] => state.items,
    },
    actions: {
    }
})
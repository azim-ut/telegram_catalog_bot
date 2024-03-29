export interface CatalogItem{
    url: string,
    price: number,
    currencyId: number,
    categoryId: number,
    picture: string[],
    store: false,
    pickup: false,
    delivery: false,
    name: string
    vendor: string
    vendorCode: number
    model: string
    param: string[]
    description: string
}

export interface CategoryItem{
    id: number,
    title: number,
    muted: boolean,
    selected: boolean
}

export interface CatalogState {
    categories: CategoryItem[],
    items: CatalogItem[]
}
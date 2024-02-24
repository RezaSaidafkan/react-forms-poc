import { Item } from "./models/item"

export const createItem = async (item: Item) => {
    console.log(`Creating item: ${item.name}`)
}
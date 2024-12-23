// Create an object called shoppingCart with properties items and total, and methods addItem and removeItem.
// The addItem method should add an item (provided as argument to addItem) to the items array and update the total property accordingly.
// The removeItem method should remove an item (provided as argument to removeItem) from the items array and update the total property accordingly.

const shoppingCart = {
    total:0,
    items:[],
    addItem(item){
        this.items.push(item);
        this.total+=item.price
    },
    removeItem(item){
        
    }
}
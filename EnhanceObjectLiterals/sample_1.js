function createBookshop(inventory) {
    return {
        inventory,
         inventoryValue() {
            return this.inventory.reduce((total, book) => {
               total + book.price
            }, 0)
         },
         priceForTitle(title){
             return this.inventory.find((book) => book.title === title).price;
         }
    }
}const inventory = [
    {title: 'Tralala', price: 24},
    {title: 'Ayuuuu', price: 30}
]


const bookshop = createBookshop(inventory);

bookshop.inventory();
bookshop.priceForTitle('Tralala');
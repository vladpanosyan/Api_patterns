class InitProduct {
    constructor(type: string) {
        this.type = type;
    }
    type: string;
    name: string
    price: number;

    count: number;
    discount: number
}

interface ProductShape {
    setName(name):any;
    setPrice(price):any;
    setCount(count): any;
    setDiscount(discount): any

}

class ProductBuilder implements ProductShape {
    product: InitProduct;
    constructor(type: string) {
        this.product = new InitProduct(type)
    }
    setPrice(price) {
         Object.assign(this.product, {'price': price})
         return this

    }
    setCount(count) {
         Object.assign(this.product, {'count': count})
         return this

    }
    setDiscount(discount) {
         Object.assign(this.product, {'discount': discount})
         return this
    }
    setName(name) {
         Object.assign(this.product, {'name': name})
         return this


    }
    build() {
        return this.product
    }
}
let product = new ProductBuilder('car')
product.setName("BMW").setCount(6).setPrice(3000).setDiscount(5).build()
console.log(product)
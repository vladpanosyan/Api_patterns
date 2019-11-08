var InitProduct = /** @class */ (function () {
    function InitProduct(type) {
        this.type = type;
    }
    return InitProduct;
}());
var ProductBuilder = /** @class */ (function () {
    function ProductBuilder(type) {
        this.product = new InitProduct(type);
    }
    ProductBuilder.prototype.setPrice = function (price) {
        Object.assign(this.product, { 'price': price });
        return this;
    };
    ProductBuilder.prototype.setCount = function (count) {
        Object.assign(this.product, { 'count': count });
        return this;
    };
    ProductBuilder.prototype.setDiscount = function (discount) {
        // this.product.discount = discount
        //  this
        Object.assign(this.product, { 'discount': discount });
        return this;
    };
    ProductBuilder.prototype.setName = function (name) {
        Object.assign(this.product, { 'name': name });
        return this;
    };
    ProductBuilder.prototype.build = function () {
        return this.product;
    };
    return ProductBuilder;
}());
var product = new ProductBuilder('car');
product.setName("BMW").setCount(6).setPrice(3000).setDiscount(5).build();
console.log(product);

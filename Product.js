var Product = /** @class */ (function () {
    function Product(ProductId, ProductName, Category, Manufacturer, Description, Price) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Category = Category;
        this.Manufacturer = Manufacturer;
        this.Description = Description;
        this.Price = Price;
    }
    Object.defineProperty(Product.prototype, "productId", {
        get: function () {
            return this.ProductId;
        },
        set: function (v) {
            this.ProductId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this.ProductName;
        },
        set: function (v) {
            this.ProductName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "category", {
        get: function () {
            return this.Category;
        },
        set: function (v) {
            this.Category = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "manufacturer", {
        get: function () {
            return this.Manufacturer;
        },
        set: function (v) {
            this.Manufacturer = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "description", {
        get: function () {
            return this.Description;
        },
        set: function (v) {
            this.Description = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this.Price;
        },
        set: function (v) {
            this.Price = v;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
    }
    ProductLogic.prototype.getAllProducts = function () {
        return this.Products;
    };
    ProductLogic.prototype.listProductsByCategory = function (category) {
        return this.getAllProducts().filter(function (x) { return x.category === category; });
    };
    ProductLogic.prototype.listProductsByManufacturer = function (manufacturer) {
        return this.getAllProducts().filter(function (x) { return x.manufacturer === manufacturer; });
    };
    ProductLogic.prototype.addAProduct = function (ProductId, ProductName, Category, Manufacturer, Description, Price) {
        var product = new Product(ProductId, ProductName, Category, Manufacturer, Description, Price);
        if (this.validateProduct(product)) {
            this.saveAllProducts(product);
            console.log("Product Saved");
        }
    };
    ProductLogic.prototype.updateAProduct = function (ProductId, ProductName, Category, Manufacturer, Description, Price) {
        var productToBeUpdated = this.Products.find(function (x) { return x.productId === ProductId; });
        if (this.validateProduct(productToBeUpdated)) {
            var updatedIndex = this.Products.indexOf(productToBeUpdated);
            this.Products[updatedIndex].productName = ProductName;
            this.Products[updatedIndex].category = Category;
            this.Products[updatedIndex].manufacturer = Manufacturer;
            this.Products[updatedIndex].description = Description;
            this.Products[updatedIndex].price = Price;
            console.log("Product Updated");
        }
    };
    ProductLogic.prototype.deleteAProduct = function (ProductId) {
        this.Products = this.Products.filter(function (x) { return x.productId !== ProductId; });
        console.log("Product Deleted");
    };
    ProductLogic.prototype.saveAllProducts = function (product) {
        this.Products.push(product);
    };
    ProductLogic.prototype.validateProduct = function (product) {
        var validate = this.Products.find(function (x) { return x.productId === product.productId; });
        if (product !== undefined) {
            console.log("ProductId already exist");
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(product.productName)) {
            console.log("ProductName is not a string");
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(product.category)) {
            console.log("Categpry is not a string");
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(product.manufacturer)) {
            console.log("Manufacturer is not a string");
            return false;
        }
        if (product.description.length > 100) {
            console.log("Description length can not be more than 100 characters");
            return false;
        }
        if (product.price < 0) {
            console.log("Price can not be negative");
            return false;
        }
        return true;
    };
    ProductLogic.prototype.operation = function () {
        this.addAProduct(101, "ABCD", "Car", "KIA", "AABB", 1257000);
        this.addAProduct(102, "YYZZ", "Car", "KIA", "YYY", 1257000);
        this.addAProduct(103, "ABCD", "Car", "KIA", "AABB", 1257000);
        this.addAProduct(104, "YYZZ", "Car", "Hyundai", "YYY", 1257000);
        this.addAProduct(105, "ABCD", "Car", "Maruti", "AABB", 1257000);
        this.addAProduct(106, "YYZZ", "Car", "Tata", "YYY", -124124);
        this.getAllProducts();
    };
    return ProductLogic;
}());

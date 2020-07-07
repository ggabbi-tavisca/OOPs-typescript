class Product {
    constructor(private ProductId: number, private ProductName: string,
        private Category: string, private Manufacturer: string,
        private Description: string, private Price: number) {
    }

    public set productId(v: number) {
        this.ProductId = v;
    }

    public get productId(): number {
        return this.ProductId
    }

    public set productName(v: string) {
        this.ProductName = v;
    }

    public get productName(): string {
        return this.ProductName
    }

    public set category(v: string) {
        this.Category = v;
    }

    public get category(): string {
        return this.Category
    }

    public set manufacturer(v: string) {
        this.Manufacturer = v;
    }

    public get manufacturer(): string {
        return this.Manufacturer
    }

    public set description(v: string) {
        this.Description = v;
    }

    public get description(): string {
        return this.Description
    }

    public set price(v: number) {
        this.Price = v;
    }

    public get price(): number {
        return this.Price
    }
}

class ProductLogic {

    Products: Array<Product>;

    getAllProducts(): Array<Product> {
        return this.Products;
    }

    listProductsByCategory(category : string): Array<Product> {
        return this.getAllProducts().filter(x => x.category === category)
    }

    listProductsByManufacturer(manufacturer : string): Array<Product> {
        return this.getAllProducts().filter(x => x.manufacturer === manufacturer)
    }

    addAProduct(ProductId: number, ProductName: string, Category: string,
        Manufacturer: string, Description: string, Price: number): void {

        let product = new Product(ProductId, ProductName, Category, Manufacturer, Description, Price);
        if (this.validateProduct(product)){
            this.saveAllProducts(product);
            console.log("Product Saved");
        }
    }

    updateAProduct(ProductId: number, ProductName: string, Category: string,
        Manufacturer: string, Description: string, Price: number): void {

        let productToBeUpdated = this.Products.find(x => x.productId === ProductId);

        if (this.validateProduct(productToBeUpdated)) {
            let updatedIndex = this.Products.indexOf(productToBeUpdated);

            this.Products[updatedIndex].productName = ProductName;
            this.Products[updatedIndex].category = Category;
            this.Products[updatedIndex].manufacturer = Manufacturer;
            this.Products[updatedIndex].description = Description;
            this.Products[updatedIndex].price = Price;

            console.log("Product Updated");
        }
    }

    deleteAProduct(ProductId: number): void {
        this.Products = this.Products.filter(x => x.productId !== ProductId);
        console.log("Product Deleted");
    }

    saveAllProducts(product: Product): void {
        this.Products.push(product);
    }

    validateProduct(product: Product): boolean {

        let validate = this.Products.find(x => x.productId === product.productId);
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
    }

    operation() : void {
        this.addAProduct(101, "ABCD", "Car", "KIA", "AABB", 1257000);
        this.addAProduct(102, "YYZZ", "Car", "KIA", "YYY", 1257000);
        this.addAProduct(103, "ABCD", "Car", "KIA", "AABB", 1257000);
        this.addAProduct(104, "YYZZ", "Car", "Hyundai", "YYY", 1257000);
        this.addAProduct(105, "ABCD", "Bike", "Kawasaki", "AABB", 1257000);
        this.addAProduct(106, "YYZZ", "Bike", "Tata", "YYY", -124124);
        this.getAllProducts();
        this.updateAProduct(102, "XYZZ", "Car", "KIA", "YYY", 1257000);
        this.listProductsByCategory("Car");
        this.deleteAProduct(103);
        this.getAllProducts();
    }
}
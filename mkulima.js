class Mkulima{
    constructor(){
        this.farms = [];
        this.groceryVendor = [];
        this.product = [];
        this.addFarm = (farmId, farmName, farmer, phone, address) => {
            this.farms.push({farmId,farmName,farmer,phone,address})
        }
        this.removeFarm = (farmId) => {
            let specific = this.farms.find(item => item.farmId ===farmId);
            let farmIndex = this.farms.indexOf(specific);
            this.farms.splice(farmIndex, 1);
        }
        this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
            let selectedFarm = this.farms.find(item => item.farmId ===farmId)
            selectedFarm.farmId =newFarmId;
            selectedFarm.farmName =newFarmName;
            selectedFarm.farmer =newFarmerName;
            selectedFarm.phone =newPhone;
            selectedFarm.address =newAddress;
        }
        this.getFarm = (Id)=>{
            console.log(this.farms.find(object=>object.farmId===Id))
        }
        this.addProduct = (productId, productName, price) => {
            this.product.push({productId,productName,price})
        }
        this.removeProduct = (productId) => {
            let selected = this.product.find(item => item.productId ===productId);
            let productIndex = this.product.indexOf(selected);
            this.product.splice(productIndex, 1);
        }
        this.updateProduct = function(productId,newProductId,newProductName,newPrice){
            let selectedProduct = this.product.find(item => item.productId ===productId)
            selectedProduct.productId =newProductId;
            selectedProduct.productName = newProductName;
            selectedProduct.price = newPrice;
        }
        this.getProduct = (Id)=>{
            console.log(this.product.find(object=>object.productId===Id))
        }
        this.printProducts = ()=>{
            console.log(this.product)
        }
        this.calculateOrderCost = (productId,quantity)=>{
            let selectedProduct = this.product.find(object=>object.productId===productId);
            console.log(`${quantity} ${selectedProduct.productName} for KES ${quantity*selectedProduct.price}`);
        }
    }
 }
 

 let farm1 = new Mkulima();
 farm1.addFarm("XM678267","ShambaBora","Chichi","0700123456", "756 Chavakali");
 farm1.addFarm("WO652864","LimaSmart","Kalausi","0700012345", "245 Kisii");
 farm1.addFarm("AV864326","ShambaniTena","Chaurembo","0700001234", "784 Kabete");
 console.log(farm1.farms);
 farm1.removeFarm("WO652864");
 console.log(farm1.farms);
 farm1.updateFarm("AV864326","GH4768745","ShazFarm","Asha","07000001213","469 Kagundo");
 farm1.getFarm("GH4768745");
 farm1.addProduct("103","Milk",25);
 farm1.addProduct("453","Maize",50);
 farm1.addProduct("190","Beef",45);
 farm1.addProduct("456","Sorghum",50);
 console.log(farm1.product);
 farm1.removeProduct("453");
 console.log(farm1.product);
 farm1.updateProduct("103","143","Cheese",10);
 console.log(farm1.product);
 farm1.getProduct("143");
 farm1.printProducts();
 farm1.calculateOrderCost("456",5);
 
 
 
let kiosk = {
    
        fruit:"orange",
        quantity:3,
        fruitPriceList:{"orange":30, "mango":15, "avocado":40},
        getTotalCost:function(avtivity){
            return`${this.quantity} ${this.fruit}s for KES ${this.quantity*this.fruitPriceList[this.fruit]}.00`
        }
    
}
// var kioskCalc = new KioskCalc("orange",30)
console.log(kiosk.getTotalCost("orange", 5))

class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"orange":30, "mango":15, "avocado":40}
        this.getTotalCost = function(){
 
            if (this.fruitPriceList[this.fruit]===undefined){
                return `${this.fruit} is not available`
            }
            return`${this.quantity} ${this.fruit}s for KES ${quantity*this.fruitPriceList[fruit]*this.quantity}`
        
    }
}
}
var mykioskCalc = new KioskCalc("orange",10)
console.log(mykioskCalc.getTotalCost());
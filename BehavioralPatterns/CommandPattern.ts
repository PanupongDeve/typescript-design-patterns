interface Order {
    execute(): void;
}

class Stock {
   private name: string = "ABC";
   private quantity: number = 10;

   public buy(): void {
       console.log(`Stock [ Name: ${this.name} Quatity: ${this.quantity} ] bought`);
   }

   public sell(): void {
       console.log(`Stock [ Name: ${this.name} Quatity: ${this.quantity} ] sold`);
   }
}

class BuyStock implements Order {
    private abcStock: Stock;

    constructor(abcStock: Stock) {
        this.abcStock = abcStock;
    }

    public execute(): void {
        this.abcStock.buy();
    }
}

class SellStock implements Order {
    private abcStock: Stock;

    constructor(abcStock: Stock) {
        this.abcStock = abcStock;
    }

    public execute(): void {
        this.abcStock.sell();
    }
}

class Broker {
    private orderList: Order[] = [];

    public takeOrder(order: Order) {
        this.orderList.push(order);
    }

    public placeOrder(): void {
        this.orderList.forEach(order => {
            order.execute();
        })
    }
}

const abcStock: Stock = new Stock();

const buyStockOrder: BuyStock = new BuyStock(abcStock);
const sellStockOrder: SellStock = new SellStock(abcStock);

const broker: Broker = new Broker();
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);

broker.placeOrder();
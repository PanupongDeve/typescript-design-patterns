
interface Item {
    name(): string;
    packing(): Packing;
    price(): number;
}

interface Packing {
    pack(): string;
}


class Wrapper implements Packing {
    public pack(): string {
        return "Wrapper";
    }
}


class Bottle implements Packing {
    public pack(): string {
        return "Bottle";
    }
}


abstract class Burgur implements Item {
    public packing(): Packing {
        return new Wrapper();
    }

    public abstract price(): number;
    public abstract name(): string;
}

abstract class ColdDrink implements Item {
    public packing(): Packing {
        return new Bottle();
    }

    public abstract price(): number;
    public abstract name(): string;
}


class VegBurger extends Burgur {
    public price(): number {
        return 25.00;
    }

    public name(): string {
        return "Veg Burger";
    }
}

class ChickBurgur extends Burgur {
    public price(): number {
        return 50.00;
    }

    public name(): string {
        return "Chicken Burger";
    }
}

class Coke extends ColdDrink {
    public price(): number {
        return 30.00;
    }

    public name(): string {
        return "Coke";
    }
}


class Pepsi extends ColdDrink {
    public price(): number {
        return 35.00;
    }

    public name(): string {
        return "Pepsi";
    }
}

class Meal {
    private items: Item[] = [];

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public getCost(): number {
        let cost = 0;

        this.items.forEach(item => {
            cost += item.price()
        });

        return cost;
    }

    public showItems(): void {
        this.items.forEach(item => {
            console.log(`Item : ${item.name()}`);
            console.log(`Packing : ${item.packing().pack()}`);
            console.log(`Price : ${item.price()}`);
        });
    }
}


class MealBuilder {
    public prepareVegMeal(): Meal {
        const meal: Meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }

    public prepareNonVegMeal(): Meal {
        const meal = new Meal();
        meal.addItem(new ChickBurgur());
        meal.addItem(new Pepsi());
        return meal;
    }
}



const mealBuilder = new MealBuilder();

const vegMeal: Meal = mealBuilder.prepareVegMeal();
console.log('Veg Meal');
vegMeal.showItems();
console.log(`Total Cost: ${vegMeal.getCost()}`);



const nonVegMeal: Meal = mealBuilder.prepareNonVegMeal();
console.log('Non-veg Meal');
nonVegMeal.showItems();
console.log(`Total Cost: ${nonVegMeal.getCost()}`);
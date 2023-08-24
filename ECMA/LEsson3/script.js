const Employee = {
    name: "Vasya",

    displayInfo: function() {
        console.log(`имя сотрудника: ${this.name}`);
    }
};

const Manager = {

    department: "HR",

    displayInfo: function() {
        console.log('имя сотрудника: ' + this.name + ', он работает в отделе ' + this.department);
    },

    __proto__: Employee,
};

Employee.displayInfo();
Manager.displayInfo();



class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber
    }
    products = []
    addProduct(product) {
        this.products.push(product)
        console.log(this.products);
    }
    getTotalPrice() {
        let totalPrice = 0
        for (let key of this.products) {
            if (key.price) {
                totalPrice += key.price
            }
        }
        return totalPrice
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice())
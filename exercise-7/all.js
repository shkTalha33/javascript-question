const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

const getCustomerUnDelievered = (orders) => {
    return orders.filter((order) => {
        return order.customerId === "234" && order.delivered 
    })
}

// console.log(getCustomerUnDelievered(orders))


const addTotalPrice = (orders) => {
   return orders.map(order => ({...order, totalPrice : order.items.reduce((accum, item) => accum + item.price,0)}))
}

// console.log(addTotalPrice(orders))


const isAllOrdersBeenDelivered = (orders) => {
    return orders.every((order =>  order.delivered))
}

// console.log(isAllOrdersBeenDelivered(orders))


const IsCustomerOrder = (orders) => {
    return orders.some(order => order.customerId === "123")
}

// console.log(IsCustomerOrder(orders))


const soldProduct = (orders) => {
    return orders.reduce((acc, order) => acc + order.items.reduce((accum, item) => accum + (item.productId === "123"),0),0)
}
console.log(soldProduct(orders))
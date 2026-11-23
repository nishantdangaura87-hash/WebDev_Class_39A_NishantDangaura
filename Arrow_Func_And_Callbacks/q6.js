const calculateDelivery = (distance) => {
  if (distance <= 2) return 30;
  return 30 + (distance - 2) * 15;
};

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, callback) => {
  let charge = 0;

  if (!checkFreeDelivery(orderAmount)) {
    charge = callback(distance);
  }

  console.log("Customer: " + customer);
  console.log("Order Amount: Rs. " + orderAmount);
  console.log("Distance: " + distance + " km");
  console.log("Delivery Charge: Rs. " + charge);
};

processOrder("Shyam", 5, 800, calculateDelivery);
processOrder("Gita", 5, 1200, calculateDelivery);
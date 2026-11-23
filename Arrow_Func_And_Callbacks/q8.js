const getFoodPrice = (foodName) => {
  const menu = {
    burger: 250,
    pizza: 500,
    momo: 150,
    chowmein: 180,
  };
  const price = menu[foodName.toLowerCase()];
  return price === undefined ? 0 : price; 
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => {
  const price = callback(foodName);
  return price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, getFoodPrice);

  if (foodAmount === 0) {
    console.log("Sorry " + customerName + ", " + foodName + " is not on the menu.");
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log("Customer: " + customerName);
  console.log("Food: " + foodName);
  console.log("Quantity: " + quantity);
  console.log("Food Amount: Rs. " + foodAmount);
  console.log("Service Charge: Rs. " + serviceCharge);
  console.log("Final Amount: Rs. " + finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
generateReceipt("Suman", "Sandwich", 1, calculateOrder);
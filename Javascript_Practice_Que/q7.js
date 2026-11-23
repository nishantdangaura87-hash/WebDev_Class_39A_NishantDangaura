const fee = 25;

const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) {
    return { valid: false, message: "Amount must be greater than 0." };
  }
  if (amount % 500 !== 0) {
    return { valid: false, message: "Amount must be a multiple of 500." };
  }
  if (amount + fee > balance) {
    return { valid: false, message: "Insufficient balance." };
  }
  return { valid: true, message: "Withdrawal Successful!" };
};

const withdrawMoney = (amount, balance, callback) => {
  const result = callback(amount, balance);
  console.log("Account Balance: Rs. " + balance);
  console.log("Withdrawal Amount: Rs. " + amount);

  if (result.valid) {
    balance = balance - amount - fee;
    console.log(result.message);
    console.log("Transaction Fee: Rs. " + fee);
  } else {
    console.log("Error: " + result.message);
  }

  console.log("Remaining Balance: Rs. " + balance);
  return balance;
};

withdrawMoney(3000, 10000, validateWithdrawal);
withdrawMoney(3200, 10000, validateWithdrawal);
withdrawMoney(20000, 10000, validateWithdrawal);
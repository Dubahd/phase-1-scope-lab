// index.js

// 1. Global variable customerName
var customerName = 'bob';

// 2. Function that uppercases customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that sets bestCustomer in global scope
function setBestCustomer() {
  // Don't use var/let/const to create a global variable
  bestCustomer = 'not bob';
}

// 4. Function that overwrites bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Constant leastFavoriteCustomer
const leastFavoriteCustomer = 'initial customer';

// 6. Function that tries to reassign leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw an error
}

// Export everything so tests can access them
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer
  };
}
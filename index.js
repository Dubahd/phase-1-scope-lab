// 1. Global variable customerName
var customerName = 'bob';

// 2. Function that uppercases customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that sets bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // declared in global scope (without var/let/const)
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

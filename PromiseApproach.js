function makeCoffee() {
  getCoffee().then((coffee) => {
    console.log(coffee);
  });
}

makeCoffee();

/* Output:
Coffee didapatkan!
*/

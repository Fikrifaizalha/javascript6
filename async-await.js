async function makeCoffee() {
  const coffee = await getCoffee();
  console.log(coffee);
}

makeCoffee();

/* Output:
Coffee didapatkan!
*/

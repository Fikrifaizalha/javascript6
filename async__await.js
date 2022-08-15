async function reserveACoffee(type, miligrams) {
  try {
    const seeds = await getSeeds(type, miligrams);
    const coffee = await makeCoffee(seeds);
    const result = await servingToTable(coffee);
    console.log(result);
  } catch (rejectionReason) {
    console.log(rejectionReason);
  }
}

reserveACoffee("liberica", 80);

/* Output:
Pesanan kopi sudah selesai!
*/

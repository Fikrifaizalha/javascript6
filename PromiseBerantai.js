function reserveACoffee(type, miligrams) {
  getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then((resolvedValue) => {
      console.log(resolvedValue);
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
    });
}

reserveACoffee("liberica", 80);

/* Output:
Pesanan kopi sudah selesai!
*/

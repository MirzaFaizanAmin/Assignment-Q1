function caluDisAmount (productPrice: number, discountPercentage: number): number | string {
    if (discountPercentage >= 50) {
      return "Invalid discount percentage";
    }
  
    let discountAmount = productPrice * (discountPercentage / 100);
    let finalPrice = productPrice - discountAmount;
  
    console.log(`Original price: $${productPrice.toFixed(2)}`);
    console.log(`Discount percentage: ${discountPercentage}%`);
    console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
    console.log(`Final price: $${finalPrice.toFixed(2)}`);
  
    return discountAmount;
  }

caluDisAmount(100, 20);
caluDisAmount(50, 75);
caluDisAmount(80.5, 35);

/*

Original price: $100.00
Discount percentage: 20%
Discount amount: $20.00
Final price: $80.00

Invalid discount percentage

Original price: $80.50
Discount percentage: 35%
Discount amount: $28.18
Final price: $52.32
*/
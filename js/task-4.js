function getShippingCost(country) {
  switch (country) {
    case 'China':
      const priceChina = 100;
      const deliveryMessageChina = `Shipping to ${country} will coast ${priceChina} credits`;
      return deliveryMessageChina;
    case 'Chile':
      const priceChile = 250;
      const deliveryMessageChile = `Shipping to ${country} will coast ${priceChile} credits`;
      return deliveryMessageChile;
    case 'Australia':
      const priceAustralia = 170;
      const deliveryMessageAustralia = `Shipping to ${country} will coast ${priceAustralia} credits`;
      return deliveryMessageAustralia;
    case 'Jamaica':
      const priceJamaica = 120;
      const deliveryMessageJamaica = `Shipping to ${country} will coast ${priceJamaica} credits`;
      return deliveryMessageJamaica;
    default:
      const defaultMessage = 'Sorry, there is no delivery to your country';
      return defaultMessage;
  }
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

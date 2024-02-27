import { Detail } from "@raycast/api";

export default function Command() {
  url = "https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP"
  
    .then(response => response.json())
    .then(data => {
      const firstElement = data[0]; // Extract the first element from the array
      const lastPrice = parseFloat(firstElement.lastPrice).toFixed(1);
      console.log(lastPrice);
    })
    .catch(error => {
      console.error("Error:", error);
    });

  return <Detail markdown="### Last Price" />;
}
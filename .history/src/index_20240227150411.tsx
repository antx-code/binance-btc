import { Detail } from "@raycast/api";

export default function Command() {
  return <Detail markdown="### Last Price" />;
}
"""

import requests

r = requests.get(
    "https://dapi.binance.com/d.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP"
)

print(r.json())

"""
[
    {
        "symbol": "BTCUSD_PERP",
        "priceChange": "0.00000000",
        "priceChangePercent": "0.0000",
        "weightedAvgPrice": "0.00000000",

export default function Command() {
  fetch("https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP")
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

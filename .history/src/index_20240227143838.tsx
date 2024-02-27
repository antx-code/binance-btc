import { Detail } from "@raycast/api";

export default function Command() {
  fetch("https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP")
    .then(response => response.json()[0])
    .then(data => {
      const lastPrice = parseFloat(data.lastPrice).toFixed(1);
      console.log(lastPrice);
    })
    .catch(error => {
      console.error("Error:", error);
    });

  return <Detail markdown="### Last Price" />;
}

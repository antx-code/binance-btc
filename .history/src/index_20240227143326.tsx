import { Detail } from "@raycast/api";

export default function Command() {
  fetch("https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP")
    .then(response => response.json())
    .then(data => {
      const lastPrice = parseFloat(data【】0.lastPrice).toFixed(1);
      console.log(lastPrice);
    })
    .catch(error => {
      console.error("Error:", error);
    });

  return <Detail markdown="# Hello World" />;
}

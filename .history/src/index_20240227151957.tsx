import { List, Icon } from "@raycast/api";
import fetch from "node-fetch";

export default function Command() {
  const url = "https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const firstElement = data[0]; // Extract the first element from the array
      lastPrice = parseFloat(firstElement.lastPrice).toFixed(1);
      console.log(lastPrice);
    })
    .catch(error => {
      console.error("Error:", error);
    });

  return (
    <List.Item
      id="btc"
      title="BTC"
      icon={"₿"}
      accessories={[{ text: lastPrice ? `${lastPrice} %` : "Loading…" }]}
      detail={<PowerMonitorDetail batteryLevel={batteryLevel || ""} />}
    />
  );
}

import { List, Icon } from "@raycast/api";
import fetch from "node-fetch";

export default function Command() {
  const url = "https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const firstElement = data[0]; // Extract the first element from the array
      const lastPrice = parseFloat(firstElement.lastPrice).toFixed(1);
      console.log(lastPrice);
      return <Detail markdown={`Last Price: ${lastPrice}`} />;
    })
    .catch(error => {
      console.error("Error:", error);
      return <Detail markdown={`Error: ${error}`} />;
    });

    return (
      <List.Item
        id="power"
        title="Power"
        icon={Icon.Plug}
        accessories={[{ text: batteryLevel ? `${batteryLevel} %` : "Loading…" }]}
        detail={<PowerMonitorDetail batteryLevel={batteryLevel || ""} />}
        actions={<Actions />}
      />
    );
}

import { List, Icon } from "@raycast/api";
import fetch from "node-fetch";
import { useState, useEffect } from "react";

export default function Command() {
  const [lastPrice, setLastPrice] = useState<string>("");

  useEffect(() => {
    const url = "https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const firstElement = data[0]; // Extract the first element from the array
        const price = parseFloat(firstElement.lastPrice).toFixed(1);
        setLastPrice(price);
        console.log(price);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <List>
      <List.Item icon={Icon.Stars} title="Augustiner Helles" subtitle="0,5 Liter" accessories={[{ text: "Germany" }]} />
    </List>
  );
}

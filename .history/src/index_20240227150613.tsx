import { Detail } from "@raycast/api";

export default function Command() {
  const url = "https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP"
  fetch(url)
    
    .catch(error => {
      console.error("Error:", error);
    });

  return <Detail markdown="### Last Price" />;
}

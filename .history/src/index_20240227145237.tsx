import { Detail } from "@raycast/api";

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
import { ActionPanel, Form, Action } from "@raycast/api";
     * import { useState } from "react";
     *
     * export default function Command() {
     *   const [name, setName] = useState<string>("");
     *
     *   return (
     *     <Form
     *       searchBarAccessory={
     *         <Form.LinkAccessory
     *           target="https://developers.raycast.com/api-reference/user-interface/form"
     *           text="Open Documentation"
     *         />
     *       }
     *       actions={
     *         <ActionPanel>
     *           <Action.SubmitForm title="Submit Name" onSubmit={(values) => console.log(values)} />
     *         </ActionPanel>
     *       }
     *     >
     *       <Form.TextField id="name" value={name} onChange={setName} />
     *     </Form>
     *   );
     * }
import { ActionPanel, Form, Action } from "@raycast/api";
import { useState } from "react";

export default function Command() {
const [name, setName] = useState<string>("");

return (
     <Form
     searchBarAccessory={
     <Form.LinkAccessory
     target="https://dapi.binance.com/dapi/v1/ticker/24hr?symbol=BTCUSD_PERP"
     text="Open Documentation"
     />
     }
     actions={
     *         <ActionPanel>
     *           <Action.SubmitForm title="Submit Name" onSubmit={(values) => console.log(values)} />
     *         </ActionPanel>
     *       }
     *     >
     *       <Form.TextField id="name" value={name} onChange={setName} />
     *     </Form>
);
}
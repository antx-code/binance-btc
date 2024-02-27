import { ActionPanel, Form, Action } from "@raycast/api";
import { useState } from "react";

export default function Command() {
const [name, setName] = useState<string>("");

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
);
}
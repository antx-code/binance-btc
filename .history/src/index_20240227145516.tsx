import { ActionPanel, Form, Action } from "@raycast/api";
import { useState } from "react";

export default function Command() {
const [name, setName] = useState<string>("");

return (

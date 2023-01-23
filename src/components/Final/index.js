import React from "react";
import { useState } from "react";
import FormYup from "../FormYup";
import ValorTotal from "../ValorTotal";

export default function Final() {
  const [resultado, setResultado] = useState({});
  return (
    <div>
        <FormYup setResponse={setResultado}> </FormYup>
        <ValorTotal response={resultado} />
    </div>
  );
}
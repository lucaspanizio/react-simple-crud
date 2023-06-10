import Client from "@/models/Client";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "./Button";

interface FormProps {
  client: Client;
  clickUpdateOrSave?: (client: Client) => void;
  clickCancel?: () => void;
}

export const Form = (props: FormProps) => {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id ? <Input text="Código" value={id} readOnly></Input> : false}
      <Input text="Nome" value={name} onChange={setName}></Input>
      <Input text="Idade" type="number" value={age} onChange={setAge}></Input>
      <div className="flex justify-end mt-3 gap-2">
        <Button
          color="blue"
          text={id ? "Alterar" : "Salvar"}
          onClick={() => props.clickUpdateOrSave?.(new Client(name, +age, id))}
        />
        <Button text="Cancelar" onClick={props.clickCancel} />
      </div>
    </div>
  );
};

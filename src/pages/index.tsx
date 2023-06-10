import Layout from "@/components/Layout";
import { Form } from "@/components/Form";
import { Table } from "@/components/Table";
import { Button } from "@/components/Button";
import { useState } from "react";
import Client from "@/model/Client";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.default());
  const [visible, setVisible] = useState<"form" | "table">("table");

  const clientsMock = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 45, "2"),
    new Client("Carlos", 23, "3"),
    new Client("Pedro", 54, "4"),
  ];

  function select(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function remove(client: Client) {
    console.log(client);
    setVisible("table");
  }

  function save(client: Client) {
    console.log(client);
    setVisible("table");
  }

  function newClient() {
    setClient(Client.default());
    setVisible("form");
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {visible === "table" ? (
          <>
            <div className="flex justify-end mb-3">
              <Button text="Novo Cliente" color="green" onClick={newClient} />
            </div>
            <Table clients={clientsMock} select={select} remove={remove} />
          </>
        ) : (
          <Form
            client={client}
            clickUpdateOrSave={save}
            clickCancel={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}

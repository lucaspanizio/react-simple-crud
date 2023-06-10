import Layout from "@/components/Layout";
import { Form } from "@/components/Form";
import { Table } from "@/components/Table";
import { Button } from "@/components/Button";
import { useClients } from "@/hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    select,
    save,
    remove,
    newClient,
    showTable,
    tableVisible,
  } = useClients();

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end mb-3">
              <Button text="Novo Cliente" color="green" onClick={newClient} />
            </div>
            <Table clients={clients} select={select} remove={remove} />
          </>
        ) : (
          <Form
            client={client}
            clickUpdateOrSave={save}
            clickCancel={showTable}
          />
        )}
      </Layout>
    </div>
  );
}

import ClientRepository from "@/firebase/db/ClientRepository";
import IClient from "@/interfaces/Client";
import Client from "@/models/Client";
import useFormOrTable from "./useFormOrTable";
import { useEffect, useState } from "react";

export const useClients = () => {
  const repo: IClient = new ClientRepository();

  const { tableVisible, showTable, showForm } = useFormOrTable();

  const [client, setClient] = useState<Client>(Client.default());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function select(client: Client) {
    setClient(client);
    showForm();
  }

  async function remove(client: Client) {
    await repo.remove(client);
    getAll();
  }

  async function save(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Client.default());
    showForm();
  }

  return {
    client,
    clients,
    getAll,
    select,
    save,
    remove, 
    newClient,
    showTable,
    showForm,
    tableVisible
  }
}
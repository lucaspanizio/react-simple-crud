import Client from "@/models/Client"

export default interface IClient {
  save(client: Client): Promise<Client>
  remove(client: Client): Promise<void>
  getAll(): Promise<Client[]>
}
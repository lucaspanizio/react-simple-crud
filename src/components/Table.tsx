import Client from "@/model/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  select?: (client: Client) => void;
  remove?: (client: Client) => void;
}

export const Table = (props: TableProps) => {
  return (
    <>
      <table className={`w-full rounded-xl overflow-hidden`}>
        <thead
          className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800 `}
        >
          <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            <th className="ext-left p-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.clients?.map((client, i) => {
            return (
              <tr
                key={client.id}
                className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
              >
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.name}</td>
                <td className="text-left p-4">{client.age}</td>
                <td className="flex justify-center">
                  <button
                    onClick={() => props.select?.(client)}
                    className={`flex justify-center items-center rounded-full
                    text-green-600  hover:bg-purple-50 p-2 m-1`}
                  >
                    {EditIcon}
                  </button>
                  <button
                    onClick={() => props.remove?.(client)}
                    className={`flex justify-center items-center rounded-full
                    text-red-500  hover:bg-purple-50 p-2 m-1`}
                  >
                    {TrashIcon}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

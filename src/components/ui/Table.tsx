import { cartStructure } from "../../redux/features/cart/cartSlice";

type ItemArray<T> = {
  item: Array<T>;
};
export const Table = ({ item }: ItemArray<cartStructure>) => {
  return (
    <div className="relative overflow-x-auto border rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {item.map((it) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {it.name}
                </th>
                <td className="px-6 py-4">{it.customerQty}</td>
                <td className="px-6 py-4">{it.purchasePrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

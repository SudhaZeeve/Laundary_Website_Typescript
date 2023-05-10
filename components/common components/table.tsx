/* eslint-disable react/jsx-key */

import { laundaryObj } from "@/pages/prices";
import { ButtonCommon } from "./input";

/* eslint-disable react/no-unescaped-entities */
interface commonTable {
    tableBodyData: laundaryObj[],
    data: Array<string | number>,
    qty: boolean,
    updateItem: (prop: string, event: React.ChangeEvent<HTMLSelectElement>, index: number) => void,
    onClickAdd: () => void;
}

const CommonTable = (props: commonTable) => {
    const { data, tableBodyData, qty, updateItem, onClickAdd } = props;
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {data.map((item, key) => {
                            return (
                                <>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center" key={key}>
                                        {item}
                                    </th>

                                </>
                            );
                        })}
                        {qty &&<>
                            <th scope="col" className="px-20 py-3 whitespace-nowrap text-center" key="qty">OTY</th>
                            <th scope="col" className="px-20 py-3 whitespace-nowrap text-center" key="Checkout">Checkout</th>
                        </> }
                    </tr>
                </thead>
                <tbody>
                    {tableBodyData.map((index, i) => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
                                    {index.Cloths}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
                                    ${index.Price}
                                </td>
                                {qty &&<> <td className="px-6 py-4 px-16">
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => updateItem(index.Cloths,e,index.Price)}>
                                        <option value={0} key={0}>0</option>
                                        <option value={1} key={1}>1</option>
                                        <option value={2} key={2}>2</option>
                                        <option value={3} key={3}>3</option>
                                        <option value={4} key={4}>4</option>
                                        <option value={5} key={5}>5</option>
                                    </select>
                                </td>
                                <td>
                                    <ButtonCommon Name="Add to Cart" onClick={() => onClickAdd()}/>
                                </td>
                                </>}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CommonTable;


import { Button, Input } from "@/components/common components/input";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsCheck2Circle } from "react-icons/bs"
import { CartObj } from "../prices";
import Router from 'next/router'
import Link from "next/link";

interface TableBodyData {
    TableBodyData: CartObj[]
}

export default function Checkout(props: TableBodyData) {

    const { TableBodyData } = props;
    const [modal, setModal] = useState(false);

    const fetchCart = async () => {
        await fetch('http://localhost:4000/Cart', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const submitData = async () => {
        await TableBodyData.map((key => fetch('http://localhost:4000/Cart/' + key.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                setModal(true);
                fetchCart();
                // Router.reload()
            }
        )
        ))
    }

    const dateRow = async (id: number) => {
        await fetch('http://localhost:4000/Cart/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            (res) => {
                fetchCart();
                Router.reload()
            }
        )
    }

    return (
        <>
            <div className="container bg-white py-10 sm:py-10 text-gray-800">
                <div className="mx-auto text-start px-12">
                    <Link href="/prices"><button className={`bg-yellow-400 hover:bg-yellow-400 focus:outline-none px-10 py-2 rounded-lg text-gray-800 `} >
                        Prices
                    </button></Link>
                </div>
                <div className="flex px-12 py-10 gap-12">

                    <div className="mx-auto items-center justify-center w-3/5 border rounded-md p-3">

                        <h5 className="text-gray-900 font-bold text-xl mb-2">Shopping Cart</h5>
                        {TableBodyData.length !== 0 ? <div className="flex w-6/6 justify-between py-2">
                            {Object.keys(TableBodyData[0]).map((key: any | undefined, id: any | undefined) => {
                                return (
                                    <div className="w-1/6" key={id}>
                                        <p className="text-gray-900 font-semibold text-xl">{key !== "id" && key}</p>
                                    </div>
                                );
                            })}
                        </div> : <p className="text-xl text-center mt-12">No Cart Data Found</p>}

                        {TableBodyData && TableBodyData.map((key: any, id: any) => {
                            return (
                                <div className="flex w-6/6 justify-between items-center border rounded-md my-2 shadow py-4 px-3" key={id}>
                                    <div className="w-1/6">
                                        <p className="text-sm text-gray-600 font-normal" >{key.Name}</p>
                                    </div>
                                    <div className="w-1/6">
                                        <p className="text-sm text-gray-600 font-normal" >{key.Quantity} </p>
                                    </div>
                                    <div className="w-1/6">
                                        <p className="text-sm text-gray-600 font-normal">{key.Total} <b>Rs</b></p>
                                    </div>
                                    <div className="w-1/6">
                                        <p className="text-center cursor-pointer" onClick={() => dateRow(key.id)}><GrFormClose /> </p>
                                    </div>
                                </div>
                            );
                        })}
                        {TableBodyData.length !== 0 && <p className="text-end text-gray-800 font-semibold">Total Price :{TableBodyData.reduce((a, b) => { return a + b.Total; }, 0)} </p>}
                    </div>
                    <div className="mx-auto items-center justify-center w-2/5">
                        <div className="bg-gray-50 shadow border border-gray-200 rounded-md ">
                            <div className="p-5 text-gray-600">
                                <h5 className="text-gray-900 font-bold text-xl mb-2">Payment Info</h5>
                                <p className="mb-3">UPI Payment</p>
                                <Input LabelName="UPI ID"
                                    Type="text"
                                    Id="UPIID"
                                    Placeholder="UPI ID"
                                    Value="SudhaKamana@zeeve"
                                    onChange={() => { }} />

                                <div className='text-start mt-3'>
                                    {TableBodyData.length !== 0 && <button onClick={() => submitData()} className="bg-gray-800 text-md text-gray-50 py-2 px-10 rounded-md">Submit </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <div className=" text-gray-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
                style={{ background: 'rgba(0,0,0,.7)' }}>
                <div
                    className=" modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold"></p>
                            <div className="modal-close cursor-pointer z-50">
                                <button onClick={() => setModal(false)}><GrFormClose className="text-2xl" /> </button>
                            </div>
                        </div>
                        <div className="my-5 text-center">
                            <BsCheck2Circle className="text-6xl text-green-700 text-center mx-auto" />
                            <p>Your Payment has been completed </p>
                        </div>
                        <div className="flex justify-center pt-2">
                            <Link href="/">
                                <button onClick={() => setModal(false)} className="focus:outline-none px-10 bg-teal-700 py-2 rounded-lg text-white hover:bg-teal-600">OK</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    );
}

// export const tbodyData = [
//     {
//         Vproduct: "Net Fabric",
//         id: "1",
//         Vweight: "2",
//         Vtotalprices: "250"
//     },
//     {
//         Vproduct: "Cotton Fabric",
//         id: "2",
//         Vweight: "1.5",
//         Vtotalprices: "250"
//     },
// ];

export async function getStaticProps() {

    const pricebody = await fetch('http://localhost:4000/Cart');

    const tableBodyData = await pricebody.json();


    return {
        props: {
            TableBodyData: tableBodyData
        },
        revalidate: 60,
    }
}
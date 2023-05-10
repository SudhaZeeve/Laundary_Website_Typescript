import { useState } from "react";
import CommonTable from "../../components/common components/table";
import Link from "next/link";
import { ButtonCommon } from "@/components/common components/input";

export interface laundaryObj {
    Cloths: string,
    Price: number
}

export interface CartObj { 
        Mame: string,
        Quantity: string,
        Total: number,
        id: number
}

interface TableBodyData {
    TableBodyData:{ 
        ironLaundary:laundaryObj[],
        dryCleaning: laundaryObj[]
    }
    
}

interface setQryValobj {
    [key: string]: any
}


const Prices = (props: TableBodyData) => {
    const { TableBodyData } = props;
    const [qtyVal, setQtyVal] = useState<setQryValobj>({});
    const [cartData, setCartData] = useState<CartObj[]>([]);

    const updateItem = (prop:string, event: React.ChangeEvent<HTMLSelectElement>, price:number) => {
        if( event.target.value !== "0" ){
        const updated = { Name:prop ,Quantity: event.target.value, Total:  Number(event.target.value) * price }
        setQtyVal(updated);
        }
    }

    const fetchCartData = async () => {
        const cart = await fetch('http://localhost:4000/Cart');
        const cartData = await cart.json()
        setCartData(cartData)
    }

    const createList =async () => {
       if(qtyVal.Quantity !== undefined){
       await fetch("http://localhost:4000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(qtyVal)
        }).then(
          () => fetchCartData()
        );
       }
      }
    return (
        <div className="container bg-white py-10 sm:py-10 mb-8">
            <div className="mx-auto mb-8 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Laundromat Prices</h2>
            </div>

            <div className="mx-auto ">
                <div className="w-10/12 mx-auto items-center justify-center">
                    <h4 className="text-gray-800 mb-3 text-lg">Wash and Iron Laundry Price List</h4>
                    <CommonTable data={Object.keys(TableBodyData.ironLaundary[0])} tableBodyData={TableBodyData.ironLaundary} qty updateItem={updateItem} key="tab1" onClickAdd={createList}/> 
                </div>
                <div className="w-10/12 mx-auto items-center justify-center mt-6 ">
                    <h4 className="text-gray-800 mb-3 text-lg">Dry Clean Price List</h4>
                    <CommonTable data={Object.keys(TableBodyData.dryCleaning[0])} tableBodyData={TableBodyData.dryCleaning} qty updateItem={updateItem} key="tab2" onClickAdd={createList}/>
                </div>
            </div>
            <div className="mx-auto mb-8 mt-4 text-center">
                <Link href="/checkout"><button className={` ${cartData.length !==0 ?'bg-yellow-400 hover:bg-yellow-400 ': 'bg-gray-500  text-white' } focus:outline-none px-10 py-2 rounded-lg text-gray-800 `} >
            {`Checkout :  ${cartData.length}`}
        </button></Link>
            </div>

        </div>
    )
}

export default Prices;


export async function getStaticProps() {

    const pricebody = await fetch('http://localhost:4000/TableBodyData');
    
    const tableBodyData = await pricebody.json();
  

    return {
        props: {
            TableBodyData: tableBodyData
        },
        revalidate: 60,
    }
}
import Link from "next/link";
import { useState } from "react";
import { MdOutlineLocalLaundryService, MdOutlineLocationOn } from 'react-icons/md'
import { GrFormClose } from "react-icons/gr";
import { BsCheck2Circle } from "react-icons/bs"
import { Input } from "@/components/common components/input";

export default function Home() {

  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="container text-center my-20">
        <h4 className="text-xl mb-5">MODERN & UPSCALE LAUNDROMAT</h4>
        <h1 className="text-6xl">A Better Place to do Your Laundry</h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button onClick={() => setModal(true)} className="flex items-center gap-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"> <MdOutlineLocalLaundryService className='text-2xl' /> Book Service</button>
          <Link href="/contact" className="flex items-center gap-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white uppercase"> <MdOutlineLocationOn className='text-2xl' /> View Location</Link>
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
            <div className="mb-5">
              <Input LabelName="Username"
                Type="text"
                Id="Username"
                Placeholder="Username"
                Value="Sudha kamana"
                onChange={() => { }} />
              <Input LabelName="Mobile Number"
                Type="number"
                Id="MobileNumber"
                Placeholder="Mobile Number"
                Value="1234567890"
                onChange={() => { }} />
              <Input LabelName="Date"
                Type="date"
                Id="date"
                Placeholder="Date"
                Value=""
                onChange={() => { }} />
              <Input LabelName="Time"
                Type="time"
                Id="Time"
                Placeholder="Time"
                Value=""
                onChange={() => { }} />
            </div>
            <div className="flex justify-center py-2 gap-4">
              <button onClick={() => setModal(false)}
                className="focus:outline-none px-10 bg-teal-700 py-2 rounded-lg text-white hover:bg-teal-600">Confirm</button>
              <button onClick={() => setModal(false)}
                className="focus:outline-none px-10 bg-gray-700 py-2 rounded-lg text-white hover:bg-gray-600">Cancel</button>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

import { AiOutlineWifi, AiOutlineDesktop, AiOutlineUser } from "react-icons/ai"
import { BsSnow } from "react-icons/bs"
import { MdEventSeat, MdTableRestaurant } from "react-icons/md"
import { GiCharging, GiWashingMachine, GiKidSlide, GiCctvCamera } from "react-icons/gi"

export default function Amenities(){
    return(
        <>
           <div className="container bg-white py-10 sm:py-10">
                <div className="mx-auto mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">We are on a mission to change the laundromat experience</h2>
                    <h4 className="text-gray-900" >Here&apos;s what we offer:</h4>
                </div>
                <div className="w-5/6 mx-auto">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-gray-700">
                        {AmentiesData.map((key) => {
                            return (
                                <div className="flex max-w-xl flex-col items-center justify-between p-4 " key={key.Name} >
                                    <h3 className="text-3xl mb-2">{key.Icon}</h3>
                                    <h2 className="text-center">{key.Name}</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export const AmentiesData = [
    {
        Icon: <AiOutlineWifi />,
        Name: 'FREE WIFI'
    },
    {
        Icon: <BsSnow />,
        Name: 'AIR CONDITIONING'
    },
    {
        Icon: <MdEventSeat />,
        Name: 'COMFORTABLE SEATING'
    },
    {
        Icon: <MdTableRestaurant />,
        Name: 'CAFE TABLE'
    },
    {
        Icon: <GiCharging />,
        Name: 'CHARGING STATIONS'
    },
    {
        Icon: <AiOutlineDesktop />,
        Name: '5 HD 55" TVS'
    },
    {
        Icon: <GiWashingMachine />,
        Name: '35 HI TECH MACHINES'
    },
    {
        Icon: <GiKidSlide />,
        Name: 'KIDS ZONE'
    },
    {
        Icon: <AiOutlineUser />,
        Name: 'ON-SITE ATTENDANT'
    },
    {
        Icon: <GiCctvCamera />,
        Name: 'SECURITY CAMERAS'
    },
];
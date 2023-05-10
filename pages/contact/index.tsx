import { MdOutlineLocationOn, MdEmail, MdMarkEmailUnread } from 'react-icons/md';
import { BsFillBuildingFill, BsFacebook, BsInstagram } from "react-icons/bs"
import {Button, Input, Textarea} from '@/components/common components/input';
import Rating from '@/components/common components/rating';

const Contact = () => {
    return (
        <>
            <div className="container bg-white py-10 sm:py-10 mb-8">
                <div className="mx-auto mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">Contact</h2>
                </div>

                <div className="w-5/6 mx-auto">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 text-gray-700">
                        <div className="flex max-w-xl flex-col items-start justify-center">
                            <div className='flex gap-3 mb-3'><BsFacebook className='text-2xl text-blue-600' /> <BsInstagram className='text-2xl text-red-400' /> </div>
                            {contactdata.map((key) => {
                                return (
                                    <div className='my-3' key={key.Name}>
                                        <h5 className='flex mb-2 gap-2'>{key.Icon} {key.Name}</h5>
                                        <p className='text-md'>{key.Description}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex max-w-xl flex-col items-start justify-center border rounded-lg py-4">
                            <div className='w-5/6 mx-auto'>
                                <Input LabelName="Username"
                                    Type="text"
                                    Id="Username"
                                    Placeholder="Username"
                                    Value="Sudha kamana"
                                    onChange={() => { }} />
                                <Textarea LabelName="Description"
                                    Type="text"
                                    Id="Description"
                                    Placeholder="Description"
                                    Value="Description.........."
                                    onChange={() => { }}/>
                                    
                                    <div className='text-center mt-3'>
                                     <div className='flex gap-4 items-center mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Rating: <Rating rated={0} /> </div>
                                        <Button />
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-6/6 mx-auto mt-12 flex justify-center">
                    <div className=" ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.546268481749!2d-82.44306612453853!3d34.817355472878525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8858308faec0ae91%3A0x6958e29fe7a3f400!2s2600%20Anderson%20Rd%2C%20Greenville%2C%20SC%2029611%2C%20USA!5e0!3m2!1sen!2sin!4v1682661759060!5m2!1sen!2sin" width='1050' height="300" loading="lazy" className=''></iframe>
                    </div>
                </div>

            </div>

        </>
    );
}
export default Contact;

export const contactdata = [
    {
        Name: "LOCATION",
        Icon: <MdOutlineLocationOn className='text-2xl' />,
        Description: "2600 Anderson Rd Greenville, SC 29611"
    },
    {
        Name: "HOURS",
        Icon: <BsFillBuildingFill className='text-2xl' />,
        Description: "Open every day from 8am-10pm (Last wash at 8pm)"
    },
    {
        Name: "EMAIL",
        Icon: <MdEmail className='text-2xl' />,
        Description: "info@upstatelaundromat.com"
    },
];
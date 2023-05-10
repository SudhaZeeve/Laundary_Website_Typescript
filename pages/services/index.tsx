import Image from "next/image";
import machine from "../../images/self-serve-icon.png";
import fold from "../../images/folded-shirt-icon.png";
import discounts from "../../images/loyalty-card-icon.png";
import { MdOutlineLocalLaundryService } from 'react-icons/md'
import Link from "next/link";

interface serviceObj  {
    Image: string,
    Heading: string,
    Description: string
}

interface serviceProps  {
Servicedata : serviceObj[]
}

function Services(props:serviceProps) {
    const { Servicedata } = props;

    const ImageLoader = (imaName:string) => {
        switch (imaName) {
            case 'machine':
                return machine;
            case 'fold':
                return fold;
            case 'discounts':
                return discounts
            default:
                return '';
        }
    }
    return (
        <>
            <div className="container bg-white p-10 sm:p-10">
                <div className="mx-auto mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {Servicedata.map((key:serviceObj) => {
                        return (
                            <article className="flex max-w-xl flex-col items-start justify-between p-4" key={key.Heading}>
                                <Image 
                                    src={ImageLoader(key.Image)}
                                    alt="Picture of the author"
                                    width={150}
                                    height={150}
                                    priority
                                    blurDataURL={key.Image}
                                    className="mx-auto" />
                                <div className="group relative text-center">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        {key.Heading}
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600">{key.Description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className="flex mt-3 items-center justify-center">
                    <Link href="/prices" className="flex items-center gap-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"> <MdOutlineLocalLaundryService className="text-2xl" /> Check 
                    prices</Link>
                </div>
            </div>

        </>
    );
}
export default Services;

export async function getStaticProps() {
    const product = await fetch('http://localhost:4000/Servicedata');
    const data = await product.json()
    return {
        props: {
            Servicedata: data
        }
    }
}
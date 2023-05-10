import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react";
import Rating from "@/components/common components/rating";

interface testimonialsDataObj  {
    id: number,
    Name: string,
    Description: string,
    Date: string,
    rated: number
}

interface testimonialsData  {
    TestimonialsData : testimonialsDataObj[]
}

const Testimonials = (props:testimonialsData) => {
    const { TestimonialsData } = props;
    const [after, setAfter] = useState(0);
    const previous = () => {
        setAfter(after - 3)
    };
    const next = () => {
        setAfter(after + 3)
    }
    
    return (
        <>
            <div className="container bg-white py-10 sm:py-10">
                <div className="mx-auto mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">What People Are Saying</h2>
                </div>
                <div className="w-5/6 mx-auto my-12 text-gray-900">
                    <div className="flex gap-3 items-center">
                        <div className={`w-auto text-center p-3 border rounded-full drop-shadow  ${after === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            <MdOutlineArrowBackIosNew onClick={() => after !== 0 && previous()} />
                        </div>
                        <div className="w-full flex gap-4">

                            {Object.values(TestimonialsData).slice(after, after + 3).map((key) => (
                                <div className="border border-gray-200 rounded drop-shadow p-4 w-4/12 text-center" key={key.Name}>
                                    <h4 className="mb-2 font-semibold flex justify-between">{key.Name}<FcGoogle /></h4>
                                    <p className="text-sm text-justify">{key.Description}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <Rating rated={key.rated} /><span>{key.Date}</span></div>
                                </div>
                            ))}
                        </div>
                        <div className={`w-auto text-center p-3 border rounded-full drop-shadow ${(after + 3 > TestimonialsData.length - 1) ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            <MdOutlineArrowForwardIos onClick={() => (after + 3 < TestimonialsData.length - 1) && next()} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Testimonials;


export async function getStaticProps() {
    const product = await fetch('http://localhost:4000/TestimonialsData');
    const data = await product.json()
    return {
        props: {
            TestimonialsData: data
        },
        revalidate: 60,
    }
}

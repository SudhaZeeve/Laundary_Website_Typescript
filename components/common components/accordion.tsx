/* eslint-disable react-hooks/rules-of-hooks */
// import { AnimatePresence } from "framer-motion";
import { accordionDataOneArr } from "@/pages/faq";
import { useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = (props: accordionDataOneArr) => {
    const { accordionDataOne } = props;

    const [activeIndex, setActiveIndex] = useState('');

    const contentRefs =  useRef<(HTMLDivElement | null)[]>([]);    
    const handleClick = (i:string) => {
        setActiveIndex(activeIndex === i ? "" : i);
    }
    return (
        <>
            {accordionDataOne.map((key, i) => {
                return (
                    <>
                        <div onClick={() => handleClick(key.Heading)} ref={(ref) => contentRefs.current[i] = ref} className=' w-full accordion ' key={i}>
                            <div className='cursor-pointer my-1'>
                                <span className="font-semibold text-gray-500 flex flex-row justify-between items-center">
                                    <p>{key.Heading}</p>

                                    {
                                        (activeIndex !== "")
                                            ? <MdKeyboardArrowDown />
                                            : <MdKeyboardArrowUp />
                                    }

                                </span>
                            </div>
                            {(activeIndex === key.Heading) && (
                                <div className="text-gray-500 text-md p-2">
                                    {/* <AnimatePresence mode="wait"> */}
                                    {key.Description}
                                    {/* </AnimatePresence>  */}
                                </div>
                            )}
                        </div>

                    </>
                );
            })}
        </>

    );
}
export default Accordion;
import Accordion from "@/components/common components/accordion"

interface accordionDataOneObj {
    id: number,
    Heading: string,
    Description: string
}

export interface accordionDataOneArr {
    accordionDataOne: accordionDataOneObj[]
}

function FAQ(props: accordionDataOneArr) {
    const {accordionDataOne} = props;
    return (
        <>
            <div className="container mx-auto bg-white p-16 rounded">
                <div className="mx-auto mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">Frequently Asked Questions</h2>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex max-w-xl flex-col items-start justify-between gap-y-5">
                        <Accordion accordionDataOne={accordionDataOne} />
                    </div>
                    <div className="flex max-w-xl flex-col items-start justify-between ">
                        <Accordion accordionDataOne={accordionDataOne} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default FAQ;

export async function getServerSideProps() {
    const product = await fetch('http://localhost:4000/accordionDataOne');
    const data = await product.json()
    return {
        props: {
            accordionDataOne: data
        }
    }
}
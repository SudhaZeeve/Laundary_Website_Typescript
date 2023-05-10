interface Inputprops {
    LabelName: string,
    Type: string | undefined,
    Id: string | undefined,
    Placeholder: string,
    Value: any,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface ButtonProps {
    Name: string,
    onClick?: () => void ;
}

export function Input(props: Inputprops) {
    const { LabelName, Type, Id, Placeholder, Value, onChange } = props;
    return (
        <>
            <label htmlFor="website-admin" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">{LabelName}</label>
            <input type={Type} id={Id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder={Placeholder} value={Value} onChange={(e) => onChange(e)}></input>
        </>
    );
}

export function Textarea(props: Inputprops) {
    const { LabelName, Id, Placeholder, Value, onChange } = props;
    return (
        <>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{LabelName}</label>
            <textarea id={Id} rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Placeholder} value={Value} onChange={(e) => onChange(e)}></textarea>
        </>
    );
}

export function Button() {
    return (
        <button className="bg-gray-900 text-white rounded-md px-8 my-3 py-2 text-sm font-medium">
            Submit
        </button>
    );

}

export function ButtonCommon(props: ButtonProps) {
    const {Name, onClick} = props;
    return (
        <button className="focus:outline-none px-10 bg-yellow-400 py-2 rounded-lg text-gray-800 hover:bg-yellow-400" onClick={() => onClick && onClick()}>
            {Name}
        </button>
    );

}
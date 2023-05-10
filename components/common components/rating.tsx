import { AiFillStar,AiOutlineStar } from "react-icons/ai"

interface rating {
    rated: number
}
function Rating({rated}:rating) {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                // index += 1;
                return (
                    <>
                     {rated >= index + 1 ? <AiFillStar className={`text-yellow-400 `} key={index}/> : <AiOutlineStar className="text-yellow-400 cursor-pointer text-2xl" key={index}/>}
                    </>
                );
            })}
        </div>
    );
}
export default Rating;
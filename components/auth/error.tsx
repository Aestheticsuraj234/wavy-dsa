import { CardWrapper } from "./card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = ()=>{
    return (
       <CardWrapper
       headerLabel="Oops! Something went wrong!"
       backButtonHref="/login"
       backButtonLabel="Back to login"
       >
        <div className="w-full items-center flex justify-center">
            <FaExclamationTriangle className="text-red-500 h-20 w-20" />
        </div>


       </CardWrapper>

    )
}
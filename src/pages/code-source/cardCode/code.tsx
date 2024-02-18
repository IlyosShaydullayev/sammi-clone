import { Button } from "@/components/ui/button"
import { Props } from "./type"
import { FiGithub } from "react-icons/fi";

export const CodeSourceCard = ({title}: Props) => {
    return(
        <div className="border border-[#1e293b] rounded-md p-5">
            <h1 className="line-clamp-2 text-xl">{title}</h1>
            <Button variant='secondary' className="w-full flex items-center py-2 mt-2">
                <FiGithub className="text-white mr-2 text-xl"/>
                <span>Kodni ko'rish</span>
            </Button>
        </div>
    )
}
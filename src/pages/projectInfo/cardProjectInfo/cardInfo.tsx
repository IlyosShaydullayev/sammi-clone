import { Props } from "./type"

export const CardProjectInfo = ({img, title, description}: Props) => {
    return(
        <div className="w-full mt-6 rounded-md flex gap-4 md:p-8 p-4 bg-gray-100 dark:bg-gray-900">
            <div>
                <h1 className="mt-4 lg:mt-0 font-medium text-3xl">{title}</h1>
                <p className="w-full opacity-50 text-[16px] mt-3">{description}</p>
                <div className="mt-10 flex flex-row gap-8 text-sm md:text-md">
                    <p className="text-blue-500">Davomiylik: <span className="font-semibold">5 soat 38 daqiqa</span></p>
                    <p className="text-blue-500">Darslar soni: <span className="font-semibold">10 ta</span></p>
                </div>
            </div>
            <div>
                <img src={img} alt={title} className="rounded-xl"/>
            </div>
        </div>
    )
}
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const MyWishList = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <img src="https://sammi.ac/_next/image?url=%2Fnot-found.png&w=384&q=75" alt="empty" width={270} height={191}/>
            <h2 className="text-xl font-bold mt-8">Sizga yoqadigon kurslar va loyihalar yo'q</h2>
            <p className="body-regular my-3.5 max-w-md text-center">Sizning yoqadigon kurslar va loyihalar ro'yxatida hech narsa yo'q. Boshlash uchun kurslar ro'yxatidan birini tanlang.</p>
            <Link to='/courses'>
                <Button variant='secondary' className="rounded-md bg-[#3b82f6] text-[#141731]">Barcha kurslar</Button>
            </Link>
        </div>
    )
}
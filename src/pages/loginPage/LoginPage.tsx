import { Header } from "@/components/layouts/public";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-1 flex-col items-center justify-center max-md:pb-14 pt-24">
        <div className="w-[400px] bg-white dark:bg-[#19191a] border-[1px] border-[#19191a] px-[32px] py-[38px] rounded-xl">
          <div>
            <h1 className="text-[1.25rem] font-[600] text-[#19191a] dark:text-white">
              Kirish
            </h1>
            <p className="text-[#848484] mt-2">
              "TenX" da ishlashni davom ettirish uchun
            </p>
          </div>
          <div className="hover:bg-transparent mt-6">
            <Button
              variant="outline"
              className="flex py-3 px-4 gap-4 group bg-transparent rounded-sm border-[1px] mt-2 border-[#2b2b2c] w-full"
            >
              <FaGithub size={20} className="dark:text-white text-[#19191a]" />
              <h2 className="text-sm font-[400] dark:text-white text-[#19191a]">
                Github orqali davom ettirish
              </h2>
              <FaArrowRightLong className="ml-10 opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:translate-x-2"/>
            </Button>
            <Button
              variant="outline"
              className="flex py-3 px-4 group gap-4 bg-transparent rounded-sm border-[1px] mt-2 border-[#2b2b2c] w-full"
            >
              <FcGoogle size={20} className="dark:text-white text-[#19191a]" />
              <h2 className="text-sm font-[400] dark:text-white text-[#19191a]">
                Google orqali davom ettirish
              </h2>
              <FaArrowRightLong className="ml-10 opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:translate-x-2"/>
            </Button>
          </div>
          <div className="flex items-center justify-between my-6">
            <div className="w-[130px] bg-[#999] dark:bg-[#333232] h-[2px]"></div>
            <h2 className="text-[#9d9c9c]">yoki</h2>
            <div className="w-[130px] bg-[#999] dark:bg-[#333232] h-[2px]"></div>
          </div>

          <form>
            <label htmlFor="email" className="block">
              Pochta
            </label>
            <input
              type="text"
              id="email"
              required
              className="w-full px-3 py-2 rounded-md bg-transparent text-white outline-none border-[2px] border-[#333]"
            />
            <label htmlFor="password" className="block mt-3">
              Parol
            </label>
            <input
              type="text"
              id="password"
              required
              className="w-full bg-transparent px-3 py-2 rounded-md text-white outline-none border-[2px] border-[#333]"
            />
            <Button
              variant="outline"
              className="w-full bg-blue-700 text-white rounded-sm border-none font-medium mt-4 text-[14px] py-2"
            >
              DAVOM ETISH
            </Button>
            <p className="mt-6 text-md text-slate-400">
              Accaunt yo'qmi?{" "}
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Ro'yxatdan o'tish
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { AiFillContacts } from "react-icons/ai";
import { RiMoonClearFill } from "react-icons/ri";
import { TiWeatherSunny } from "react-icons/ti";
import { Link } from "react-router-dom";

export const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex fixed top-0 left-0 z-[999] border-b justify-between items-center w-full h-[74px] px-[48px] dark:bg-[#111827]">
        <Link to='/' className="text-[30px]">Tenx Academy</Link>
      <div className="flex space-x-2">
        <Button variant="secondary" className="bg-transparent">
          <AiFillContacts size={"20px"} />
        </Button>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="secondary"
          className="bg-transparent"
        >
          {theme === "dark" ? (
            <TiWeatherSunny size={"20px"} />
          ) : (
            <RiMoonClearFill />
          )}
        </Button>   
        <Link to='/login'>
          <Button className="bg-[#3b82f6] font-semibold">Kirish</Button>
        </Link>
      </div>
    </header>
  );
};
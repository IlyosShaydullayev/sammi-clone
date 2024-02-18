import { Button } from "@/components/ui/button";
import { SideBarLinks } from "./constant/side-bar";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const {pathname} = useLocation()
  return (
    <aside className="fixed z-10 border-r top-0 left-0 h-screen w-[300px] dark:bg-[#111827]">
      <div className="pt-[128px] px-5">
        <div className="flex flex-col gap-6">
          {SideBarLinks.map((menu, i) => {
            return (
              <Link to={menu.path} key={i} >
                <Button className={`w-full bg-transparent ${pathname === menu.path ? 'bg-[#3b82f6] hover:bg-[#3b82f6] text-[#0f172a] font-bold hover:opacity-90' : ''}`} variant="secondary">
                  <div className="flex w-full items-center">
                    {menu.icon}
                    <span className="ml-2">{menu.label}</span>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

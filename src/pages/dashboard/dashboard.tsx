import { Button } from "@/components/ui/button";
import { Avatar } from "./../../components/common/avatar/avatar";
import { ProfileCategory } from "./profileCategory";
import { useState } from "react";
import { MyCourse } from "./my-course";
import { MyProjects } from "./my-projects";
import { MyWishList } from "./my-wishlist";
import { MyArchive } from "./my-archive";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <Avatar src="" width={140} height={140} name="Ilyos Shaydullayev" />
        </div>
        <Link to='/profile-edit'>
            <Button className="bg-[#3872e0] hover:bg-[#1c58c9] text-[#20262e]">
            Profilni tahrirlash
            </Button>
        </Link>
      </div>
      <div className="flex rounded-md bg-slate-800 w-max p-1 gap-1 mt-10">
        {ProfileCategory.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center ${active === i ? "text-blue-500 bg-primary/5" : "text-slate-400 bg-black"} cursor-pointer  rounded-md py-1 px-10 gap-2`}
          >
            <p>{item.icon}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      {active === 0 && <MyCourse/>}
      {active === 1 && <MyProjects/>}
      {active === 2 && <MyWishList/>}
      {active === 3 && <MyArchive/>}
    </>
  );
};

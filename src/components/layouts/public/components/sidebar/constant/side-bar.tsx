import { GoHomeFill } from "react-icons/go";
import { HiFolder } from "react-icons/hi";
import { MdDataArray } from "react-icons/md";
import { GoCodeSquare } from "react-icons/go";
import { RiDashboard3Line } from "react-icons/ri";

export const SideBarLinks = [
  {
    label: "Bosh sahifa",
    icon: <GoHomeFill className="w-6 h-6"/>,
    path: "/",
  },
  {
    label: "Barcha kurslar",
    icon: <MdDataArray className="w-6 h-6"/>,
    path: "/courses",
  },
  {
    label: "Loyihalar",
    icon: <HiFolder className="w-6 h-6"/>,
    path: "/projects",
  },
  {
    label: "Kod manbalari",
    icon: <GoCodeSquare className="w-6 h-6"/>,
    path: "/source-codes",
  },
  {
    label: "Dashboard",
    icon: <RiDashboard3Line className="w-6 h-6"/>,
    path: "/profile",
  },
  
];
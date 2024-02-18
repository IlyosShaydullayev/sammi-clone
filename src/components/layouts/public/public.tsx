import { Props } from "./types";
import { Header } from "./components/header/header";
import { SideBar } from ".";

export const PublicLayout = ({ children }: Props) => {
  console.log(children);
  return (
    <>
      <Header />
      <div className="pl-[356px] py-[128px] pr-[56px]">{children}</div>
      <SideBar />
    </>
  );
};

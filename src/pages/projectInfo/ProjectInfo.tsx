import { useNavigate } from "react-router-dom";
import { CardProjectInfo } from "./cardProjectInfo";
import { Button } from "@/components/ui/button";

export const ProjectInfo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center gap-1">
        <p
          className="font-medium hover:underline opacity-50 line-clamp-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Bosh sahifa
        </p>
        <img src="/public/dot.svg" alt="" />
        <p
          className="font-medium hover:underline opacity-50 line-clamp-1 cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          Kurslar
        </p>
        <img src="/public/dot.svg" alt="" />
        <p className="text-blue-500 font-bold line-clamp-1">
          Google Drive-Clone
        </p>
      </div>
      <CardProjectInfo
        img="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=1920&q=75"
        title="Google Drive - Clone"
        description="Google drive clone loyihasi o'zbek tilida. NextJS, Firebase, TypeScript, TailwindCSS, Shadcn UI, NodeJS, Clerk, Stripe. Full stack loyiha qilishni o'rganing va tajriba ortiring, ushbu loyiha sizga haqiqiy tajriba beradi. Fullstack loyiha o'zbek tilida."
      />

      <div className="mt-8 flex  gap-8">
        <div className="w-2/3">
            <div className="rounded-md border bg-secondary p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-xl font-medium">Kursda nimalarni o'rganasiz.</h1>
            <div className="w-full mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">Stripe Integration</p>
                </div>
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">Subscription plan</p>
                </div>
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">Storage manage</p>
                </div>
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">Calculate file sizes</p>
                </div>
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">Recover deleted files</p>
                </div>
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">Light and Dark mode</p>
                </div>
                <div className="flex gap-2">
                <img src="/public/tick.svg" alt="" />
                <p className="flex-1">File and Folder upload</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col items-start mt-8 justify-between lg:flex-row lg:items-center">
              <h1 className="text-2xl font-medium">Kurs kontenti</h1>
              <div className="flex items-center ">
                <p className="font-bold text-blue-500">10 ta dars</p>
                <img src="/public/dot.svg" alt="" />
                <p className="font-bold text-blue-500">5 soat 38 daqiqa</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 rounded-md p-8 mt-4">
              <div className="relative">
                <div className="flex cursor-pointer items-center justify-between border-t border-t-dark-300 py-4">
                  <div className="flex items-center gap-2">
                    <img src="/public/camera.svg" alt="" />
                    <p>Demo loyihasi</p>
                  </div>
                  <p>9:51</p>
                </div>
                <div className="flex cursor-pointer items-center justify-between border-t border-t-dark-300 py-4">
                  <div className="flex items-center gap-2">
                    <img src="/public/camera.svg" alt="" />
                    <p>#1. Auth layout</p>
                  </div>
                  <p>38:20</p>
                </div>
                <Button variant='secondary' className="bg-secondary/90 rounded-md w-full px-4 py-2">Boshqa darslar (6 ta)</Button>
              </div>
            </div>
            <div className="rounded-md border bg-secondary p-4 lg:p-6 mt-8">
              <h2 className="text-2xl font-medium">Kurs kimlar uchun.</h2>
              <div className="mt-2">
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Haqiqiy loyihalarni qilishni istaganlar uchun</p>
                </div>
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Full stack loyiha ustida ishlashni xohlaganlar uchun</p>
                </div>
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Google drive loyihasini clone versiyasini qilishni istaganlar uchun</p>
                </div>
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Clerk avtorizatsiyani integratsiya qilish</p>
                </div>
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Xar oylik tarifga obuna bo'lish sistemasini o'rganmoqchi bo'lganlar uchun</p>
                </div>
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Firestore databse bilan ishlab ko'rmoqchi bo'lganlar uchun</p>
                </div>
                <div className="mt-1 flex items-center">
                  <img src="/public/dot.svg" alt="" />
                  <p className="text-slate-400 flex-1">Storage bilan ishlashni o'rganishni istaganlar uchun</p>
                </div>
              </div>
            </div>
        </div>
        <div className="sticky top-32 rounded-md border h-56 p-6 w-2/5 shadow-[inset_0px_0px_10px_10px_#4299e1]">
          <p className="text-xl">Kurs narxi</p>
          <p className="text-3xl font-medium">Bepul</p>
          <div className="flex gap-2 mt-2">
            <p className="font-bold text-[#DD6B20]">5.0</p>
            <div className="flex">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <p className="font-bold">(5)</p>
            <p className="ml-2">166 o'quvchi</p>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full my-4" />
          <Button
            variant="default"
            className="bg-[#3b82f6] w-full text-[#142443] font-medium px-4 py-2"
          >
            Kirish
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-[60%] mt-8">
        <div className="mt-6 flex items-center gap-1">
          <img src="/public/star.svg" alt="" />
          <div className="lg:text-xl text-md font-medium">
            Kurs baholari: <span className="font-bold">5</span>
          </div>
          <img src="/public/dot.svg" alt="" />
          <div className="lg:text-xl text-md font-medium">
            <span className="font-bold">5 </span>
            ta sharh
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="mt-6 border-t border-t-secondary">
            <div className="mt-8 flex gap-2">
              <p className="bg-purple-500 rounded-full p-2 px-4 text-2xl ">A</p>
              <div className="flex flex-col">
                <p>Akhmad Kholmurodov</p>
                <div className="flex items-center gap-1">
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="text-sm opacity-50">tahminan 1 oy oldin</p>
                </div>
              </div>
            </div>
              <div className="mt-2">Ajayib</div>
          </div>
          <div className="mt-6 border-t border-t-secondary">
            <div className="mt-8 flex gap-2">
              <p className="bg-purple-500 rounded-full p-2 px-4 text-2xl ">A</p>
              <div className="flex flex-col">
                <p>Akhmad Kholmurodov</p>
                <div className="flex items-center gap-1">
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="text-sm opacity-50">tahminan 1 oy oldin</p>
                </div>
              </div>
            </div>
              <div className="mt-2">Ajayib</div>
          </div>
          <div className="mt-6 border-t border-t-secondary">
            <div className="mt-8 flex gap-2">
              <p className="bg-purple-500 rounded-full p-2 px-4 text-2xl ">A</p>
              <div className="flex flex-col">
                <p>Akhmad Kholmurodov</p>
                <div className="flex items-center gap-1">
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="text-sm opacity-50">tahminan 1 oy oldin</p>
                </div>
              </div>
            </div>
              <div className="mt-2">Ajayib</div>
          </div>
          <div className="mt-6 border-t border-t-secondary">
            <div className="mt-8 flex gap-2">
              <p className="bg-purple-500 rounded-full p-2 px-4 text-2xl ">A</p>
              <div className="flex flex-col">
                <p>Akhmad Kholmurodov</p>
                <div className="flex items-center gap-1">
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="text-sm opacity-50">tahminan 1 oy oldin</p>
                </div>
              </div>
            </div>
              <div className="mt-2">Ajayib</div>
          </div>
        </div>
        <Button variant='secondary' className="mt-8 px-4 py-2 bg-[#3872e0] text-[#111d35]">Barcha sharhlar</Button>
      </div>
    </div>
  );
};

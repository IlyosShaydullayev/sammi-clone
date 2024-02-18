import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export const ProfileEdit = () => {
    return(
        <div>
      <div className="mx-auto w-full max-w-6xl custom-scrollbar">
        <div className="flex items-end space-x-2">
          <Link to="/profile">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <FaChevronLeft size={20} />
            </button>
          </Link>
          <h1 className="text-2xl font-medium">Profilni tahrirlash</h1>
        </div>

        <div className="mt-4">
          <form className="mt-4 flex w-full flex-col gap-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                To'liq ismingiz
                <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[56px] border bg-secondary"
                id="name"
                placeholder="Ismingiz"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="portfolio"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Portfolio Link
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[56px] border bg-secondary"
                id="portfolio"
                placeholder="Portfolio Url"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Location
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[56px] border bg-secondary"
                id="location"
                placeholder="Siz qayerdansiz?"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="bio"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Bio
                <span className="text-blue-500">*</span>
              </label>
              <textarea
                id="bio"
                placeholder="O'zingiz haqida qisqacha?"
                className="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 no-focus paragraph-regular min-h-[150px] border bg-secondary"
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#3b82f6] text-[#3b82f6]-foreground hover:bg-[#3b82f6]/90 mt-2 text-white dark:text-[#020817] mb-10 h-10 px-4 py-2 w-fit">Saqlash</button>
          </div>
        </div>
      </div>
    </div>
  );
};
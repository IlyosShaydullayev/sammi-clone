export const Hero = () => (
  <section>
    <div className="w-full md:p-8 p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col space-y-2 lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold">
            <span className="text-blue-500">Sammi</span> - dasturlash kurslari
          </h1>
          <p>
            Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu
            erda siz barcha pullik kurslarni bepul o'rganishingiz mumkin.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/courses">
              <button className="inline-flex ] items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-bold w-full">
                Kurslar
              </button>
            </a>
            <a href="/projects">
              <button className="inline-flex dark:bg-[rgb(59 128 246)] items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-bold w-full">
                Loyihalar
              </button>
            </a>
          </div>
          <p className="opacity-50 text-sm">
            * Kelajak hayotingiz uchun investitsiya qiling.
          </p>
        </div>
        <div>
          <img src="/public/react (1).svg" alt="" className="w-[300px] h-[278px]"/>
        </div>
      </div>
    </div>
  </section>
);
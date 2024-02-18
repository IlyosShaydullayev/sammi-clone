export const MyCourse = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-md bg-gray-100 dark:bg-gray-900 px-6 py-4">
        <div className="relative min-h-40 w-full">
          <img
            src="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75"
            alt=""
          />
          <div className="absolute bottom-0 right-0 flex items-center gap-2 rounded-tl-lg bg-blue-500/50 px-2 py-1">
            <p className="font-spaceGrotesk text-sm font-bold text-white">
              Front-End
            </p>
          </div>
        </div>
        <h2 className="h2-bold mt-2 line-clamp-1 font-spaceGrotesk">
          React & Redux
        </h2>
        <div
          role="progressbar"
          data-state="indeterminate"
          data-max="100"
          className="relative w-full overflow-hidden rounded-full bg-white dark:bg-gray-800 mt-2 h-3"
        >
          <div
            data-state="indeterminate"
            data-max="100"
            className="h-full w-full flex-1 bg-primary transition-all"
            style={{ transform: "translateX(-95.3846%)" }}
          ></div>
        </div>
        <div className="mt-2 text-sm font-bold opacity-50">5% tugatildi</div>
      </div>
    </div>
  );
};

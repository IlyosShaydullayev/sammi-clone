import { Props } from "./types";
export const CardCourse = ({ img, imgTitle, title }: Props) => {
  return (
    <div className="group relative border-t pt-2 cursor-pointer">
      <div className="relative w-full md:h-[150px] h-[220px]">
        <img src={img} alt={title} className="rounded-md" />
        <div className="border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-[#3b82f6] text-[#0e172a] absolute left-0 bottom-0 rounded-md">
          {imgTitle}
        </div>
      </div>
      <h1 className="mt-2 text-xl font-bold mb-4 line-clamp-1">{title}</h1>

      <div className="absolute opacity-0 top-0 transition duration-200 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 left-0 md:h-[150px] h-[220px]">
        <div className="relative w-full md:h-[150px] h-[220px]">
          <img
            alt={title}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="duration-700 md:h-[150px] h-[220px] ease-in-out scale-100 cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-[265px]"
            src={img}
          />
        </div>
        <div className="z-10 bg-secondary p-2 lg:p-2 absolute w-full transition shadow-md rounded-b-md">
          <div className="font-medium text-md">Tensorflow JS</div>
          <p className="line-clamp-2 text-sm opacity-50">
            Ushbu kursda siz TensorflowJS yordamida modellar yaratish va
            veb-ilovani yaratish uchun ularni ReactJS bilan integratsiya
            qilishni o'rganasiz. Sun'iy intellekt yordamida onlayn-do'kon
            yaratasiz. Kurs sizga Machine Learning va sun'iy intellektdan
            loyihalarda qanday foydalanish mumkinligini o'rgatadi.
          </p>
          <p className="text-xl font-bold text-blue-500 mt-2">Bepul</p>
        </div>
      </div>
    </div>
  );
};

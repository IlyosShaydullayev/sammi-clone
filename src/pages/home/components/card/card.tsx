import { Props } from "./types";

export const Card = ({ img, title }: Props) => {
  return (
    <div className="rounded-lg border pb-4">
      <div className="relative lg:h-[200px] h-[220px] w-full">
        <img src={img} alt={title} />
      </div>
      <div className="px-4">
        <p className="mt-4 text-[1.4rem]">{title}</p>
      </div>
    </div>
  );
};
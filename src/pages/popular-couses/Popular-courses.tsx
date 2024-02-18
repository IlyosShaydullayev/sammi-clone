import { Button } from "@/components/ui/button";
import { QueryLink } from "./query";
import { Link } from "react-router-dom";
import { CardCourse } from "./cardCourse";
import { useState } from 'react';

export const PopularCourse = () => {
  const [activeButton, setActiveButton] = useState('newest')
  return (
    <div>
      <h1 className="text-3xl font-medium">Kurslar</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {QueryLink.map((item, i) => {
          return (
            <Link key={i} className="mb-4" to={`?filter=${item.query}`}>
              <Button
                variant="secondary"
                className={`w-full bg-transparent ${activeButton === item.query ? "bg-[#3b82f6] text-[#0e172a] hover:bg-[#3b82f6]" : "rounded-md border border-[#182334]"} `}
                onClick={() => setActiveButton(item.query)}
              >
                {item.element}
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {new Array(16).fill("1").map((_, index) => (
          <CardCourse
            key={index}
            title="Nuxt JS"
            img="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75"
            imgTitle="Full-Stack"
          />
        ))}
      </div>
    </div>
  );
};

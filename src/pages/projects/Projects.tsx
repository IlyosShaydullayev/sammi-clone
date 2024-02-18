import { Link } from "react-router-dom";
import { Querylink } from "./query";
import { Button } from "@/components/ui/button";
import { CardProject } from "./cardProjects/cardProjects";
import { useState } from 'react';

export const Projects = () => {
  const [activeButton, setActiveButton] = useState('newest')
  return (
    <div>
      <h1 className="text-3xl font-medium">Kurslar</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {Querylink.map((item, i) => {
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
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {new Array(16).fill("1").map((_, index) => (
          <Link to='/nuxt' key={index}>
            <CardProject
              key={index}
              title="Google Drive - Clone"
              img="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=1920&q=75 "
              imgTitle="Full-Stack"
              tag="NextJS React Firebase Stripe TypeScript"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
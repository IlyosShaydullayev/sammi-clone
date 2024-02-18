import { Card } from "../card";

export const PupularCourses = () => (
  <section className="mt-16 ">
    <div className="flex space-x-2 group items-center">
      <div className="text-2xl font-medium">Mashhur Kurslar</div>
    </div>
    <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-3">
      {new Array(6).fill("1").map((_, index) => (
        <Card
          key={index}
          title="JavaScript"
          img="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=3840&q=75"
        />
      ))}
    </div>
  </section>
);
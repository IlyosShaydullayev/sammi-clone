import { Card } from "../card";

export const Projects = () => {
  return (
    <section className="mt-16 ">
      <div className="flex space-x-2 group items-center">
        <div className="text-2xl font-medium">Loyihalar</div>
      </div>
      <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-3">
        {new Array(6).fill('1').map((_, index) => (
          <Card
            key={index}
            title="JavaScript"
            img="https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=3840&q=75"
          />
        ))}
      </div>
    </section>
  );
};
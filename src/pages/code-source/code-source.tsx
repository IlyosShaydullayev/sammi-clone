import { CodeSourceCard } from "./cardCode";

export const CodeSource = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium">Kod manbalari</h1>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {new Array(6).fill("1").map((i) => (
          <CodeSourceCard key={i} title="Machine learning - TensorflowJS" />
        ))}
      </div>
    </div>
  );
};

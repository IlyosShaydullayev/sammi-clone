import { CardCodeSource } from "./component/card";

export const CodeSource = () => {
  return (
    <section className="mt-6">
      <div className="flex space-x-2 group items-center">
        <div className="text-2xl font-medium">Kod manbalar</div>
      </div>
      <div className="my-6 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {new Array(3).fill(3).map((_, i) => (
          <CardCodeSource key={i} title={'Machine learning - TensorflowJS'}/>
        ))}
      </div>
    </section>
  );
};
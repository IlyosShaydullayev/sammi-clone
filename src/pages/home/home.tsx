import { CodeSource } from "./components/code-source";
import { Hero } from "./components/hero/hero";
import { PupularCourses } from "./components/popular-course";
import { Projects } from "./components/projects";


export const Home = () => {
  return (
    <section>
      <Hero />
      <PupularCourses />
      <Projects />
      <CodeSource />
    </section>
  );
};
import {
  Home,
  CodeSource,
  PopularCourse,
  Projects,
  LoginPage,
  ProjectInfo,
  RegisterPage,
} from "@/pages";
import { Dashboard } from "@/pages/dashboard";
import { ProfileEdit } from "@/pages/dashboard/profileEdit";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<PopularCourse />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/source-codes" element={<CodeSource />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="/nuxt" element={<ProjectInfo />} />
      <Route path="/profile" element={<Dashboard />} />
      <Route path="/profile-edit" element={<ProfileEdit />} />
    </Routes>
  );
};

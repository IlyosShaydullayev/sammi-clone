import { useLocation } from "react-router-dom";
import { PublicLayout } from "./components/layouts";
import { AppRoutes } from "./routes";
import { LoginPage, RegisterPage } from "./pages";

export const App = () => {
  const { pathname } = useLocation();

  if (pathname === "/login") {
    return <LoginPage/>;
  }
  else if(pathname === "/sign-up"){
    return <RegisterPage/>
  }
   else {
    return (
      <div>
        <PublicLayout>
          <AppRoutes />
        </PublicLayout>
      </div>
    );
  }
};

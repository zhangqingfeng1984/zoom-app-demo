import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

export const Logo = () => {
  const theme = useTheme();
  const router = useRouter();
  const isLoginPage = router.pathname.includes("auth/login");
  const logo = isLoginPage ? "/assets/logos/citi.svg" : "/assets/logos/citi-white.svg";
  return <img src={logo} />;
};

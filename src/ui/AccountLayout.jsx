import { Outlet } from "react-router-dom";
import SignupProvider from "./SignupContext";
export default function AccountLayout() {
  return (
    <SignupProvider>
      <main className=" w-full h-screen backdrop-brightness-105l">
        <Outlet />
      </main>
    </SignupProvider>
  );
}

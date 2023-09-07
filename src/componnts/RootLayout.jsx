import { Outlet } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";
import { Provider } from "react-redux";
import Store from "../store/Store";
function RootLayout() {
  return (
    <>
      <Provider store={Store}>
        <NavbarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}
export default RootLayout;

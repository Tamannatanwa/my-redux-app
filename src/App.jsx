import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./componnts/Dashboard";
import Cart from "./componnts/Cart";
import RootLayout from "./componnts/RootLayout";
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
    </Route>
  ))
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  )
}
export default App;
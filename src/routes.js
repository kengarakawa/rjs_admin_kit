import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import ForgotPassword from "./pages/forgot_password/ForgotPassword"
import Login from "./pages/login/Login"
import PageNotFound from "./pages/page_not_found/PageNotFound"
import ProductDetail from "./pages/products/ProductDetail"
import Products from "./pages/products/Products"
import ProductThumbnails from "./pages/products/ProductThumbnails"
import Register from "./pages/register/Register"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact={true} component={"Home"} /> */}
        <Route path="/" exact="true" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/backend/dashboard" component={Dashboard} />
        <Route path="/backend/products" component={Products} />
        <Route
          path="/backend/productthumbnails"
          component={ProductThumbnails}
        />
        <Route path="/backend/productdetail/:id" component={ProductDetail} />

        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes

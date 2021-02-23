import React from "react"
import { Route, Switch } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import ForgotPassword from "./pages/forgot_password/ForgotPassword"
import Login from "./pages/login/Login"
import PageNotFound from "./pages/page_not_found/PageNotFound"
import Products from "./pages/products/Products"
import Register from "./pages/register/Register"

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" exact={true} component={"Home"} /> */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/backend/dashboard" component={Dashboard} />
      <Route path="/backend/products" component={Products} />



      <Route component={PageNotFound} />
    </Switch>
  )
}
export default Routes

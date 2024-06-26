import React from 'react'

// @mui icons
import Icon from "@mui/material/Icon";
import Main from './Main/Main';
import Profile from './Profile/Profile';

export default function Route() {
    const routes = [
        {
          type: "collapse",
          name: "Dashboard",
          key: "dashboard",
          icon: <Icon fontSize="small">dashboard</Icon>,
          route: "/dashboard",
          component: <Main />,
        },
        // {
        //   type: "collapse",
        //   name: "Tables",
        //   key: "tables",
        //   icon: <Icon fontSize="small">table_view</Icon>,
        //   route: "/tables",
        //   component: <C/>,
        // },
        // {
        //   type: "collapse",
        //   name: "Billing",
        //   key: "billing",
        //   icon: <Icon fontSize="small">receipt_long</Icon>,
        //   route: "/billing",
        //   component: <Billing />,
        // },
        // {
        //   type: "collapse",
        //   name: "RTL",
        //   key: "rtl",
        //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        //   route: "/rtl",
        //   component: <RTL />,
        // },
        // {
        //   type: "collapse",
        //   name: "Notifications",
        //   key: "notifications",
        //   icon: <Icon fontSize="small">notifications</Icon>,
        //   route: "/notifications",
        //   component: <Notifications />,
        // },
        {
          type: "collapse",
          name: "Profile",
          key: "profile",
          icon: <Icon fontSize="small">person</Icon>,
          route: "/profile",
          component: <Profile />,
        },
        // {
        //   type: "collapse",
        //   name: "Sign In",
        //   key: "sign-in",
        //   icon: <Icon fontSize="small">login</Icon>,
        //   route: "/authentication/sign-in",
        //   component: <SignIn />,
        // },
        // {
        //   type: "collapse",
        //   name: "Sign Up",
        //   key: "sign-up",
        //   icon: <Icon fontSize="small">assignment</Icon>,
        //   route: "/authentication/sign-up",
        //   component: <SignUp />,
        // },
      ];
  return (
    <div>
        <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
    </div>
  )
}

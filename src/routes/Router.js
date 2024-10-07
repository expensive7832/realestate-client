import React from "react";
import { lazy } from "react";
import { Navigate } from "react-router-dom";



/****Layouts*****/
const FullLayout = lazy(() => import("./../Layout/FullLayout.js"));

/***** Pages ****/


const Home = lazy(() => import("./../components/Home"));
const Header = lazy(() => import("./../components/Header"));
const FlatDetail = lazy(() => import("./../components/FlatDetail"));
const Footer = lazy(() => import("./../components/Footer"));
const Contact = lazy(() => import("./../components/Contact"));
const About = lazy(() => import("./../components/About"));
const Blog = lazy(() => import("./../components/Blog"));
const BlogDetail = lazy(() => import("./../components/BlogDetail"));
const Login = lazy(() => import("./../pages/Login"));
const Signup = lazy(() => import("./../pages/Signup"));
const ForSale = lazy(() => import("./../pages/ForSale"));
const ForRent = lazy(() => import("./../pages/ForRent"));
const PostProperty = lazy(() => import("./../components/PropertyListing"));
const Starter = lazy(() => import("./../views/Starter"));
const PostDashboard = lazy(() => import("./../views/PostDashboard"));
const Listing = lazy(() => import("./../views/Listing"));
const MyProfile = lazy(() => import("../views/MyProfile.jsx"))
const Activation = lazy(() => import("../views/Activation.js"))
const ResendEmail = lazy(() => import("../views/ResendEmail.js"))
const Package = lazy(() => import("./../pages/Package.jsx"))

/*****Routes******/


const ThemeRoutes = [
  {
    path: "/", element: <Home />
  },
  {
    path: "/resend_email", element: <ResendEmail/>
  },
  {
    path: "/header", element: <Header/>
  },
  {
    path: "/flat/:slug", element: <FlatDetail/>
  },
  {
    path: "/activate/:uid/:token", element: <Activation/>
  },
  {
    path: "/footer", element: <Footer/>
  },
  {
    path: "/contact", element: <Contact/>
  },
  {
    path: "/about", element: <About/>
  },
  {
    path: "/blog", element: <Blog/>
  },
  {
    path: "/blogdetails:id", element: <BlogDetail/>
  },
  {
    path: "/login", element: <Login/>
  },
  {
    path: "/signup", element: <Signup/>
  },
  {
    path: "/sale", element: <ForSale/>
  },
  {
    path: "/rent", element: <ForRent/>
  },
  {
    path: "/postproperty", element: <PostProperty/>
  },
  {
    path: "/package", element: <Package/>
  },
  {
    path: "/dashboard/",
    element: <FullLayout />,
    children: [
      { path: "/dashboard/", element: <Navigate to="/dashboard/starter" /> },
      { path: "/dashboard/starter", exact: true, element: <Starter /> },
      { path: "/dashboard/postproperty", exact: true, element: <PostDashboard/> },
      { path: "/dashboard/listing", exact: true, element: <Listing/> },
      { path: "/dashboard/profile", exact: true, element: <MyProfile/> },
      
    ],
  }
];

export default ThemeRoutes;

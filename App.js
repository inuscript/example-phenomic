import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import { BlogPostContainer } from "./BlogPost";

const Home = () => (
  <div>
    <p>This is a homepage</p>
  </div>
);

export default createApp(() => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/blog/*" component={BlogPostContainer} />
  </BrowserRouter>
));

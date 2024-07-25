import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Singnup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import { RecoilRoot } from "recoil";
import LoadingSpinner from "./components/LoadingSpinner";
import React from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <React.Suspense fallback={<LoadingSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Singnup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/publish" element={<Publish />} />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;

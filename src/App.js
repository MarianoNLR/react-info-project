import * as React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;

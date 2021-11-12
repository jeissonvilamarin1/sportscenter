import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "../components/Form";
import Hero from "../components/Hero";


export const AppRouter = () => {
  return (
    <div>
        <Routes>
          <Route path="/inicio" element={<Hero />} />
          <Route path="/registro" element={<Form />} />
        </Routes>
    </div>
  );
};

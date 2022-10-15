import React from "react";
import HeaderComponent from "./summary/HeaderComponent";
import MainComponent from "./summary/MainComponent";

import { useSelector } from "react-redux";
export default function Summary({ type }) {
  const isMechanic = type === "tukang";
  const dataSelected = useSelector((state) => state.problemDetails);
  const {list_bahan, list_tukang } = dataSelected;

  return (
    <div
      className={`space-y-5 mt-10 shadow-xl p-6 ${
        isMechanic && "flex"
      } gap-8 bg-white rounded-xl ${isMechanic && "max-h-72"} items-center`}
    >
      <HeaderComponent type={type} tukang={list_tukang} />
      <MainComponent type={type} tukang={list_tukang} bahan={list_bahan} />
    </div>
  );
}

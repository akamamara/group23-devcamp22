import React from "react";
import Details from "../components/Details";

export default function ProblemDetails() {
  return (
    <main className="py-8 px-7 bg-slate-200 min-h-screen">
      <img
        src="https://api.iconify.design/ic:baseline-arrow-back.svg?color=%23888888"
        className="w-8 h-8 cursor-pointer"
      />
      <p className="mt-10">Tukang Bangunan</p>
      <h1>👋 Apa yang kamu butuhkan</h1>
      <Details type="problem" />
      <Details type="date" />
      <Details type="photo" />
    </main>
  );
}

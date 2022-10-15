import React from "react";
import Summary from "../components/Summary";

export default function SummaryDetails() {
  return (
    <div className="py-8 px-7 bg-slate-200 min-h-screen">
      <div className="space-y-4">
        <p className="mt-10 cursor-pointer">Belum memenuhi kebutuhan?</p>
        <h1>👨‍🔧 Rekomendasi Mitra Tukang</h1>
        <div className="flex flex-col gap-2 py-3">
          <h2>Berdasarkan</h2>
          <div className="flex justify-between">
            <p>Tipe Servis:</p>
            <span>Penggantian Keramik</span>
          </div>
          <div className="flex justify-between">
            <p>Beban Kerja:</p>
            <span>Sedang</span>
          </div>
        </div>
      </div>
      <Summary type="tukang" />
      <Summary type="material" />
    </div>
  );
}

import React from "react";
import Summary from "../components/Summary";
import useHandleRouting from "../features/useHandleRouting";
import { useSelector } from "react-redux";
export default function SummaryDetails() {
  const routing = useHandleRouting();
  const typeServis = useSelector(state => state.problemDetails)
  return (
    <>
      <div className="py-8 px-7 bg-slate-200 min-h-screen">
        <img
          src="https://api.iconify.design/ic:baseline-arrow-back.svg?color=%23888888"
          className="w-8 h-8 cursor-pointer"
          onClick={routing.handleBack()}
        />
        <div className="space-y-4">
          <p className="mt-10 cursor-pointer">Belum memenuhi kebutuhan?</p>
          <h1>👨‍🔧 Rekomendasi Mitra Tukang</h1>
          <div className="flex flex-col gap-2 py-3">
            <h2>Berdasarkan</h2>
            <div className="flex justify-between">
              <p>Tipe Servis:</p>
              <span>{typeServis.nama_rinci}</span>
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
      <div className="sticky bg-white px-7 py-6 bottom-0 left-0 right-0 scrollbar-hide">
        <div className="flex gap-6 justify-between">
          <h1>Total biaya</h1>
          <div className="space-y-3">
            <h2>Tukang-Medium Rp. 6,000,000</h2>
            <h2>Material Rp. 6,000,000</h2>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <button
            className="flex-1 px-5 py-2 bg-blue-300 rounded-xl mt-10"
            onClick={routing.handleRoutes("/result/payment")}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </>
  );
}

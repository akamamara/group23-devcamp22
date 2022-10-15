import React from "react";
import dummy from "../../assets/user.png";
import useHandleRouting from "../../features/useHandleRouting";
import dataTukang from "../../utils/tukang.json";
import material from "../../utils/data.json"
import { useSelector } from "react-redux";
export default function MainComponent({ type, tukang, bahan }) {
  const routing = useHandleRouting();
  const Tukang = useSelector(state => state.mechanicDetails)
  const { data } = dataTukang;
  const {Bahan} = material

  const relatedTukang = Object.keys(Tukang) > 0 ? Tukang : data[tukang[0] - 1];
  if (type === "tukang") {
    return (
      <div className="space-y-3 flex flex-col">
        <h1>{relatedTukang.name}</h1>
        <div className="flex gap-4">
          <img src="https://api.iconify.design/material-symbols:location-on-outline.svg?color=%23888888" />
          <p>{relatedTukang.location}</p>
        </div>
        <div className="flex gap-4">
          <img src="https://api.iconify.design/cil:money.svg?color=%23888888" />
          <p>Rp. 5.000.000,00 - Rp. 8.000,000,00</p>
        </div>
		<div className="flex gap-4">
          <img src="https://api.iconify.design/cil:money.svg?color=%23888888" />
          <p>Total mekanik: {tukang.length}</p>
        </div>
        <button
          className="bg-blue-500 px-5 py-2 text-sm items-end text-white rounded-lg"
          onClick={routing.handleRoutes("/result/change/worker")}
        >
          Cari tukang lain
        </button>
      </div>
    );
  }

  if (type === "material") {
    return (
      <div>
        <div className="border-y border-slate-300 py-6 mt-5 gap-6 grid grid-cols-2">
          {bahan.map(b => (
			<div className="flex col-span-1 gap-4">
            <div className="flex-1">
              <img src={
              Bahan[b.kode_bahan-1].img_url} className="" />
            </div>
            <div className="flex-[3]">
              <p>{Bahan[b.kode_bahan-1].nama_bahan}</p>
              <span>@Rp.{Bahan[b.kode_bahan-1].price}</span>
              <span>{Bahan[b.kode_bahan-1].desc}</span>
            </div>
          </div>
		  ))}
        </div>
        <button
          className="px-5 py-2 bg-blue-300 rounded-xl mt-10"
          onClick={routing.handleRoutes("/result/change/material")}
        >
          Ubah material
        </button>
      </div>
    );
  }
}

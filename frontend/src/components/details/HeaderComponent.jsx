import React from "react";

export default function HeaderComponent({ type }) {
  if (type === "problem") {
    return (
      <div className="space-y-3">
        <h2>
          Lokasi <span>Ubah</span>
        </h2>
        <div className="flex gap-5 items-center">
          <img
            src="https://api.iconify.design/material-symbols:my-location-outline.svg?color=%23888888"
            className="w-8 h-8 cursor-pointer"
          />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi
            aspernatur optio pariatur suscipit, harum perferendis iure quisquam
            a? Asperiores voluptate quod modi aliquid fugiat numquam distinctio
            odio vitae architecto.
          </p>
        </div>
      </div>
    );
  }
  if (type === "date") {
    return <h2>Tanggal</h2>;
  }
  if (type === "photo") {
    return <h2>Tambah foto lebih mantap!</h2>;
  }
}

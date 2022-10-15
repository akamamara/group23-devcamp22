import React from "react";
import dummy from "../../assets/megaphone.png";
import dataTukang from "../../utils/tukang.json"
export default function HeaderComponent({ type, tukang }) {
  const {data} = dataTukang
  if (type === "tukang") {
    return (
      <div className="flex-1">
        <img src={data[tukang[0]-1].profile_img} />
      </div>
    );
  }
  if(type === "material"){
    return <h1>Daftar Material yang dibutuhkan</h1> 
  }
}

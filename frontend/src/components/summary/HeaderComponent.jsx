import React from "react";
import dummy from "../../assets/megaphone.png";
export default function HeaderComponent({ type }) {
  if (type === "tukang") {
    return (
      <div className="flex-1">
        <img src={dummy} />
      </div>
    );
  }
  if(type === "material"){
    return <h1>Daftar Material yang dibutuhkan</h1> 
  }
}

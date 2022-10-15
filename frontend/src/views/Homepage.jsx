import React from "react";
import Widget from "../components/Widget";
import icon from "../assets/megaphone.png";
import user from "../assets/user.png";

export default function Homepage() {
  return (
    <main className="py-8 px-7 bg-slate-200 min-h-screen">
      <div className="flex justify-between items-center">
        <img src={icon} className="w-8 h-8 cursor-pointer" />
        <img src={user} className="w-8 h-8 cursor-pointer" />
      </div>
      <div className="space-y-10">
        <Widget type="servis" />
        <Widget type="currentProject" />
        <Widget type="history" />
      </div>
    </main>
  );
}

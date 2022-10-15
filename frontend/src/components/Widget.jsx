import React from "react";
import HeaderComponent from "./widget/HeaderComponent";
import MainContent from "./widget/MainContent";
export default function Widget({ type }) {
	const classes =
		type === "servis" && "border border-slate-300 bg-white rounded-[8px]";
	return (
		<section className={`${classes} mt-10 space-y-3 rounded-lg`}>
			<HeaderComponent type={type} />
			<MainContent type={type} />
		</section>
	);
}

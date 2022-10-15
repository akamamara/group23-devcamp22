import React from "react";
import dummy from "../../assets/megaphone.png";
import dataTukang from "../../utils/tukang.json";
import { useSelector } from "react-redux";
export default function HeaderComponent({ type, tukang }) {
	const { data } = dataTukang;
	const Tukang = useSelector((state) => state.mechanicDetails);
	console.log(Tukang);
	if (type === "tukang") {
		return (
			<div className="sm:flex-1">
				<img
					src={
						Object.keys(Tukang).length > 0
							? Tukang.profile_img
							: data[tukang[0] - 1].profile_img
					}
					className="rounded-full h-44 sm:h-36 sm:w-36 aspect-square"
				/>
			</div>
		);
	}
	if (type === "material") {
		return <h1>Daftar Material yang dibutuhkan</h1>;
	}
}

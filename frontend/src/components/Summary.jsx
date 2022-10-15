import React from "react";
import HeaderComponent from "./summary/HeaderComponent";
import MainComponent from "./summary/MainComponent";

import { useSelector } from "react-redux";
import { Card } from "@mui/material";
export default function Summary({ type }) {
	const isMechanic = type === "tukang";
	const dataSelected = useSelector((state) => state.problemDetails);
	const { list_bahan, list_tukang } = dataSelected;

	return (
		<Card elevation={3} sx={{ marginTop: 4 }}>
			<div
				className={`space-y-5 p-6 ${
					isMechanic && "flex flex-col sm:flex-row"
				} gap:4 sm:gap-8 ${isMechanic && "max-h-fit"} items-center`}
			>
				<HeaderComponent type={type} tukang={list_tukang} />
				<MainComponent type={type} tukang={list_tukang} bahan={list_bahan} />
			</div>
		</Card>
	);
}

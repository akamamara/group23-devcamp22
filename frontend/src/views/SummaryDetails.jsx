import React from "react";
import { useSelector } from "react-redux";
import { Button, ThemeProvider, Typography } from "@mui/material";

import Summary from "../components/Summary";
import FullViewLayout from "../components/Layout/FullViewLayout";
import HeadingPage from "../components/HeadingPage/HeadingPage";
import themesDefault from "../features/themes";
import useHandleRouting from "../features/useHandleRouting";
import BottomSheetPrice from "../components/BottomSheetPrice/BottomSheetPrice";

export default function SummaryDetails() {
	const keyPrice = ["Tukang-Medium", "Material"];
	const valuePrice = ["6,000,000", "6,000,000"];

	const routing = useHandleRouting();
	const typeServis = useSelector((state) => state.problemDetails);
	return (
		<ThemeProvider theme={themesDefault}>
			<div className="pb-44">
				<FullViewLayout>
					<HeadingPage
						title="👨‍🔧 Rekomendasi Mitra Tukang"
						subtitle="Sudah memenuhi kebutuhan?"
					/>
					<div className="space-y-4">
						<div className="flex flex-col gap-1 py-3 mb-[-20px]">
							<Typography variant="h2">Berdasarkan</Typography>
							<div className="flex justify-between opacity-70">
								<p>Tipe Servis:</p>
								<span>{typeServis.nama_rinci}</span>
							</div>
							<div className="flex justify-between opacity-70">
								<p>Beban Kerja:</p>
								<span>Sedang</span>
							</div>
						</div>
					</div>
					<Summary type="tukang" />
					<Summary type="material" />
				</FullViewLayout>
			</div>
			<BottomSheetPrice
				title={"Biaya"}
				keyPrice={keyPrice}
				valuePrice={valuePrice}
				path="/result/payment"
			/>
		</ThemeProvider>
	);
}

import React from "react";
import dummy from "../../assets/user.png";
import useHandleRouting from "../../features/useHandleRouting";
import dataTukang from "../../utils/tukang.json";
import material from "../../utils/data.json";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Handyman, Money, Place } from "@mui/icons-material";
export default function MainComponent({ type, tukang, bahan }) {
	const routing = useHandleRouting();
	const Tukang = useSelector((state) => state.mechanicDetails);
	const { data } = dataTukang;
	const { Bahan } = material;

	const relatedTukang =
		Object.keys(Tukang).length > 0 ? Tukang : data[tukang[0] - 1];
	if (type === "tukang") {
		return (
			<div className="space-y-3 flex flex-col">
				<h1>{relatedTukang.name}</h1>
				<div className="flex gap-3">
					<Place color="secondary" fontSize="small" />
					<p>{relatedTukang.location}</p>
				</div>
				<div className="flex gap-3">
					<Money color="secondary" fontSize="small" />
					<p>Rp5,000,000–Rp8,000,000</p>
				</div>
				<div className="flex gap-3">
					<Handyman color="secondary" fontSize="small" />
					<p>Total mekanik: {tukang.length}</p>
				</div>
				<Button
					variant="outlined"
					sx={{ float: "right", width: "fit-content", marginLeft: "auto" }}
					onClick={routing.handleRoutes("/result/change/worker")}
				>
					Cari tukang lain
				</Button>
			</div>
		);
	}

	if (type === "material") {
		return (
			<div className="w-full">
				<div className="border-y border-slate-300 py-6 mt-5 gap-6 grid grid-cols-2">
					{bahan.map((b) => (
						<div className="flex flex-col col-span-1 gap-4">
							<div className="flex-1">
								<img
									src={Bahan[b.kode_bahan - 1].img_url}
									className="rounded-[8px] h-28 w-full object-cover"
								/>
							</div>
							<div className="flex-[3]">
								<p>{Bahan[b.kode_bahan - 1].nama_bahan}</p>
								<span className="opacity-70">
									@Rp{Bahan[b.kode_bahan - 1].price.toLocaleString()},00
									<br />
								</span>
								<span className="opacity-70">
									{Bahan[b.kode_bahan - 1].desc}
								</span>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-end">
					<Button
						variant="outlined"
						sx={{ marginTop: 2, marginLeft: "auto" }}
						onClick={routing.handleRoutes("/result/change/material")}
					>
						Ubah material
					</Button>
				</div>
			</div>
		);
	}
}

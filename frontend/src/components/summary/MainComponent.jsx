import React from "react";
import dummy from "../../assets/user.png";
import useHandleRouting from "../../features/useHandleRouting";
export default function MainComponent({ type }) {
	const routing = useHandleRouting();
	if (type === "tukang") {
		return (
			<div className="space-y-3 flex flex-col">
				<h1>Nama Mitra mekanik</h1>
				<div className="flex gap-4">
					<img src="https://api.iconify.design/material-symbols:location-on-outline.svg?color=%23888888" />
					<p>Cibanteng dramaga bogor</p>
				</div>
				<div className="flex gap-4">
					<img src="https://api.iconify.design/cil:money.svg?color=%23888888" />
					<p>Rp. 5.000.000,00 - Rp. 8.000,000,00</p>
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
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
					<div className="flex col-span-1 gap-4">
						<div className="flex-1">
							<img src={dummy} className="" />
						</div>
						<div className="flex-[3]">
							<p>5kg-Cat aviant</p>
							<span>@Rp. 20.000</span>
						</div>
					</div>
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

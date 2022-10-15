import React from "react";
import success from "../assets/success.jpg";
import useHandleRouting from "../features/useHandleRouting";
export default function Success() {
	const routing = useHandleRouting();
	return (
		<main className="py-8 px-7 bg-slate-200 min-h-screen">
			<img
				src="https://api.iconify.design/ic:baseline-arrow-back.svg?color=%23888888"
				className="w-8 h-8 cursor-pointer"
				onClick={routing.handleReplace("/")}
			/>
			<div className="space-y-4 text-center">
				<h1 className="mt-20">Pembayaran berhasil</h1>
				<img src={success} />
				<div className="bg-white rounded-xl shadow-xl p-7 max-h-72">
					<div className="flex gap-2">
						<img
							src="https://api.iconify.design/material-symbols:date-range-outline-rounded.svg?color=%23888888"
							className="flex-1 h-3/5"
						/>
						<div className="flex-[2]">
							<h1>Jatuh Tempo</h1>
							<p>27 Desember 2022</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

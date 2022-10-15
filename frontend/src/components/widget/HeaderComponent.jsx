import React, { Fragment, useCallback } from "react";
import add from "../../assets/add.png";
import useHandleRouting from "../../features/useHandleRouting";

function HeaderComponent({ type }) {
	const routing = useHandleRouting();

	const content = null;
	if (type === "servis") {
		return (
			<div
				className="space-y-3 pt-3 px-4"
				onClick={routing.handleRoutes("/input")}
			>
				<div className="flex items-center gap-4">
					<img src={add} className="w-6 h-6 cursor-pointer" />
					<h1>Apa yang bisa kami bantu ?</h1>
				</div>

				<hr className="border-slate-300 border-b px-0" />
			</div>
		);
	}
	if (type === "currentProject") {
		return <h1>Proyek berlangsung</h1>;
	}
	if (type === "history") {
		return <h1>Riwayat Proyek</h1>;
	}
	return <div>{content}</div>;
}

export default HeaderComponent;

import React from "react";
import Widget from "../components/Widget";
import icon from "../assets/megaphone.png";
import user from "../assets/user.png";
import FullViewLayout from "../components/Layout/FullViewLayout";

export default function Homepage() {
	return (
		<FullViewLayout>
			<div className="flex justify-between items-center">
				<img src={icon} className="w-8 h-8 cursor-pointer" />
				<img src={user} className="w-8 h-8 cursor-pointer" />
			</div>
			<div className="space-y-10">
				<Widget type="servis" />
				<Widget type="currentProject" />
				<Widget type="history" />
			</div>
		</FullViewLayout>
	);
}

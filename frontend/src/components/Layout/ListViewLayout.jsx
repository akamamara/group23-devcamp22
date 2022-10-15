import React from "react";

export default function ListViewLayout({ children }) {
	return (
		<div class="bg-[url('../public/background/background_list.svg')] bg-no-repeat	bg-right-bottom">
			{children}
		</div>
	);
}

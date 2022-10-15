import { ButtonBase, Paper } from "@mui/material";
import React from "react";

export default function CardServices({ text, emoticon }) {
	const bgStyling = `text-white p-2 absoulte top-0 left-0 bg-gradient-to-r from-[#008bd1] to-[#ddadff] w-full h-[4rem] rounded-[8px] z-[-1]`;

	return (
		<div className="cursor-pointer hover:translate-y-[-10px] transition-all ease-in">
			<ButtonBase sx={{ height: "4rem", width: "100%", position: "relative" }}>
				<Paper
					sx={{
						height: "4rem",
						width: "100%",
						position: "relative",
						textAlign: "left",
						borderRadius: 8,
					}}
					variant="outlined"
				>
					<div className={bgStyling}>{text}</div>
					<div className="absolute top-0 right-0 text-[1.6rem]">{emoticon}</div>
				</Paper>
			</ButtonBase>
		</div>
	);
}

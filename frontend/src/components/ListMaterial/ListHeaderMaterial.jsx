import { Typography } from "@mui/material";
import React from "react";

export default function ListHeaderMaterial({ title, price }) {
	return (
		<div>
			<Typography>{title}</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
				{`@Rp${price}`}
			</Typography>
		</div>
	);
}

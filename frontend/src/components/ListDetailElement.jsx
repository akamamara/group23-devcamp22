import { Stack, Typography } from "@mui/material";
import React from "react";

function ListDetail(props) {
	const { icon, children } = props;
	return (
		<Stack direction="row" spacing={1}>
			{icon}
			<Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
				{children}
			</Typography>
		</Stack>
	);
}

export default ListDetail;

import { Stack, Typography } from "@mui/material";
import React from "react";

function ListDetail(props) {
	const { icon, children } = props;
	return (
		<Stack direction="row" spacing={0.5}>
			{icon}
			<Typography variant="subtitle2">{children}</Typography>
		</Stack>
	);
}

export default ListDetail;

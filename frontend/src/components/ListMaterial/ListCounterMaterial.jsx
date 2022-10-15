import { Add, Remove } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ListCounterMaterial({ unitName }) {
	const [counter, setCounter] = useState(0);
	const handleAdd = () => setCounter((prev) => prev + 1);
	const handleMinus = () => setCounter((prev) => (prev < 1 ? prev : prev - 1));

	return (
		<Stack direction="row" spacing={0.5} alignItems="center">
			<IconButton onClick={handleMinus}>
				<Remove fontSize="small" />
			</IconButton>
			<Typography>{counter + " " + unitName}</Typography>
			<IconButton onClick={handleAdd}>
				<Add fontSize="small" />
			</IconButton>
		</Stack>
	);
}

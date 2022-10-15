import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import useHandleRouting from "../../features/useHandleRouting";

export default function HeadingPage({ title, subtitle = "" }) {
	const routing = useHandleRouting();
	return (
		<Stack alignItems="flex-start" sx={{ mb: 4 }} spacing={2}>
			<IconButton onClick={routing.handleBack()}>
				<ArrowBack sx={{ fontSize: "32px" }} />
			</IconButton>
			<div>
				{subtitle.length ? (
					<Typography
						variant="subtitle"
						gutterBottom
						sx={{ fontSize: "1rem", opacity: 0.7 }}
					>
						{subtitle}
					</Typography>
				) : (
					<></>
				)}
				<Typography variant="h1">{title}</Typography>
			</div>
		</Stack>
	);
}

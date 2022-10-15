import React from "react";
import Widget from "../components/Widget";
import icon from "../assets/megaphone.png";
import user from "../assets/user.png";
import FullViewLayout from "../components/Layout/FullViewLayout";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function Homepage() {
	return (
		<FullViewLayout>
			<div className="py-4">
				<div className="flex justify-between items-center">
					<Typography variant="h1" sx={{ fontWeight: 700 }}>
						🦺 GoKang
					</Typography>
					<IconButton>
						<AccountCircle fontSize="large" color="primary" />
					</IconButton>
				</div>
				<div className="space-y-10">
					<Widget type="servis" />
					<Widget type="currentProject" />
					<Widget type="history" />
				</div>
			</div>
		</FullViewLayout>
	);
}

import { MyLocation } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function HeaderComponent({ type }) {
	if (type === "problem") {
		return (
			<div className="space-y-3">
				<Stack direction="row" spacing={2} alignItems="flex-end">
					<Typography variant="h2" sx={{ fontWeight: 500 }}>
						Lokasi
					</Typography>
					<Typography
						variant="subtitle"
						sx={{ fontWeight: 500, fontSize: "0.875rem" }}
					>
						Ubah
					</Typography>
				</Stack>
				<div className="flex gap-5 items-start">
					<MyLocation fontSize="small" color="secondary" />
					<Typography>
						Bara 4 No. 61, Babakan, Dramaga, Bogor, Jawa Barat
					</Typography>
				</div>
			</div>
		);
	}
	if (type === "date") {
		return <h2>Tanggal</h2>;
	}
	if (type === "photo") {
		return <h2>Tambah foto lebih mantap!</h2>;
	}
}

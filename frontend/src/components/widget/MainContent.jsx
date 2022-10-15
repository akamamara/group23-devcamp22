import { Grid, Typography } from "@mui/material";
import React from "react";
import airServis from "../../assets/kangAir.jpg";
import { servisBangunan } from "../../utils/dummyServis";
import CardServices from "./CardServices";
function MainContent({ type }) {
	const content = null;

	const data = ["Bangunan", "Kebun", "Air"];
	const emoticon = ["⛑️", "🪴", "🪠"];

	if (type === "servis") {
		return (
			<Grid
				container
				justifyContent="space-between"
				spacing="1"
				sx={{ px: 2, pb: 2 }}
			>
				{data.map((item, index) => (
					<Grid item sx={{ width: "32%" }}>
						<CardServices
							text={
								<>
									Tukang <br /> {item}
								</>
							}
							emoticon={emoticon[index]}
						/>
					</Grid>
				))}
			</Grid>
		);
	}
	if (type === "currentProject") {
		return (
			<div className="max-w-full overflow-scroll flex gap-4 scrollbar-hide">
				{servisBangunan.map((servis, ind) => (
					<div
						key={ind}
						className="relative flex-1 min-w-[280px] h-32 rounded-[8px] border bg-white"
					>
						<div className="flex flex-row absolute bottom-0 left-0 p-2">
							<Typography sx={{ fontSize: "3.25rem" }}>🏛️</Typography>
							<div>
								<Typography variant="h2" sx={{ fontSize: "1.2rem" }}>
									{servis.category}
								</Typography>
								<Typography sx={{ opacity: 0.7 }}>{servis.name}</Typography>
								<Typography sx={{ opacity: 0.7 }}>
									{servis.rangePrice}
								</Typography>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
	if (type === "history") {
		return (
			<div className="max-w-full overflow-scroll flex gap-4 scrollbar-hide">
				{servisBangunan.map((servis, ind) => (
					<div
						key={ind}
						className="relative flex-1 min-w-[280px] h-32 rounded-[8px] border bg-white"
					>
						<div className="flex flex-row absolute bottom-0 left-0 p-2">
							<Typography sx={{ fontSize: "3.25rem" }}>🏛️</Typography>
							<div>
								<Typography variant="h2" sx={{ fontSize: "1.2rem" }}>
									{servis.category}
								</Typography>
								<Typography sx={{ opacity: 0.7 }}>{servis.name}</Typography>
								<Typography sx={{ opacity: 0.7 }}>
									{servis.rangePrice}
								</Typography>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
	return <div>{content}</div>;
}

export default MainContent;

import { Grid } from "@mui/material";
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
			<div className="max-w-full overflow-scroll flex gap-6 scrollbar-hide">
				{servisBangunan.map((servis, ind) => (
					<div key={ind} className="relative flex-1 min-w-[300px]">
						<img
							src="https://i.ytimg.com/vi/5UPdRF5xpVM/maxresdefault.jpg"
							className="w-full h-auto"
						/>
						<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
							<h1 className="text-green-300">{servis.name}</h1>
						</div>
					</div>
				))}
			</div>
		);
	}
	if (type === "history") {
		return (
			<div className="max-w-full overflow-scroll flex gap-6 scrollbar-hide">
				{servisBangunan.map((servis, ind) => (
					<div key={ind} className="relative flex-1 min-w-[300px]">
						<img
							src="https://i.ytimg.com/vi/5UPdRF5xpVM/maxresdefault.jpg"
							className="w-full h-auto"
						/>
						<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
							<h1 className="text-green-300">{servis.name}</h1>
						</div>
					</div>
				))}
			</div>
		);
	}
	return <div>{content}</div>;
}

export default MainContent;

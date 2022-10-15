import React from "react";
import { Stack } from "@mui/material";

import imagePlaceholder from "../../assets/placeholder_image.jpg";
import ListHeaderMaterial from "./ListHeaderMaterial";
import ListCounterMaterial from "./ListCounterMaterial";

export default function ListMaterial() {
	return (
		<Stack direction="row" justifyContent="space-between">
			<Stack direction="row" spacing={1.5} alignItems="center">
				<img
					src={imagePlaceholder}
					className="object-cover h-[4rem] w-[4rem] rounded-[8px]"
					alt="Placeholder"
				/>
				<ListHeaderMaterial title="Cat Aviant" price="20.000,00" />
			</Stack>

			<ListCounterMaterial unitName="kg" />
		</Stack>
	);
}

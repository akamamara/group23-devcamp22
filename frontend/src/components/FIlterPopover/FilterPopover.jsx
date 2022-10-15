import {
	ButtonBase,
	Divider,
	ListItemText,
	MenuList,
	Stack,
} from "@mui/material";
import React from "react";

export default function FilterPopover({ listItem }) {
	const listMapping = listItem.map((list) => (
		<ButtonBase sx={{ my: 0 }}>
			<ListItemText sx={{ px: 2.5, py: 0.5 }}>{list}</ListItemText>
		</ButtonBase>
	));

	return (
		<MenuList>
			<Stack divider={<Divider fullWidth sx={{ my: 0 }} />}>
				{listMapping}
			</Stack>
		</MenuList>
	);
}

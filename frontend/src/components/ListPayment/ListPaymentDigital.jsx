import { Card, List, ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Switch from "@mui/material/Switch/Switch";
import React from "react";
import GopayIcon from "../../assets/icon/GopayIcon";

export default function ListPaymentDigital() {
	const [checked, setChecked] = React.useState([]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<Card elevation={3}>
			<List sx={{ bgcolor: "background.paper" }}>
				<ListItem>
					<ListItemIcon>
						<GopayIcon fontSize="large" />
					</ListItemIcon>
					<ListItemText id="switch-list-label-gopay" primary="GoPay" />
					<Switch
						edge="end"
						onChange={handleToggle("gopay")}
						checked={checked.indexOf("gopay") !== -1}
						inputProps={{
							"aria-labelledby": "switch-list-label-gopay",
						}}
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<GopayIcon fontSize="large" />
					</ListItemIcon>
					<ListItemText
						id="switch-list-label-gopaycoins"
						primary="GoPay Coins"
					/>
					<Switch
						edge="end"
						onChange={handleToggle("gopaycoins")}
						checked={checked.indexOf("gopaycoins") !== -1}
						inputProps={{
							"aria-labelledby": "switch-list-label-gopaycoins",
						}}
					/>
				</ListItem>
			</List>
		</Card>
	);
}

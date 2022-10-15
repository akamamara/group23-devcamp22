import React from "react";
import {
	Card,
	CardHeader,
	Divider,
	List,
	ListItem,
	ListItemButton,
	Radio,
	Stack,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText/ListItemText";

export default function ListPayment() {
	const [checked, setChecked] = React.useState(0);

	const handleToggle = (value) => () => {
		console.log(value);
		// setChecked(value);
	};

	const listPayment = ["💵 Tunai", "🏛️ Transfer Bank"];
	const listPaymentBtn = listPayment.map((el, index) => (
		<>
			<ListItem sx={{ py: 1 }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{ width: "100%" }}
				>
					<ListItemText>{el}</ListItemText>
					<Radio onChange={handleToggle} value={index === checked} />
				</Stack>
			</ListItem>
			{index !== listPayment.length - 1 && <Divider />}
		</>
	));

	return (
		<Card>
			<CardHeader title="Metode Pembayaran" />
			<Divider fullWidth />
			<List sx={{ py: 0 }}>{listPaymentBtn}</List>
		</Card>
	);
}

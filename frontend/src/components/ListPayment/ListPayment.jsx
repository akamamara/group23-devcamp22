import React from "react";
import {
	Button,
	Card,
	CardHeader,
	Divider,
	FormControl,
	FormControlLabel,
	List,
	ListItem,
	ListItemButton,
	Radio,
	RadioGroup,
	Stack,
	Typography,
	useRadioGroup,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText/ListItemText";

export default function ListPayment() {
	const [checked, setChecked] = React.useState(0);

	const handleToggle = (event) => {
		setChecked(event.target.value);
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
					<FormControlLabel
						sx={{ m: 0 }}
						value={index}
						control={<Radio />}
						disableTypography
					/>
				</Stack>
			</ListItem>
			{index !== listPayment.length - 1 && <Divider />}
		</>
	));

	return (
		<Card elevation={3}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="baseline"
				sx={{ p: 2 }}
			>
				<Typography variant="h2">Metode Pembayaran</Typography>
				<Button size="small">Ubah</Button>
			</Stack>
			<Divider fullWidth />
			<List sx={{ py: 0 }}>
				<FormControl sx={{ width: "100%" }}>
					<RadioGroup value={checked} onChange={handleToggle}>
						{listPaymentBtn}
					</RadioGroup>
				</FormControl>
			</List>
		</Card>
	);
}

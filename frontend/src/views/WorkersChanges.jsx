import { FilterList, Search } from "@mui/icons-material";
import { Button, Menu, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import FilterPopover from "../components/FIlterPopover/FilterPopover";
import HeadingPage from "../components/HeadingPage/HeadingPage";
import ListViewLayout from "../components/Layout/ListViewLayout";
import CardPekerja from "../components/ListPekerja/CardPekerja";

export default function WorkersChanges() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const dummyList = Array(8)
		.fill()
		.map((_) => <CardPekerja />);

	return (
		<ListViewLayout>
			<HeadingPage title="👷🏼 Tukang lainnya" />
			<Stack direction="row" spacing={1} sx={{ mb: 2 }}>
				<OutlinedInput
					fullWidth
					startAdornment={
						<Search color="inherit" sx={{ mr: 1, fontSize: "1.3rem" }} />
					}
					variant="outlined"
				/>
				<Button
					startIcon={<FilterList />}
					sx={{ minWidth: "6rem" }}
					onClick={handleClick}
				>
					Filter
				</Button>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					sx={{
						mt: 0.5,
						"& .MuiList-root": {
							py: 0,
						},
					}}
				>
					<FilterPopover listItem={["Harga", "Tanggal"]} />
				</Menu>
			</Stack>
			<Stack spacing={2}>{dummyList}</Stack>
		</ListViewLayout>
	);
}

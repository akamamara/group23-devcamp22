import { FilterList, Search } from "@mui/icons-material";
import { Button, Menu, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FilterPopover from "../components/FIlterPopover/FilterPopover";
import HeadingPage from "../components/HeadingPage/HeadingPage";
import ListViewLayout from "../components/Layout/ListViewLayout";
import CardPekerja from "../components/ListPekerja/CardPekerja";
import dataTukang from "../utils/tukang.json";

export default function WorkersChanges() {
	const { data } = dataTukang;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [dataMap, setDataMap] = React.useState(data);

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleOnChange = (e) => {
		const dat = data.filter((item) =>
			item.name.toLowerCase().includes(e.target.value.toString().toLowerCase())
		);
		setDataMap(dat);
	};

	const dummyList = dataMap.map((data) => (
		<CardPekerja data={data} id={data.id} />
	));

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
					onChange={handleOnChange}
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

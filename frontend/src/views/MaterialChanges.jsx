import { FilterList, Search } from "@mui/icons-material";
import {
	Card,
	Divider,
	Stack,
	OutlinedInput,
	Button,
	Menu,
} from "@mui/material";
import React from "react";
import BottomSheetPrice from "../components/BottomSheetPrice/BottomSheetPrice";
import FilterPopover from "../components/FIlterPopover/FilterPopover";
import HeadingPage from "../components/HeadingPage/HeadingPage";
import ListViewLayout from "../components/Layout/ListViewLayout";
import ListMaterial from "../components/ListMaterial/ListMaterial";

export default function MaterialChanges() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const dummyList = Array(18)
		.fill()
		.map((_) => <ListMaterial />);

	return (
		<ListViewLayout>
			<div className="pb-[9rem]">
				<HeadingPage title={"🚧 Bahan yang diperlukan"} />
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
				<Stack spacing={3}>
					<Card sx={{ p: 2 }}>
						<Stack
							divider={<Divider orientation="horizontal" flexItem />}
							spacing={2}
						>
							{dummyList}
						</Stack>
					</Card>
				</Stack>
				<BottomSheetPrice
					title="Biaya Bahan"
					keyPrice={[""]}
					valuePrice={["6.000.000"]}
				/>
			</div>
		</ListViewLayout>
	);
}
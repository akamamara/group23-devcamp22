import { Stack } from "@mui/material";
import React from "react";
import BottomSheetPrice from "../components/BottomSheetPrice/BottomSheetPrice";
import HeadingPage from "../components/HeadingPage/HeadingPage";
import ListViewLayout from "../components/Layout/ListViewLayout";
import ListPayment from "../components/ListPayment/ListPayment";
import ListPaymentDigital from "../components/ListPayment/ListPaymentDigital";

export default function Payment() {
	const keyArr = ["First Payment", "Sisa"];
	const valArr = ["2.000.000", "-4.000.000"];
	return (
		<ListViewLayout>
			<HeadingPage title="💳 Selesaikan pembayaran" />
			<Stack spacing={3}>
				<ListPaymentDigital />
				<ListPayment />
			</Stack>
			<BottomSheetPrice title="Biaya" keyPrice={keyArr} valuePrice={valArr} />
		</ListViewLayout>
	);
}

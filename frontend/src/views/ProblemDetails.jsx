import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Details from "../components/Details";
import ListViewLayout from "../components/Layout/ListViewLayout";
import HeadingPage from "../components/HeadingPage/HeadingPage";
import useHandleRouting from "../features/useHandleRouting";
import NLPData from "../utils/data.json";
import { addDetailProblem } from "../reducers/problemDetailsReducer";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

export default function ProblemDetails() {
	const routing = useHandleRouting();
	const history = useHistory();

	const [words, setWords] = useState("");
	const { servis } = NLPData;

	console.log(servis);

	const handleChange = (e) => {
		setWords(e.target.value);
	};

	const dispatch = useDispatch();
	const problemDetails = useSelector((state) => state.problemDetails);

	console.log(problemDetails);

	const handleSubmit = () => {
		const keywordsDasar = servis.map((s) => s.dasar);
		let isFound = false;
		for (let kata of words.split(" ")) {
			const ind = keywordsDasar.indexOf(kata.toLowerCase());
			if (ind >= 0) {
				isFound = true;
				dispatch(addDetailProblem(servis[ind].rinci[0]));
				break;
			}
		}
		if (isFound) history.push("/result");
	};

	return (
		<ListViewLayout>
			<HeadingPage title={"👋 Apa yang kamu butuhkan"} />
			<Details type="problem" onChange={handleChange} />
			<Details type="date" />
			<Details type="photo" />
			<div className="flex justify-between space-x-2 py-6">
				<Button variant="outlined" fullWidth>
					Reset
				</Button>
				<Button variant="contained" fullWidth onClick={handleSubmit}>
					Submit
				</Button>
			</div>
		</ListViewLayout>
	);
}

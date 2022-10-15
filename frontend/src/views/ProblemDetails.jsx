import React, { useState } from "react";
import Details from "../components/Details";
import useHandleRouting from "../features/useHandleRouting";

import NLPData from "../utils/data.json";
import { useDispatch, useSelector } from "react-redux";
import { addDetailProblem } from "../reducers/problemDetailsReducer";
export default function ProblemDetails() {
	const routing = useHandleRouting();
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
		for (let kata of words.split(" ")) {
			const ind = keywordsDasar.indexOf(kata.toLowerCase());
			if (ind >= 0) {
				dispatch(addDetailProblem(servis[ind].rinci[0]));
				break;
			}
		}
	};
	return (
		<main className="py-8 px-7 bg-slate-200 min-h-screen">
			<img
				src="https://api.iconify.design/ic:baseline-arrow-back.svg?color=%23888888"
				className="w-8 h-8 cursor-pointer"
				onClick={routing.handleBack()}
			/>
			<p className="mt-10">Tukang Bangunan</p>
			<h1>👋 Apa yang kamu butuhkan</h1>
			<Details type="problem" onChange={handleChange} />
			<Details type="date" />
			<Details type="photo" />
			<div className="flex justify-between">
				<button>Reset</button>
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</main>
	);
}

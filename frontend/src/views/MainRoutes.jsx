import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import MaterialChanges from "./MaterialChanges";
import Payment from "./Payment";
import ProblemDetails from "./ProblemDetails";
import SummaryDetails from "./SummaryDetails";
import WorkersChanges from "./WorkersChanges";

export default function MainRoutes() {
	return (
		<Router>
			<Switch>
				<Route path="/result/change/worker" exact component={WorkersChanges} />
				<Route
					path="/result/change/material"
					exact
					component={MaterialChanges}
				/>
				<Route path="/result/payment" exact component={Payment} />
				<Route path="/result" exact component={SummaryDetails} />
				<Route path="/input" exact component={ProblemDetails} />
				<Route path="/" exact component={Homepage} />
			</Switch>
		</Router>
	);
}

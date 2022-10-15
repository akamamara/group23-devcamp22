import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function useHandleRouting() {
	const history = useHistory();

	const handleRoutes = useCallback((path) => {
		return () => {
			history.push(path);
		};
	}, []);

	const handleBack = useCallback((path) => {
		return () => {
			history.goBack();
		};
	}, []);

	const handleReplace = useCallback((path) => {
		return () => {
			history.replace(path);
		};
	}, []);

	return { handleRoutes, handleBack, handleReplace };
}

import {
	Card,
	CardActionArea,
	CardContent,
	Stack,
	Typography,
} from "@mui/material";
import { Handyman, Money } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch } from "react-redux";
import imagePlaceholder from "../../assets/placeholder_image.jpg";
import ListDetail from "../ListDetailElement";
import useHandleRouting from "../../features/useHandleRouting";
import { changeMechanic } from "../../reducers/mechanicReducer";
import { useHistory } from "react-router-dom";
const CardPekerja = ({ id, data }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(changeMechanic(data));
		history.push("/result/change/worker/" + id);
	};
	return (
		<Card sx={{ mt: 2 }} elevation={2}>
			<CardActionArea onClick={handleClick}>
				<CardContent>
					<Stack direction="row" spacing={2} alignItems="flex-start">
						<img
							src={data.profile_img}
							alt="Placeholder"
							className="object-cover h-[6rem] w-[6rem] rounded-full"
						/>
						<Stack>
							<Typography
								variantMapping="h2"
								gutterButtom
								sx={{ fontWeight: 600 }}
							>
								{data.name}
							</Typography>
							<ListDetail
								icon={
									<LocationOnIcon
										fontSize="small"
										color="primary"
										sx={{ opacity: 0.7 }}
									/>
								}
							>
								{data.location}
							</ListDetail>
							<ListDetail
								icon={
									<Money
										fontSize="small"
										color="primary"
										sx={{ opacity: 0.7 }}
									/>
								}
							>
								{`Rp${data.price_low.toLocaleString()}–Rp${data.price_high.toLocaleString()}`}
							</ListDetail>
							<ListDetail
								icon={
									<Handyman
										fontSize="small"
										color="primary"
										sx={{ opacity: 0.7 }}
									/>
								}
							>
								{data.services.map((d) => (
									<>
										{d} <br />
									</>
								))}
							</ListDetail>
						</Stack>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardPekerja;

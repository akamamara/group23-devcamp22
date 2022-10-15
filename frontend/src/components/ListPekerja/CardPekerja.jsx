import {
	Card,
	CardActionArea,
	CardContent,
	Stack,
	Typography,
} from "@mui/material";
import { Money } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import imagePlaceholder from "../../assets/placeholder_image.jpg";
import ListDetail from "../ListDetailElement";

const CardPekerja = () => (
	<Card sx={{ mt: 2 }} elevation={2}>
		<CardActionArea>
			<CardContent>
				<Stack direction="row" spacing={2} alignItems="center">
					<img
						src={imagePlaceholder}
						alt="Placeholder"
						className="object-cover h-[6rem] w-[6rem] rounded-full"
					/>
					<Stack>
						<Typography
							variantMapping="h2"
							gutterButtom
							sx={{ fontWeight: 600 }}
						>
							Aldi Oktaviana Hidayat
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
							Cibanteng, Dramaga, Bogor
						</ListDetail>
						<ListDetail
							icon={
								<Money fontSize="small" color="primary" sx={{ opacity: 0.7 }} />
							}
						>
							Rp10.000.000,00
						</ListDetail>
					</Stack>
				</Stack>
			</CardContent>
		</CardActionArea>
	</Card>
);

export default CardPekerja;

import React, { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

interface TransactionProps {
	icon: string;
	variant: "warning" | "success" | "complete";
	message: string;
	value: string;
	statusValue: string;
	statusSubValue: string;
	date: string;
}

const variantIcon = {
	warning: "/images/arrow-top-right-thick.svg",
	success: "/images/arrow-bottom-right-thick.svg",
	complete: "/images/check-bold.svg",
};

function Transaction(props: TransactionProps) {
	// const data = useSelector((state: any) => state.transaction);
	// console.log("transactions are", data);
	const { icon, variant, value, statusValue, statusSubValue, date, message } =
		props;

	return (
		<Paper sx={{ padding: 2 }}>
			<Stack spacing={2.5} direction="row">
				<Box sx={{ width: 40, height: 40, position: "relative" }}>
					<Image
						src={icon}
						alt=""
						width={40}
						height={40}
						style={{ backgroundColor: "black", borderRadius: "50%" }}
					/>
					<Avatar
						sx={{
							width: 16,
							height: 16,
							position: "absolute",
							right: -0.5,
							bottom: -0.5,
						}}
						src={variantIcon[variant]}
						alt=""
					/>
				</Box>
				<Stack direction="row" alignItems="center" flexGrow={1}>
					<Typography variant="body2" color="text.secondary" flexGrow={1}>
						{message}
					</Typography>
					<Stack direction="row" alignItems="center">
						<Typography color="text.secondary" variant="body2">
							{value}
						</Typography>
						<IconButton color="primary">
							<OpenInNewIcon sx={{ fontSize: 20 }} />
						</IconButton>
					</Stack>
				</Stack>
			</Stack>
			<Divider variant="inset" sx={{ ml: 7.5, mb: 1.5 }} />
			<Stack direction="row" alignItems="flex-start" sx={{ ml: 7.5 }}>
				<Stack flexGrow={1}>
					<Typography fontWeight="medium">{statusValue}</Typography>
					<Typography color="text.disabled" variant="body2">
						{statusSubValue}
					</Typography>
				</Stack>
				<Typography color="text.secondary" variant="subtitle2">
					{date}
				</Typography>
			</Stack>
		</Paper>
	);
}

export default Transaction;

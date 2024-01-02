import axios from "axios";

const balanceApi = async (
	safe: string,
	network: string,
	func: any,
	load: any
) => {
	load((prev: any) => !prev);
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/wallet?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			const keys = Object.keys(response.data);
			if (keys[0] != "statusCode") {
				func(response.data);
			}
			load((prev: any) => !prev);
		})
		.catch((error) => {
			console.warn(error);
			load((prev: any) => !prev);
		});
};

const transactionApi = async (safe: string, func: any) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/all_transactions?query=${safe}`
		)
		.then((response: any) => {
			const keys = Object.keys(response.data);
			if (keys[0] != "statusCode") {
				func(response.data);
			}
		})
		.catch((error) => console.warn(error));
};

const balancesApi = async (safe: string, network: string, func: any) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/balances?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			const keys = Object.keys(response.data);
			console.log(response);
			if (keys[0] != "statusCode") {
				func(response.data);
			}
			// dispatch(storebalances(response.data));
		})
		.catch((error) => {
			console.warn(error);
		});
};

export { balanceApi, transactionApi, balancesApi };

const axios = require('axios');
require('dotenv').config();

const token = process.env.BLOCKCYPHER_TOKEN;

// Get Balance
const getBalance = async (currency, network, address) => {
	let url = `https://api.blockcypher.com/v1/${currency}/${network}/addrs/${address}/balance`;
	if (token) url += `?token=${token}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error({
			error: error.response.data.error
				? error.response.data.error
				: error,
		});
		return {
			error: error.response.data.error
				? error.response.data.error
				: error,
		};
	}
};

// Transaction List
const getTransactionList = async (currency, network, address) => {
	let url = `https://api.blockcypher.com/v1/${currency}/${network}/addrs/${address}/full`;
	if (token) url += `?token=${token}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error({
			error: error.response.data.error
				? error.response.data.error
				: error,
		});
		return {
			error: error.response.data.error
				? error.response.data.error
				: error,
		};
	}
};

// Get UTXO
const getUTXO = async (currency, network, address) => {
	let url = `https://api.blockcypher.com/v1/${currency}/${network}/addrs/${address}?unspentOnly=true`;
	if (token) url += `?token=${token}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error({
			error: error.response.data.error
				? error.response.data.error
				: error,
		});
		return {
			error: error.response.data.error
				? error.response.data.error
				: error,
		};
	}
};

// Get Transaction
const getTransaction = async (currency, network, txHash) => {
	let url = `https://api.blockcypher.com/v1/${currency}/${network}/txs/${txHash}`;
	if (token) url += `?token=${token}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error({
			error: error.response.data.error
				? error.response.data.error
				: error,
		});
		return {
			error: error.response.data.error
				? error.response.data.error
				: error,
		};
	}
};

// Submit Transaction
const submitTransaction = async (currency, network, txHex) => {
	let url = `https://api.blockcypher.com/v1/${currency}/${network}/txs/push`;
	if (token) url += `?token=${token}`;
	const data = {
		tx: txHex,
	};
	try {
		const response = await axios.post(url, data);
		return response.data;
	} catch (error) {
		console.error({
			error: error.response.data.error
				? error.response.data.error
				: error,
		});
		return {
			error: error.response.data.error
				? error.response.data.error
				: error,
		};
	}
};

module.exports = {
	getBalance,
	getTransactionList,
	getUTXO,
	getTransaction,
	submitTransaction,
};

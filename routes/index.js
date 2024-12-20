const router = require('express').Router();
const {
	getBalance,
	getTransactionList,
	getUTXO,
	getTransaction,
	submitTransaction,
} = require('../modules');

router.get('/balance/:network/:address', async (req, res) => {
	try {        
		const { address, network } = req.params;
		const response = await getBalance(network, 'main', address);
        if (response.error) {
            return res.status(400).send(response);
        }
		res.status(200).send(response);
	} catch (error) {
		console.log('Error in /balance - ', error);
		res.status(500).send('Internal Server Error');
	}
});

router.get('/transaction-list/:network/:address', async (req, res) => {
	try {
		const { address, network } = req.params;
		const response = await getTransactionList(network, 'main', address);
        if (response.error) {
            return res.status(400).send(response);
        }
		res.status(200).send(response);
	} catch (error) {
		console.log('Error in /transaction-list - ', error);
		res.status(500).send('Internal Server Error');
	}
});

router.get('/utxo/:network/:address', async (req, res) => {
	try {
		const { address, network } = req.params;
		const response = await getUTXO(network, 'main', address);
        if (response.error) {
            return res.status(400).send(response);
        }
		res.status(200).send(response);
	} catch (error) {
		console.log('Error in /utxo - ', error);
		res.status(500).send('Internal Server Error');
	}
});

router.get('/transaction/:network/:txHash', async (req, res) => {
	try {
		const { txHash, network } = req.params;
		const response = await getTransaction(network, 'main', txHash);
        if (response.error) {
            return res.status(400).send(response);
        }
		res.status(200).send(response);
	} catch (error) {
		console.log('Error in /transaction - ', error);
		res.status(500).send('Internal Server Error');
	}
});

router.post('/submit-transaction', async (req, res) => {
	try {
		const { txHex, network } = req.body;
		const response = await submitTransaction(network, 'main', txHex);
        if (response.error) {
            return res.status(400).send(response);
        }
		res.status(200).send(response);
	} catch (error) {
		console.log('Error in /submit-transaction - ', error);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = router;

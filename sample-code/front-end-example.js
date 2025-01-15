import { ApiPromise, WsProvider } from '@polkadot/api';
import { GearApi } from 'gear-js';

// Connect to the Gear blockchain node
const provider = new WsProvider('wss://gear-node-url'); // Replace with the actual node URL
const api = await ApiPromise.create({ provider });

// Initialize Gear API to interact with the contract
const gearApi = new GearApi(api);

async function interactWithContract() {
    // Example: Interact with the contract (replace with actual contract address)
    const contract = await gearApi.contract('your_contract_address'); // Replace with the contract address

    // Get the current counter value
    const value = await contract.query.get_value();
    console.log("Current counter value: ", value);

    // Increment the counter
    await contract.tx.increment();
    console.log("Counter incremented!");

    // Get the updated counter value
    const updatedValue = await contract.query.get_value();
    console.log("Updated counter value: ", updatedValue);
}

// Call the function to interact with the contract
interactWithContract();

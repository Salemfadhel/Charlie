import React, { useState } from 'react';
import { ethers } from 'ethers';
import CharlieSwap from './artifacts/CharlieSwap.json';

const SwapContractAddress = "0x1ce6C9567Fa5E4C97a7DaAFF75EAE9A0F2994776"; // CharlieSwap contract address on Polygon
const Token1Address = "your_token1_address"; // Replace with actual token address
const Token2Address = "your_token2_address"; // Replace with actual token address

function App() {
    const [amount, setAmount] = useState('');

    const swapTokens = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const swapContract = new ethers.Contract(SwapContractAddress, CharlieSwap.abi, signer);
        const tx = await swapContract.swap(Token1Address, Token2Address, ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        console.log("Swap completed!");
    };

    return (
        <div>
            <h1>CharlieSwap</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />
            <button onClick={swapTokens}>Swap</button>
        </div>
    );
}

export default App;

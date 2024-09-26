// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CharlieSwap {
    function swap(address fromToken, address toToken, uint256 amount) external {
        require(IERC20(fromToken).transferFrom(msg.sender, address(this), amount), "Transfer failed");
        require(IERC20(toToken).transfer(msg.sender, amount), "Transfer failed");
    }
}

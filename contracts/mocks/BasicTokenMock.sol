pragma solidity ^0.4.23;


import "../VeraCoin.sol";


// mock class using BasicToken
contract BasicTokenMock is VeraCoin {

  constructor(address initialAccount, uint256 initialBalance) public {
    balances[initialAccount] = initialBalance;
    totalSupply = initialBalance;
  }

}

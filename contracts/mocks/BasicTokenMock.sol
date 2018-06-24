pragma solidity ^0.4.11;


import "../VeraCoin.sol";


// mock class using BasicToken
contract BasicTokenMock is VeraCoin {

  function BasicTokenMock(address initialAccount, uint256 initialBalance) public {
    balances[initialAccount] = initialBalance;
    totalSupply = initialBalance;
  }

}

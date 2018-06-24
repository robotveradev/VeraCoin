const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const VeraCoin = artifacts.require('VeraCoin');

contract('VeraCoin', accounts => {
  const _name = 'VeraCoin';
  const _symbol = 'Vera';
  const _decimals = 18;
  const _iSupply = 15700000 * 1e18;

  beforeEach(async function () {
    this.token = await VeraCoin.new();
  });

  it('has a proper name', async function () {
    const name = await this.token.name();
    name.should.be.equal(_name);
  });

  it('has a proper symbol', async function () {
    const symbol = await this.token.symbol();
    symbol.should.be.equal(_symbol);
  });

  it('has a proper amount of decimals', async function () {
    const decimals = await this.token.decimals();
    decimals.should.be.bignumber.equal(_decimals);
  });

  it('has a proper initial supply', async function () {
    const iSupply = await this.token.INITIAL_SUPPLY();
    iSupply.should.be.bignumber.equal(iSupply);
  });

  it('has a proper total supply', async function () {
    const tSupply = await this.token.totalSupply();
    tSupply.should.be.bignumber.equal(_iSupply);
  });

  it('initial supply belongs to the sender', async function () {
    const iSupply = await this.token.balanceOf(accounts[0]);
    iSupply.should.be.bignumber.equal(_iSupply);
  });
});

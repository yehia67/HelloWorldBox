const simple = artifacts.require('./Simple.sol')

contract('Simple', (accounts) => {
    before(async() => {
        this.Simple = await simple.deployed()
    })

    it('deploys successfully', async() => {
        const address = await this.Simple.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })


    it('Set Function work well', async() => {
        const simple = await this.Simple.set("Simple Contract")
        const Hello = await this.Simple.hello()
        assert.equal(Hello, "Simple Contract")
    })
    it('Get Function work well', async() => {
        const simple = await this.Simple.set("Simple Contract")
        const Hello = await this.Simple.get()
        assert.equal(Hello, "Simple Contract")
    })


})
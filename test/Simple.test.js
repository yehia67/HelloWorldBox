const Hello = artifacts.require('./Hello.sol')

contract('Hello', (accounts) => {
    before(async() => {
        this.Hello = await Hello.deployed()
    })

    it('deploys successfully', async() => {
        const address = await this.Hello.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })


    it('Set Function work well', async() => {
        const Hello = await this.Hello.set("Hello Contract")
        const Hello = await this.Hello.hello()
        assert.equal(Hello, "Hello Contract")
    })
    it('Get Function work well', async() => {
        const Hello = await this.Hello.set("Hello Contract")
        const Hello = await this.Hello.get()
        assert.equal(Hello, "Hello Contract")
    })


})
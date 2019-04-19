class Token {
    constructor(key) {
		this.apiToken = key;
	}
	static authentication(key) {
		console.log(key); //15
	}
}

export default new Token();
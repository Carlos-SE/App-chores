
function test(entry) {
	return typeof entry === 'string';
}

describe('Test', () => {
	it('Testing test function', () => {
		expect(test('asdf')).to.eq(true);
	})
})
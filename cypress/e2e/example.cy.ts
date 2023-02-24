import ExampleDsl from "../dsl/exampleDsl";

describe("Example", () => {
	it("can find the game data element", () => {
		let pageObject = new ExampleDsl();
		pageObject.validateExampleKeyExists();
	});
});

import GameScene from "./gameScene";

export default class ExampleScene extends GameScene {
	constructor() {
		super({
			key: "ExampleScene",
		});
		this.writeDebugData("test", "test");
	}
}

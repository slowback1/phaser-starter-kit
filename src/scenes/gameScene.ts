import { HtmlDataWriter } from "../utils/gameDataWriter";

const LOCAL_DOMAINS = ["localhost", "127.0.0.1", "[::1]"];

export default abstract class GameScene extends Phaser.Scene {
	protected constructor(config: Phaser.Types.Scenes.SettingsConfig) {
		super(config);
	}

	protected writeDebugData(key: string, value: any) {
		const isInLocalDomain = LOCAL_DOMAINS.includes(window.location.hostname);

		if (isInLocalDomain) {
			let writer = new HtmlDataWriter();
			writer.addData(key, value);
		}
	}
}

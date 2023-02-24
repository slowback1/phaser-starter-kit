import DSL from "./dsl";
import CyGameDataUtilities from "../utils/cyGameDataUtilities";

export default class ExampleDsl extends DSL {
	validateExampleKeyExists() {
		CyGameDataUtilities.validateKeyIsEqualToValue("test", "test");
	}
}

import { describe, it, expect } from "bun:test";
import { add } from "../src/arithmethic";

describe("Bun Test Runner: arithmethic.ts", () => {
	it("running test for add()", async () => {
		const response = add(5, 15);
		expect(response).toBe(20);
	});
});

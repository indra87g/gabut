import { describe, it, expect } from "bun:test";
import { greetName, customGreet } from "../src/greet";

describe("Bun Test Runner: greet.ts", () => {
	it("running test for greetName()", async () => {
		const response = greetName("John");
		expect(response).toBe("Hello, John!");
	});

	it("Running test for customGreet()", () => {
		const response = customGreet("John", "Welcome");
		expect(response).toBe("Welcome, John!");
	});
});

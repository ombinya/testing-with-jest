const {
	getLargestCat,
	getCatInfo,
	getCatsCanLiveToAge,
} = require("../src/cat-facts");
const cats = require("../data/cats"); // Cat data

describe("getLargestCat()", () => {
	test("Should return an object where the key is the name of largest cat, and the value is it's size", () => {
		const actual = getLargestCat(cats);

		const keys = Object.keys(actual);
		expect(keys.length).toEqual(1);

		const name = keys[0];
		expect(name).toEqual("African Lion");
		expect(actual[name]).toEqual(4.0);
	});

	test("Should return an empty object if the cats list is empty", () => {
		const actual = getLargestCat([]);
		const expected = {};

		expect(actual).toEqual(expected);
	});

	describe("getCatInfo()", () => {
		test("Should return a string description of a cat, by ID", () => {
			const id = "c7Kx2vYq0RjP";
			const actual = getCatInfo(cats, id);
			const expected =
				"Puma (Puma concolor)\nPumas are known for their sleek bodies and wide distribution across the Americas.";
			expect(actual).toEqual(expected);
		});

		test("Should return an error message if the cat cannot be found", () => {
			const id = "some-id";
			const actual = getCatInfo(cats, id);
			const expected =
				"A cat with an ID of 'some-id' cannot be found.";
			expect(actual).toEqual(expected);
		});
	});
	describe("getCatsCanLiveToAge()", () => {
		test("Should return an array containing the CatIDs of all cats that can live to or past the target lifespan", () => {
			const targetLifespan = 18;
			const actual = getCatsCanLiveToAge(
				cats,
				targetLifespan
			);
			const expected = [
				"c1Yh4oPw9KlS",
				"c4Gp0oLx9MwQ",
				"c5Xu3yHr7ZpV",
				"c8Cp4oYv3TwS",
				"c1Wp7oXv4NlT",
				"c3Pn8sHr2MkS",
				"c4Lw0oPv9QjZ",
				"c7Kx2vYq0RjP",
			];

			expect(actual).toEqual(expected);
		});

		test("Should return an empty array if no cat can live to or past the target lifespan", () => {
			const targetLifespan = 25;
			const actual = getCatsCanLiveToAge(
				cats,
				targetLifespan
			);

			const expected = [];
			expect(actual).toEqual(expected);
		});
	});
});

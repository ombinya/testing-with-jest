const catData = require("../data/cats");
/**
 * Returns an object with the largest cat from the list.
 *
 * @param {Object[]} cats
 * @returns {Object} An object where the key is the name of the cat and the value is it's the size.
 *
 * Example:
 * getLargestCat(cats);
 * //> {"African Lion": 4.0}
 */
function getLargestCat(cats) {
	let largestSize = 0;
	let largestCat;

	// Return an empty object because there are no cats
	if (cats.length == 0) {
		return new Object();
	}

	// Determine the largest cat be comparing 'Size' values
	for (let i = 0; i < cats.length; i++) {
		let cat = cats[i];

		if (cat.Size > largestSize) {
			largestSize = cat.Size;
			largestCat = cat;
		}
	}
	//
	let largestCatObj = new Object();
	largestCatObj[largestCat.Name] = largestCat.Size;

	return largestCatObj;
}

/**
 * Returns a formatted description of a cat. If the cat cannot be found, returns an error message.
 * Note that the '\n' creates a new line in the text.
 *
 * @param {Object[]} cats - An array of cat objects. Reference: 'data/cats.js'.
 * @param {string} id - The unique identifier for a cat.
 * @returns {string} A detailed description of the cat.
 *
 * EXAMPLE:
 * getCatInfo(cats, "c7Kx2vYq0RjP");
 * //> "Puma (Puma concolor)\nPumas are known for their sleek bodies and wide distribution across the Americas."
 *
 * getCatinfo(cats, "some-id");
 * //> "A cat with an ID of 'some-id' cannot be found."
 */
function getCatInfo(cats, id) {
	let cat;

	// Find cat eith a CatID of param 'id'
	for (let i = 0; i < cats.length; i++) {
		if (cats[i].CatID === id) {
			cat = cats[i];
			break;
		}
	}

	if (cat) {
		let info =
			cat.Name +
			" (" +
			cat.Species +
			")\n" +
			cat.Description;
		// Cat has been found
		return info;
	} else {
		// Cat with CatID of param 'id' not found
		return (
			"A cat with an ID of '" +
			id +
			"' cannot be found."
		);
	}
}

/**
 * Returns an array of cats who can live to and past the target lifespan. Otherwise, returns empty array.
 *
 * @param {Object[]} cats
 * @param {number} lifespan
 * @returns {string[]} An array of values representing the CatIDs of cats which can live to or past the target lifespan. Otherwise, the array will be empty.
 *
 * EXAMPLE:
 * getCatsCanLiveToAge(cats, 18);
 * //> ["c1Yh4oPw9KlS", "c4Gp0oLx9MwQ", "c5Xu3yHr7ZpV", "c8Cp4oYv3TwS", "c1Wp7oXv4NlT", "c3Pn8sHr2MkS", "c4Lw0oPv9QjZ", "c7Kx2vYq0RjP"]
 *
 * getCatsCanLiveToAge(cats, 25);
 * //> []
 */

function getCatsCanLiveToAge(cats, lifespan) {
	let targetCats = [];

	for (let i = 0; i < cats.length; i++) {
		let cat = cats[i];
		// Cat can live to or past the target lifespan
		if (cat.Lifespan >= lifespan) {
			targetCats.push(cat.CatID);
		}
	}

	return targetCats;
}

module.exports = {
	getLargestCat,
	getCatInfo,
	getCatsCanLiveToAge,
};

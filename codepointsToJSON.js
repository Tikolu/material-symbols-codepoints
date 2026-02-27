/*
 * Converts a .codepoints file to a JSON file.
 * Usage: deno --allow-read --allow-write codepointsToJSON.js input.codepoints output.json
 */

// Default args
const inputFile = Deno.args[0] || "MaterialSymbols.codepoints"
const outputFile = Deno.args[1] || "MaterialSymbols.json"

// Read input file
const codepoints = await Deno.readTextFile(inputFile)

const output = {}
for(const line of codepoints.split("\n")) {
	const entry = line.split(" ")
	// Skip invalid entries
	if(entry.length != 2) continue

	output[entry[0]] = parseInt(entry[1], 16)
}

// Write output file
await Deno.writeTextFile(outputFile, JSON.stringify(output, null, 2))
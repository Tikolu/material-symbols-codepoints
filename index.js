import codepoints from "./MaterialSymbols.json" with {type: "json"}

/**
 * Returns the codepoint for the given icon name
 * @param {string} icon - The "icon name" from https://fonts.google.com/icons
 * @returns {number} The codepoint of the icon
 * @throws Throw an error if the icon name is not found
 */
export function iconCodepoint(icon) {
	const codepoint = codepoints[icon]
	if(!codepoint) throw new Error(`Icon "${icon}" not found`)
	return codepoint
}

/**
 * Returns a hexadecimal string representing the codepoint for the given icon name
 * @param {string} icon - The "icon name" from https://fonts.google.com/icons
 * @returns {string} A hexadecimal string representing the codepoint of the icon
 * @throws Throw an error if the icon name is not found
 */
export function iconHex(icon) {
	const codepoint = iconCodepoint(icon)
	return codepoint.toString(16)
}

/**
 * Returns the literal symbol for the given icon name, which can be used in HTML using the Material Symbols font
 * @param {string} icon - The "icon name" from https://fonts.google.com/icons
 * @returns {string} The symbol of the icon
 * @throws Throw an error if the icon name is not found
 */
export function iconSymbol(icon) {
	const codepoint = iconCodepoint(icon)
	return String.fromCodePoint(codepoint)
}

/**
 * Returns the HTML entity for the given icon name
 * @param {string} icon - The "icon name" from https://fonts.google.com/icons
 * @returns {string} The HTML entity of the icon
 * @throws Throw an error if the icon name is not found
 */
export function iconEntity(icon) {
	const hex = iconHex(icon)
	return `&#x${hex.toUpperCase()};`
}
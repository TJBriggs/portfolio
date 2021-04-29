/**
 * Helper Function to insert toggles above
 *
 * @param {string} el element to insert
 * @param {string} referenceNode node to insert el
 */
export default function insertBefore(el, referenceNode) {
	referenceNode.parentNode.insertBefore(el, referenceNode);
}

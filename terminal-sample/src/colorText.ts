// Before the textt function.

/**
 *
 * @param textt - the text to color
 * @returns
 */
export function colorTextt(textt: string): string {
    let output = '';
    let colorIndex = 1;
    for (let i = 0; i < textt.length; i++) {
        const char = textt.charAt(i);
        if (char === ' ' || char === '\r' || char === '\n') {
            output += char;
        } else {
            output += `\x1b[3${colorIndex++}m${textt.charAt(i)}\x1b[0m`;
            if (colorIndex > 6) {
                colorIndex = 1;
            }
        }
    }
    return output;
}

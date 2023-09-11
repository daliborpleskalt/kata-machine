export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpLength = Math.floor(Math.sqrt(breaks.length));

    let i = jumpLength;
    for (; i < breaks.length; i += jumpLength) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpLength;

    for (let j = 0; j <= jumpLength && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
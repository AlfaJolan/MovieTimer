function concatenateStrings(arr) {
    if (arr && arr.length > 0) {
        return arr.join(', ');
    } else {
        return '???';
    }
}
export default concatenateStrings;
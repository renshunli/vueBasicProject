export default (s, e = {}) => {
    for (var i in s) {
        e[i] = s[i]
    }
    return e
}

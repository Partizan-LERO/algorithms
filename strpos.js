function strpos(substr, str) {
    const m = substr.length;
    const n = str.length;

    for(i = 0; i <= (n-m); i++) {
        j = 0;
        while(j < m && str[i+j] === substr[j]) {
            j++;
        }
        if (j === m) {
            return i;
        }
    }
    return -1;
}

console.log(strpos('Maker', 'How to make it? Ask a Maker'));

function reverse(str) {
    // the first solution
    // return str.split('').reverse().join('');

    // the second solution
    /* let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed; */

    // the third solution
    return str.split('').reduce((reversed, character) => {
        return  character + reversed;
    }, '');
}

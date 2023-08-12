'use strict';

const alphabet = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k', 'l', 'ł', 'm','n','ń','o','ó','p','q','r','s','ś','t','u','w','y','z','ź','ż'];
const emoji = ['😄','🌟','🍉','🎈','🐦','🌻','🌈','🚀','🎸','🍕','🐶','🌊','🍔','🌸','🚲','🌮','🐱','🍦','🎉','🍓','🌺','🏓','🍩','🐼','🎁','🍒','🚁','🎮','🍋','🌼','📚','🍪','🎤'];

const codeEmoji = function (string) {
    let emojiString = '';
    const formatedString = string.trim().toLocaleLowerCase();

    for (let i = 0; i < formatedString.length; i++)
    {
        emojiString += emoji[alphabet.indexOf(formatedString[i])] ?? ' ';
    }
    return emojiString;
};

const emojiToArray = function(emojiStr) {
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    const emojiArr = emojiStr.match(emojiRegex);
    return emojiArr;
}

const unCodeEmoji = function (emojiString) {
    const emojiArr = emojiToArray(emojiString.trim());
    let letterString = '';
    for (let i = 0; i < emojiArr.length; i++)
    {
        letterString += alphabet[emoji.indexOf(emojiArr[i])] ?? ' ';
    }
    console.log(letterString);
    return letterString;
}
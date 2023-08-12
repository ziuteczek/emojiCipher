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
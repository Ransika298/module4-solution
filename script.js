/*
Solution of assignment 4:

Expected output:

Hello Amal
Good Bye John
Good Bye Jenny
Good Bye Jason
Hello Piyal
Hello Sunil
Hello Larry
Hello Prasad
Hello Lakshan
Good Bye jerry
*/

(function() {
    var names = ["Amal", "John", "Jenny", "Jason", "Piyal", "Sunil", "Larry", "Prasad", "Lakshan", "jerry"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

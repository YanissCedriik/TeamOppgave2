// @Nico
function changeImage(state) {
    var imageElement = document.getElementById("animal-image");
    if (state === "clean") {
        imageElement.src =
            "https://cdn.discordapp.com/attachments/1268499850765533216/1278973660635463681/koala.png?ex=66d2c08a&is=66d16f0a&hm=eff8a150528354631ef69b9a3ae019d768de9e1bb1976481dea7c5c33bb8c593&";
    } else if (state === "sad") {
        imageElement.src =
            "https://cdn.discordapp.com/attachments/1268499850765533216/1278973687189475361/koala_sad.png?ex=66d2c091&is=66d16f11&hm=69df83e00c9b7f185890f7910d6c406b3713bfd9ab1404597c0ee3d2a3005dc0&";
    } else if (state === "dirty") {
        imageElement.src =
            "https://cdn.discordapp.com/attachments/1268499850765533216/1278973714825875497/koala_dirty.png?ex=66d2c097&is=66d16f17&hm=8171078517a412c370709bf93eeda2f40e472106b20a56426d055e272c23f0d7&";
    } else if (state === "Happy") {
        imageElement.src =
            "https://cdn.discordapp.com/attachments/1268499850765533216/1278973735642333205/koala_happy.png?ex=66d2c09c&is=66d16f1c&hm=77869b00e1c7687b3a986d5c7b2b7d407fa42089c71cc5a76f5e9a68b99e57eb&";
    }
}




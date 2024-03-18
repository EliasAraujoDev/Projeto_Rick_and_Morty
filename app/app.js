$(document).ready(function() {
    $.ajax({
        url: '/characters',
        type: 'GET',
        success: function(data) {
            displayCharacters(data);
        }
    });
});

function displayCharacters(characters) {
    var charactersList = $('#characters-list');
    characters.forEach(function(character) {
        var characterCard = $('<div class="character-card">');
        var characterName = $('<h2>').text(character.name);
        var characterImage = $('<img>').attr('src', character.image);
        var characterDescription = $('<p>').text(character.description);
        characterCard.append(characterName, characterImage, characterDescription);
        charactersList.append(characterCard);
    });
}

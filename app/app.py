from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    rick_api = 'https://rickandmortyapi.com/api/character/1,4'
    response = requests.get(rick_api)
    data = response.json()

    characters_info = []
    for character in data:
        character_info = {
            'name': character['name'],
            'image': character['image'],
            'decription': character['status'] + ' - ' + character['species']
        
        }
    
        characters_info.append(character_info)
    
    return render_template('index.html',characters=characters_info)


if __name__ == '__main__':
    app.run(debug=True)

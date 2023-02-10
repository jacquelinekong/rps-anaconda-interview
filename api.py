import json

from flask import Flask, make_response, request

app = Flask(__name__)

@app.post('/game')
def save_game():
    game_state = request.data
    resp = make_response(game_state)
    resp.set_cookie('gamestate', game_state)
    return resp

@app.get('/game')
def load_game():
    game_state = request.cookies.get('gamestate')
    if game_state is not None:
        resp = make_response(json.loads(game_state))
        return resp
    else:
        return {
            'player1Score': 0,
            'player2Score': 0
        }
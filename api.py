from flask import Flask, make_response, request

app = Flask(__name__)

@app.post('/save')
def save_game():
    game_state = request.data
    resp = make_response(game_state)
    resp.set_cookie('gamestate', game_state)
    return resp
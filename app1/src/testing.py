# testing.py (Flask backend)
from flask import Flask, request, jsonify
from bardapi import Bard
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app
token = 'YggJ-puM3oOTP1xvhMbFpYE1jxMMkB45FK8WZxUzTKnL1nt12-s7KDXzHa1NQOo8UeVf5w.'
bard = Bard(token=token)

@app.route('/api/get_answer', methods=['POST'])
def get_answer():
    data = request.json
    user_prompt = data.get('prompt')  # Receive the user input from the frontend

    print(f"Received prompt from frontend: {user_prompt}")

    # Process the user_prompt using the Bard API (or any other logic) to generate an answer
    answer = bard.get_answer(user_prompt)

    print(f"Generated answer: {answer}")

    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run()

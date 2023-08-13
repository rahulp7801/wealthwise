import utils  # our own utils file

from flask import Flask, request, jsonify, make_response
from Stock_Chart import graphStock
from flask_cors import CORS
from firebase_admin import db
from bardapi import Bard
from bardapi import BardCookies


from utils import User, init_curs, agg_vals, agg_vals_login
import jwt
import os

# Initialize Flask APP and initialize CORS Policy
app = Flask(__name__)
CORS(app, origins=utils.ORIGINS, supports_credentials=True, methods=['GET', 'POST'], allow_headers=['Content-Type'])

# Pull ticker data from API and send to frontend
@app.route("/api/get-data", methods=['OPTIONS', 'GET'])
def get_data():
    init_curs()
    tickValue = request.args.get('ticker')
    newVal = graphStock(tickValue)
    data = newVal.to_dict(orient='records')
    return data

# Get Data from Database
@app.route("/api/get-login", methods=['OPTIONS', 'GET'])
def get_login():
    init_curs()
    ref = db.reference('/')
    data = ref.get()
    return data

# Create user and add to database
@app.route("/api/create-user", methods=['POST'])
def create_user():
    init_curs()
    data = request.json  # What the backend gives us
    email, pwd, fname, lname = agg_vals(data)  # get the email and password
    user = utils.User(email, pwd, fname, lname)  # Create a user object to handle things for us
    user.reg_user()  # Register user to database
    return "Successfully updated DB"

# LOGIN LEGACY!
@app.route("/api/login", methods=["POST"])
def login():
    init_curs()
    data = request.json
    email, pwd = agg_vals_login(data)  # get form values
    user = utils.User(email, pwd)  # create USER object
    stat, err = user.login_user(True)  # login
    user1 = {"email": user.email}
    secret_key = os.urandom(24)

    # Generate JWT token
    jwt_token = jwt.encode(user1, secret_key, algorithm='HS256')

    # Set HttpOnly cookie
    response = make_response("Logged in successfully")
    response.set_cookie("jwt_token", jwt_token, httponly=True)
    print(response.headers)

    if not stat:  # oh nah they monkey up
        if err == 401:
            return "Incorrect password"
        else:
            return "User does not exist"
    return "Login Successful"

# REGISTER WIT GOOGLE!
@app.route('/api/register-google', methods=["POST"])
def register_google():
    data = request.json  # the Google stuff
    user = utils.User(id=data.get('idToken'))
    res, stat = user.reg_user()
    if not res:  # how does this even happen silly
        if stat == 401:
            return "userext"
        else:
            return "interr"

    return "success"

# LOGIN WIT GOOGLE
@app.route("/api/login-google", methods=["POST"])
def login_google():
    data = request.json
    user = utils.User(id=data.get("idToken"))
    res, stat = user.login_user(False)  # False because not LEGACY, we goin wit GOOGLE
    if not res:  # HOOWOWWW
        if stat == 401:
            return "interr"
        else:
            return "notexist"
    return "success"
@app.route("/api/post-portfolio-info", methods=["POST"])
def post_user_info():
    init_curs()
    data = request.json
    email, _, _, _ = agg_vals(data)  # Get the logged-in user's email from the frontend data
    user = User(email=email)  # Create a User object with the logged-in user's email (no need for pwd, fname, and lname)
    portfolio_data = data.get("portfolio")  # Get the user's stock portfolio data from the frontend data
    print(user.post_portfolio_info(portfolio_data))  # Call the post_user_info function
#    return jsonify(updated_portfolio)  # Return the updated stock portfolio data to the frontend
    return('okay')



@app.route('/api/get_answer', methods=['POST'])
def get_answer():
    data = request.json
    user_prompt = data.get('prompt')  # Receive the user input from the frontend
    token = 'ZwgJ-np3mc6Ixmr-LWTQtQW0uW911XMvv6ecRyZE_d1tYtdk3G8HbweCdIu6n8MxzrAhQg.'
    bard = Bard(token=token)
    print(f"Received prompt from frontend: {user_prompt}")

    # Process the user_prompt using the Bard API (or any other logic) to generate an answer
    answer = bard.get_answer(user_prompt)
    print(f"Generated answer: {answer}")
    import json

    class SetEncoder(json.JSONEncoder):
        def default(self, obj):
            if isinstance(obj, set):
                return list(obj)
            return json.JSONEncoder.default(self, obj)

    ans = json.dumps(answer, cls=SetEncoder)
    print(f"Sending answer to frontend: {ans}")
    return ans



if __name__=="__main__":
    app.run(debug=True, port=5000)




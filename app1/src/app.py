from flask import Flask, request, make_response
import datetime
from Stock_Chart import graphStock
from flask_cors import CORS
from random import randint
import firebase_admin
from firebase_admin import credentials, db

# Initialize Flask APP and initialize CORS Policy
app = Flask(__name__)
CORS(app, origins='http://localhost:3000', supports_credentials=True, methods=['GET', 'POST'], allow_headers=['Content-Type'])

# Authenticate Firebase, Establish Connection
cred = credentials.Certificate("creds.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://wealthwise-46f60-default-rtdb.firebaseio.com/'
})

# Initialize CORS Policy and prevent HTML Blocking
def init_curs():
    response = make_response()
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET')
    response.headers.add('Access-Control-Allow-Methods', 'POST')

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

# Post data to database
@app.route("/api/post-db", methods=['POST'])
def post_db():
    init_curs()
    data = request.json
    text = data.get('text')
    ref = db.reference('/users')
    ref.update({f"user{randint(0,10000)}": text}) #randint for sum randomness
    return "Successfully updated DB"

if __name__=="__main__":
    app.run(debug=True, port=5000)




from flask import Flask, render_template, request, jsonify, make_response
import datetime
from Stock_Chart import graphStock
from flask_cors import CORS
import requests

x = datetime.datetime.now()

app = Flask(__name__)
CORS(app, origins='http://localhost:3000', supports_credentials=True, methods=['GET', 'POST'], allow_headers=['Content-Type'])



@app.route("/data")

def get_time():
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }

@app.route("/api/get-data", methods=['OPTIONS', 'GET'])
def get_data():
    response = make_response()
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET')
    tickValue = request.args.get('ticker')
    newVal = graphStock(tickValue)
    data = newVal.to_dict(orient='records')
    return data
if __name__=="__main__":
    app.run(debug=True, port=5000)




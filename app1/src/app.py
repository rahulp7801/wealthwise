from flask import Flask, render_template, request, jsonify
import datetime
x = datetime.datetime.now()

app = Flask(__name__)
app.config['REVERSE_PROXY_PATH'] = '/data'
app.config['REVERSE_PROXY_URL'] = 'http://localhost:3000'

@app.route("/data")
def get_time():
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }


if __name__=="__main__":
    app.run(debug=True)




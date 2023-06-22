from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["Jayana N", "Rahul P", "Aryan N"]}




if __name__=="__main__":
    app.run(debug=True)
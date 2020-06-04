# from flask import Flask, request, jsonify
# from sklearn import svm
# from sklearn import datasets
# from sklearn.externals import joblib



import os
# from flask import Flask
# from flask_cors import CORS

from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
import json 

# declare constants
HOST = '127.0.0.1'
PORT = 8081

@app.route("/")
def main():
    return "Hello world!"



@app.route('/question')
def question():
    # Opening JSON file 
    f = open('question.json',) 
  
# returns JSON object as  
# a dictionary 
    data = json.load(f) 
    # data = make_summary()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == "__main__":
    app.run(host=HOST, port=PORT)
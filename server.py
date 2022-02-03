import subprocess
from bottle import run, post, request, response, get, route


@route('/<path>', method='POST')
def process(path):
    print(path)


run(host='localhost', port=8000, debug=True)

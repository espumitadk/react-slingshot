import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
try:
    request = """[{"x": 1,"y": 1,"player": "X"},{"x": 1,"y": 2,"player": "X"},{"x": 1,"y": 3,"player": "X"}]"""
    server.connect(("artificial-intelligence", 5051))
    server.send(request.encode())
    result = server.recv(1024)
    print result
except Exception as e:
    print e
    server.close()
    exit(-1)
server.close()
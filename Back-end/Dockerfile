FROM python:2.7.13

RUN pip install flask && pip install flask-cors

WORKDIR /app
COPY . .

EXPOSE 8181

ENTRYPOINT [ "python", "./src/run.py" ]
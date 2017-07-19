FROM python:2.7.13

RUN pip install redis

WORKDIR /app
COPY . .

ENTRYPOINT [ "python", "./src/run.py" ]

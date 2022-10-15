FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install python3-dev\
                       g++\
                       gcc\
                       gfortran\
                       musl-dev\
                       libc-dev\
                       libffi-dev\
                       openssl\
                       libssl-dev\
                       git\
                       libgl1

WORKDIR /code

COPY requirements.txt /code/

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . /code/

EXPOSE 8000

CMD [ "sh", "start-server.sh" ]

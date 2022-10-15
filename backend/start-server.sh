#!/usr/bin/env bash
# start-server.sh
if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ] && [ -n "$DJANGO_SUPERUSER_EMAIL" ] ; then
    (python manage.py createsuperuser --no-input)
fi
# (cd martor_demo; gunicorn martor_demo.wsgi --user www-data --bind 0.0.0.0:8010 --workers 3) &
# nginx -g "daemon off;"
python manage.py migrate
gunicorn -c core/gunicorn.py core.wsgi

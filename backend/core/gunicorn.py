import multiprocessing
from core.settings import BASE_DIR
import os

bind = ['0.0.0.0:8000']

max_requests = 1000
max_requests_jitter = 50

# errorlog = os.path.join(BASE_DIR, 'logs', 'gunicorn.log')
# accesslog = os.path.join(BASE_DIR, 'logs', 'gunicorn_access.log')

loglevel = 'debug'

workers = multiprocessing.cpu_count() * 2 + 1

capture_output = True

"""
Django settings for root project.

Generated by 'django-admin startproject' using Django 3.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""
import os
import sys
from pathlib import Path

import environ

from root.constants import Environment

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Load '.env'.
environ.Env.read_env(env_file=BASE_DIR / '.env')

### Print variables ###
print(f'=== {BASE_DIR=}')
print(f"=== {os.environ['DJANGO_SETTINGS_MODULE']=}")
### End: Print variables ###

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
ALLOWED_HOSTS = []

ENV = os.environ.get('ENV')

# Static
STATIC_ROOT = BASE_DIR / 'staticroot'
STATIC_URL = '/static/'

# Media
MEDIA_ROOT = BASE_DIR / 'mediaroot'
MEDIA_URL = '/media/'

# Production settings:
X_FRAME_OPTIONS = 'DENY'
CSRF_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = 60  # TODO: Find a decent value
SECURE_SSL_REDIRECT = True
SECURE_HSTS_PRELOAD = True
SESSION_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True

DATE_INPUT_FORMATS = [
    '%d-%m-%Y',
    '%d.%m.%Y',
    '%d/%m/%Y',
]

SESSION_COOKIE_NAME = 'sessionid'
SESSION_ENGINE = 'django.contrib.sessions.backends.db'
SESSION_COOKIE_AGE = 24 * 60 * 60 * 7
SESSION_EXPIRE_AT_BROWSER_CLOSE = False

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Imported apps.
    'django_extensions',
    'corsheaders',
    'rest_framework',
    'root',  # Register to enable management.commands.
    'arrangementer',
]

MIDDLEWARE = [
    'root.middlewares.RequestLogMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',  # default
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',  # default
]

ROOT_URLCONF = 'root.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS':
            {
                'context_processors':
                    [
                        'django.template.context_processors.debug',
                        'django.template.context_processors.request',
                        'django.contrib.auth.context_processors.auth',
                        'django.contrib.messages.context_processors.messages',
                    ],
            },
    },
]

WSGI_APPLICATION = 'root.wsgi.application'

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',  # default
]

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Europe/Oslo'
USE_I18N = False
USE_TZ = True

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

################## LOGGING ##################

# pylint: disable=wrong-import-position,wrong-import-order
import logging.config

from root.json_formatter import JsonFormatter
from root.request_context_filter import RequestContextFilter

# pylint: enable=wrong-import-position,wrong-import-order

LOGFILENAME = BASE_DIR / 'logs' / '.log'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters':
        {
            'json': {
                # Need to be a callable in order to use init parameters.
                '()': lambda: JsonFormatter(indent=4 if ENV == Environment.DEV else None),
            },
            'file': {
                'format': '%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
            },
        },
    'filters':
        {
            'request_context_filter': {
                '()': RequestContextFilter,
            },
            'require_debug_false': {
                '()': 'django.utils.log.RequireDebugFalse',
            },
            'require_debug_true': {
                '()': 'django.utils.log.RequireDebugTrue',
            },
        },
    'handlers':
        {
            'null': {
                'class': 'logging.NullHandler',
            },
            'console': {
                'level': 'DEBUG',
                'class': 'logging.StreamHandler',
                'filters': ['require_debug_true'],
            },
            'file': {
                'level': 'INFO',
                'class': 'logging.FileHandler',
                'formatter': 'json',
                'filename': LOGFILENAME,
                'filters': ['request_context_filter'],
            },
            'mail_admins': {
                'level': 'ERROR',
                'class': 'django.utils.log.AdminEmailHandler',
                'filters': ['require_debug_false'],
            },
            'humio':
                {
                    'level': 'DEBUG' if ENV == Environment.DEV else 'INFO',
                    'formatter': 'json',
                    'class': 'logging.StreamHandler',
                    'stream': sys.stdout,
                    'filters': ['request_context_filter'],
                },
        },
    'loggers':
        {
            # Default logger.
            '': {
                'handlers': ['humio', 'file'],
                'propagate': True,
                'level': 'INFO',
            },
            # Catch all from django unless explicitly prevented propagation.
            'django': {
                'handlers': ['console', 'mail_admins'],
                'propagate': True,
                'level': 'DEBUG',
            },
            'django.db.backends': {
                'handlers': ['console'],
                'propagate': False,  # Don't pass up to 'django'.
                'level': 'INFO',
            },
            'django.server': {
                'handlers': ['console'],
                'propagate': False,  # Don't pass up to 'django'.
                'level': 'INFO',
            },
            'django.utils.autoreload': {
                'handlers': ['console'],
                'propagate': False,  # Don't pass up to 'django'.
                'level': 'INFO',
            },
        },
}

logging.config.dictConfig(LOGGING)

# Quick fix for avoiding concurrency issues related to db access
# Note: this might not be an ideal solution. See these links for information
# https://docs.djangoproject.com/en/1.10/topics/db/transactions/#django.db.transaction.on_commit
# https://medium.com/@hakibenita/how-to-manage-concurrency-in-django-models-b240fed4ee2
ATOMIC_REQUESTS = True
APPEND_SLASH = True

#! /bin/bash
PROJECT_DIR=$(pwd)
PYTHONPATH="$PROJECT_DIR:$PYTHONPATH"
echo "PYTHONPATH=$PYTHONPATH"
PYTHONPATH=$PYTHONPATH pylint ../$PROJECT_DIR

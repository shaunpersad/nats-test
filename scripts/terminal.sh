#!/usr/bin/env bash
docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app node:latest /bin/bash

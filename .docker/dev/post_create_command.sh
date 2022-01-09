#!/bin/bash

set -e -x

sudo chown $(id -u -n):$(id -g -n) ./

# copy source code
if [[ -d ../hostdir/.git && ! -d .git ]]; then
    rsync -rlpt ../hostdir/.git/ .git/
    git checkout -- .
fi

# direnv
touch .envrc
direnv allow

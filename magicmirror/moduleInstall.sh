#!/bin/bash -x
# Iterate over all module folders
for file in modules/*
do

    # Check if the module contains a "package.json"
    if ls ${file}/package.json &>/dev/null
    then
        # Yes, it contains this file -> execute "npm i"
        cd ${file}
        npm install --unsafe-perm
        cd  ../..
    fi
done

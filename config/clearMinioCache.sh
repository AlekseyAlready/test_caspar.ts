#!/usr/bin/env bash

#add minio bucket
mc config host add minio http://minio.gitlab:9000 9S2YQLUBSFQFFRV4CASA DuYoz29jOrLBOYB/4B427t7ohe1ChMOBCbHW8EWv

#delete old files
mc rm -r --force --older-than 7d minio/cache >> minioRemovingOldCacheLog.txt
mc rm -r --force --older-than 7d minio/ui-tests/ >> minioRemovingOldDataLog.txt

#move minio copy log to artifacts
mv minioRemovingOldCacheLog.txt allure-results/
mv minioRemovingOldDataLog.txt allure-results/
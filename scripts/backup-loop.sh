#!/bin/sh
# Daily database dump and uploads archive.
# Encryption and the off-server copy are added when that destination is chosen.
set -eu

mkdir -p /backups

while true; do
  stamp=$(date -u +%Y%m%dT%H%M%SZ)
  pg_dump --format=custom --file="/backups/db-${stamp}.dump"
  tar -cf "/backups/uploads-${stamp}.tar" -C /uploads .
  find /backups -type f -mtime +14 -delete
  sleep 86400
done

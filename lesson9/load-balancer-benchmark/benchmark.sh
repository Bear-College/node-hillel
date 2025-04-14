#!/bin/bash

tests=(3000 3001 3002 3003 3004)
names=("Single Thread" "Worker Threads" "Cluster RR" "Cluster+Threads+RR" "Proxy RR")

for i in "${!tests[@]}"; do
  PORT=${tests[$i]}
  NAME=${names[$i]}

  echo -e "\n🔸 Benchmarking: $NAME"

  node tests/test$((i+1))*.js &
  PID=$!
  sleep 1

  npx autocannon -c 100 -d 10 -p 10 "http://localhost:$PORT/?number=15"

  kill $PID
done

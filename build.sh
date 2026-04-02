#!/bin/bash
set -e

echo "=== Building ai-academy-session01-wow ==="
cd ai-academy-session01-wow
npm install
npm run build
cd ..

echo "=== Building ai-fundamentals-session01 ==="
cd ai-fundamentals-session01
npm install
npm run build
cd ..

echo "=== Assembling output ==="
rm -rf _output
mkdir -p _output/ai-academy-session01-wow
mkdir -p _output/ai-fundamentals-session01

cp -r ai-academy-session01-wow/dist/* _output/ai-academy-session01-wow/
cp -r ai-fundamentals-session01/dist/* _output/ai-fundamentals-session01/
cp index.html _output/
cp ajbg.mp4 _output/

echo "=== Build complete ==="
ls -la _output/
ls -la _output/ai-academy-session01-wow/
ls -la _output/ai-fundamentals-session01/

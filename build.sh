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

echo "=== Building ai-fundamentals-v2 ==="
cd ai-fundamentals-v2
npm install
npm run build
cd ..

echo "=== Building ai-fundamentals-v2.5 ==="
cd ai-fundamentals-v2.5
npm install
npm run build
cd ..

echo "=== Building ai-fundamentals-v3 ==="
cd ai-fundamentals-v3
npm install
npm run build
cd ..

echo "=== Assembling output ==="
rm -rf _output
mkdir -p _output/ai-academy-session01-wow
mkdir -p _output/ai-fundamentals-session01
mkdir -p _output/ai-fundamentals-v2
mkdir -p _output/ai-fundamentals-v2.5
mkdir -p _output/ai-fundamentals-v3

cp -r ai-academy-session01-wow/dist/* _output/ai-academy-session01-wow/
cp -r ai-fundamentals-session01/dist/* _output/ai-fundamentals-session01/
cp -r ai-fundamentals-v2/dist/* _output/ai-fundamentals-v2/
cp -r ai-fundamentals-v2.5/dist/* _output/ai-fundamentals-v2.5/
cp -r ai-fundamentals-v3/dist/* _output/ai-fundamentals-v3/
cp index.html _output/
cp ajbg.mp4 _output/

echo "=== Build complete ==="
ls -la _output/
ls -la _output/ai-academy-session01-wow/
ls -la _output/ai-fundamentals-session01/
ls -la _output/ai-fundamentals-v2/
ls -la _output/ai-fundamentals-v2.5/
ls -la _output/ai-fundamentals-v3/

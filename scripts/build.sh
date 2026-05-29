#!/bin/bash

# Build the project
npm run build

# Check for build errors
if [ $? -ne 0 ]; then
  echo "Build failed!"
  exit 1
fi

echo "Build successful!"

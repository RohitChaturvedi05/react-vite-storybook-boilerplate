#!/bin/bash

# Define the source and destination paths
SOURCE="package.json"
DEST_DIR="./dist"
DEST="$DEST_DIR/package.json"

# Check if the destination directory exists, if not, create it
if [ ! -d "$DEST_DIR" ]; then
  mkdir -p "$DEST_DIR"
  echo "Created directory: $DEST_DIR"
fi

# Copy the package.json file to the dist folder
cp "$SOURCE" "$DEST"

# Check if the copy was successful
if [ $? -eq 0 ]; then
  echo "package.json copied successfully to $DEST_DIR folder."
else
  echo "Failed to copy package.json to $DEST_DIR folder."
fi

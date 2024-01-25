#!/bin/bash

# Ask for the title
echo "Enter title:"
read title

# Get the current date
date=$(date +"%Y-%m-%d %H:%M")

# Ask for the language
echo "Enter language:"
read lang

# Ask for the duration
echo "Enter duration:"
read duration

# Ask for the type and convert it to the full word
echo "Enter type (n for notes, p for posts):"
read type
if [ "$type" = "n" ]; then
  type="notes"
elif [ "$type" = "p" ]; then
  type="posts"
else
  echo "Invalid type entered. Please enter either 'n' for notes or 'p' for posts."
  exit 1
fi

# Create the markdown file
cat << EOF > "pages/$type/$title.md"
---
title: $title
date: $date
lang: $lang
duration: $duration
---
EOF
#!/bin/bash

# Azure deployment script for Node.js with Prisma

set -e

echo "Installing dependencies..."
npm ci --production=false

echo "Generating Prisma Client..."
npx prisma generate

echo "Deployment completed successfully!"

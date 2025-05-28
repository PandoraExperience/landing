## Stage 1: install dependencies and build
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm i

# Copy source code
COPY . .

# Build the Next.js project
RUN npm run build


## Stage 2: setup production image
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port Next.js will run on (default 3000)
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Run next start
CMD ["npm", "run", "start"]

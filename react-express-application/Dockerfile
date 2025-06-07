# Use a multi-stage build to optimize the image size

# Stage 1: Build React client
FROM node:18-alpine AS client-builder
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Build Express server
FROM node:18-alpine AS server-builder
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server/ ./

# Stage 3: Create production image
FROM node:18-alpine
WORKDIR /app
COPY --from=client-builder /app/client/build ./client/build
COPY --from=server-builder /app/server ./
RUN npm install --production

EXPOSE 3000 5173
CMD ["sh", "-c", "node index.js & serve -s client/build -l 5173"]
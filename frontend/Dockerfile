# Build React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
# Use legacy peer deps to avoid peer resolution failures with CRA ecosystem
RUN if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    else npm install --legacy-peer-deps; fi
COPY . .

# Pass environment variables at build time for CRA
ARG REACT_APP_CONTACT_PROVIDER=backend
ARG REACT_APP_API_URL=/api
ENV REACT_APP_CONTACT_PROVIDER=${REACT_APP_CONTACT_PROVIDER}
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
RUN npm run build

# Serve with Nginx
FROM nginx:alpine AS runtime
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

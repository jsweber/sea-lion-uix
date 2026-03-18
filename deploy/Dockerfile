
#FROM dony435/pnpm:20-alpine AS builder
FROM acr-openxlab-prod-registry-vpc.cn-shanghai.cr.aliyuncs.com/public/node:20-alpine AS builder
WORKDIR /build/
ADD ./ /build/

ARG npm_registry
# RUN rm package-lock.json
# RUN rm -rf node_modules
RUN pnpm install --registry=https://registry.npmmirror.com/

# RUN rm -rf node_modules
# RUN npm install
ARG env=dev
#RUN npm run build:${env}
RUN pnpm build:theme
RUN pnpm build-storybook


FROM nginx:1.21-alpine
COPY --from=builder /build/storybook-static /usr/share/nginx/html

ARG deployDir=.
COPY ./deploy/nginx/conf.d /etc/nginx/conf.d
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' > /etc/timezone
EXPOSE 80/TCP

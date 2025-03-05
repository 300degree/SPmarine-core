FROM alpine:latest AS builder
RUN apk add --no-cache \
	boost-dev \
	asio-dev \
    cmake \
	curl \
	make \
	g++

WORKDIR /app
COPY . .
RUN cmake -B build . && \
    cmake --build build -- -j$(nproc)

FROM alpine:latest AS runtime
RUN apk add --no-cache \
	boost-dev \
	asio-dev \
	curl

WORKDIR /app /app
COPY --from=builder /app/build/bin/app /app/app
EXPOSE 5000

CMD [ "./app" ]

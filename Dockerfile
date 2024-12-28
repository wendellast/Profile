FROM golang:1.23.4

WORKDIR /app

COPY . .

RUN go build -o main .


EXPOSE 3003

CMD ["./main"]

package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})
	portEnv := os.Getenv("PORT_PROFILE")
	port := "0.0.0.0"
	fullserver := port + ":" + portEnv

	log.Print("ServerInit")

	log.Fatal(http.ListenAndServe(fullserver, nil))

}

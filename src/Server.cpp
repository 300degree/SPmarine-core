#include "Server.h"

#include "adapters/BargeController.h"
#include "domain/BargeService.h"

Server::Server() {
    this->app.get_middleware<crow::CORSHandler>()
        .global()
        .methods(crow::HTTPMethod::GET, crow::HTTPMethod::POST)
        .headers("content-type", "application/json");

    BargeService bargeService;

    BargeController bargeController(this->app, bargeService);
}

void Server::Start() {
    this->app.port(this->port)
        .multithreaded()
#ifdef DEBUG
        .loglevel(crow::LogLevel::Debug)
#endif
        .run();
}

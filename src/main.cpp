#include <crow.h>
#include <crow/middlewares/cors.h>

#include "adapters/BargeController.h"
#include "domain/BargeService.h"

#ifndef PORT
#define PORT 5000
#endif

int main(void) {
    crow::App<crow::CORSHandler> app;

    BargeService bargeService;
    BargeController bargeController(app, bargeService);

    app.get_middleware<crow::CORSHandler>()
        .global()
        .methods(crow::HTTPMethod::GET)
        .headers("Content-Type", "application/json");

    app.port(PORT)
        .multithreaded()
        .
#ifdef DEBUG
        loglevel(crow::LogLevel::DEBUG)
        .
#endif
        run();
}

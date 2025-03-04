#include "adapters/BargeController.h"

#include <string>

BargeController::BargeController(crow::App<crow::CORSHandler>& app,
                                 BargeService& service) {
    CROW_ROUTE(app, "/barges").methods(crow::HTTPMethod::GET)([&service]() {
        return "hello world";
    });

    CROW_ROUTE(app, "/barges/<int>")
        .methods(crow::HTTPMethod::GET)([&service](int id) {
        return std::to_string(id);
    });
}

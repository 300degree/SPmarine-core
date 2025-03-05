#include "adapters/BargeController.h"

#include <nlohmann/json.hpp>
#include <string>

BargeController::BargeController(crow::App<crow::CORSHandler>& app,
                                 BargeService& service) {
    CROW_ROUTE(app, "/barges").methods(crow::HTTPMethod::GET)([&service]() {
        service.test();
        nlohmann::json j = {
            {"barge_load", nlohmann::json::array(
                               {"iJrZ4.gz/l", "rnY>uUeXB7", "1yU6}E.e1N",
                                "9el9K|gRop", "DV-$J_8/YV", "]q+M{iU?F.",
                                "w8:cvcvbc4", "1\"Mz^CY^)(", 60176, 73871})},
            {"assign_barge", nlohmann::json::array(
                                 {{{"name", "69337"}, {"load", 46073}},
                                  {{"name", "75586"}, {"load", 2950}},
                                  {{"name", "92179"}, {"load", 15135}},
                                  {{"name", "aZC+fzn|WK"}, {"load", 45469}},
                                  {{"name", "H}9MC5V8_)"}, {"load", 16963}},
                                  {{"name", "ks$.eWDNU8"}, {"load", 32342}},
                                  {{"name", "KsMJI<eL9:"}, {"load", 38421}},
                                  {{"name", "14312"}, {"load", 29565}},
                                  {{"name", "pAKX9]e5C<"}, {"load", 38344}},
                                  {{"name", "PG+:3Yp&m/"}, {"load", 25730}}})},
            {"id", 1},
            {"load", 32841},
            {"order", "New Zealand Heading Dog"}};

        return crow::response(j.dump());
    });

    CROW_ROUTE(app, "/barges/<int>")
        .methods(crow::HTTPMethod::GET)([&service](int id) {
            service.test();

            return crow::response(std::to_string(id));
        });
}

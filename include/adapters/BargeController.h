#ifndef BARGECONTROLLER_H
#define BARGECONTROLLER_H

#include <crow/app.h>

#include "crow/middlewares/cors.h"
#include "domain/BargeService.h"

class BargeController {
   public:
    BargeController(crow::App<crow::CORSHandler>& app, BargeService& service);
};

#endif /* BARGECONTOLLER_H */

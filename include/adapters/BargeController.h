/*
 * Copyright (c) 2014-2017, ipkn
 *               2020-2022, CrowCpp
 * All rights reserved.
 *
 * Licensed under the BSD 3-Clause License.
 * See the LICENSE file in the project root for more details.
 */

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

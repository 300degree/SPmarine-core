/*
 * Copyright (c) 2014-2017, ipkn
 *               2020-2022, CrowCpp
 * All rights reserved.
 *
 * Licensed under the BSD 3-Clause License.
 * See the LICENSE file in the project root for more details.
 */

#ifndef SERVER_H
#define SERVER_H

#include <crow/app.h>
#include <crow/common.h>
#include <crow/logging.h>
#include <crow/middlewares/cors.h>

class Server {
   private:
    crow::App<crow::CORSHandler> app;
    unsigned int port = 8080;

   public:
    Server();
    void Start();
};

#endif /* SERVER_H */

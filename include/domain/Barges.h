#ifndef BARGES_H
#define BARGES_H

#include <cstdint>
#include <iostream>

struct Barge {
        std::string id;
        uint16_t load;
        std::string order;
        Barge() : id(""), load(0), order("") {}
};

#endif

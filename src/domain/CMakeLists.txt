project( domain )
set (
    SOURCES services/BargeService.cpp
            entities/Barges.cpp
)

add_library( domain ${SOURCES} )
target_include_directories(
    domain PRIVATE ${CMAKE_SOURCE_DIR}/include 
                   ${crow_SOURCE_DIR}/include
                   ${nlohmann_json_SOURCE_DIR}/include )

project ( adapters )
set( SOURCES api/BargeController.cpp )

add_library( adapters ${SOURCES} )
target_include_directories(
    adapters PRIVATE ${CMAKE_SOURCE_DIR}/include 
                     ${crow_SOURCE_DIR}/include
                     ${nlohmann_json_SOURCE_DIR}/include )
target_link_libraries( adapters PRIVATE domain )

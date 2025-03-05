project( app )
add_subdirectory( adapters )
add_subdirectory( application )
add_subdirectory( domain )
add_subdirectory( ports )

add_executable( app main.cpp Server.cpp )
target_include_directories(
    app PUBLIC ${nlohmann_json_SOURCE_DIR}/include
               ${CMAKE_SOURCE_DIR}/include 
               ${crow_SOURCE_DIR}/include )
target_link_libraries( app PRIVATE domain adapters )

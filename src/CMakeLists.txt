add_subdirectory( adapters )
add_subdirectory( application )
add_subdirectory( domain )
add_subdirectory( ports )

add_executable( SPmarine-core main.cpp )
target_include_directories( SPmarine-core PRIVATE ${CMAKE_SOURCE_DIR}/include )
# target_link_libraries( CMAKE_PROJECT_NAME PRIVATE adapters application domain ports )
target_link_libraries( SPmarine-core PRIVATE domain adapters )

set( API api/BargeController.cpp )

add_library( adapters ${API} )
target_include_directories( adapters PRIVATE ${CMAKE_SOURCE_DIR}/include )
target_link_libraries( adapters PRIVATE domain )

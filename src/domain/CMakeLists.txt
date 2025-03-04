# set ( ENTIIES entities/Barge.cpp )
set ( SERVICES services/BargeService.cpp )

add_library( domain ${SERVICES} )
target_include_directories( domain PRIVATE ${CMAKE_SOURCE_DIR}/include )
# target_link_libraries( domain PRIVATE entities interfaces )

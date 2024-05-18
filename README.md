# @bencoveney/utils

![@bencoveney/utils on NPM](https://img.shields.io/npm/v/@bencoveney/utils) ![CI build status](https://img.shields.io/github/actions/workflow/status/bencoveney/utils/build.yml?branch=main)

This project is a collection of utility functions I have used in a few different projects, pulled together to they are easily reusable in future projects.

This collection is not:

- Cohesive. It is mish-mash of domains, the only linking thread is that I have used them in multiple places.
- Comprehesive. For each domain, I have not listed every possible useful function, just the ones I want to reuse.
- Fully tested. It is useful to be able to "dump" functions here to re-use, and come back and rigorously test later on.

This functions in this collection generally adheres to these goals:

- Functions should be small in scope.
- Validity of parameters is the responsibility of the caller.
- Avoid throwing errors.
- Avoid dependencies.
- Avoid creating work for the garbage collector.

## To do list

- Standardise on storing data (colours, vectors, matrices) as arrays (rather than named objects).
- More tests.
- Autogenerate docs.
- ND array including: Populate, foreach, copy.
- Collections with GroupBy.

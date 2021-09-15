# Deno REST API

- This is a demo of an REST API built with deno.js
- Deno version: 1.13.2

## Deno modules

- [Standard library modules](https://deno.land/std@0.106.0)
- [Third party modules](https://deno.land/x)

## Modules that we used in this project:

The external modules are located at src/dependencies

- [oak](https://deno.land/x/oak@v9.0.0)
- [deno-postgres](https://deno.land/x/postgres@v0.12.0)


## Steps to run this application in your computer

- Install deno on your computer
    
    - MacOS

    ```console
    brew install deno
    ```
- Run API

    ```console
    deno run --allow-net ./src/Main.js
    ```
## To do

- Handle and run API with environment variables
- Build jwt middleware
- Build error handler middleware

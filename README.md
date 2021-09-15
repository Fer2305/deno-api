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

Also you need to install velociraptor to manage scripts

- [velociraptor] (deno install -fqAn vr https://x.nest.land/velociraptor@1.2.0/cli.ts)

## Steps to run this application in your computer

- Install deno on your computer
    
    - MacOS

    ```console
    brew install deno
    ```

    - Windows: on powershell

    ```console
    iwr https://deno.land/x/install/install.ps1 -useb | iex
    ```
- Run API

    ```console
    vr start
    ```

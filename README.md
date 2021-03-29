# BookStore

## Topics covered
Microservices architecture, serverless computing, clean architecture

# Debuggin and development
For debugging and development purposes you will need to run you applications locally.

## Run the Function
To run the function locally install azure-functions-core-tools by following the instructions [1]. 

Navigate to the api or function root directory:

```powershell
cd src/Microservices/Books/Api/BookStore.Books.Api
```

Then run the command:

```powershell
func host start --verbose
```
<!--<img src="https://github.com/mandavamunya/BookStore/blob/main/image/worker_started_initialized.png" alt="" title="Entity Relational Diagram" align="right" width="400" height="450" />-->
## Run the UI angular web app
To run the angular web application locally use visual studio or dotnet cli.

To use dotnet cli you should have the dotnet cli installed on your machine.

From the root directory of the project navigate to the UI Web directory:

```powershell
cd src/Presentation/UI/BookStore.UI.Web
```

And then run the command:

```powershell
dotnet run
```

<!--<img src="https://github.com/mandavamunya/BookStore/blob/main/image/screen1.png" alt="" title="Entity Relational Diagram" align="right" width="400" height="450" />-->

<!--<img src="https://github.com/mandavamunya/BookStore/blob/main/image/screen2.png" alt="" title="Entity Relational Diagram" align="right" width="400" height="450" />-->

<!--<img src="https://github.com/mandavamunya/BookStore/blob/main/image/screen3.png" alt="" title="Entity Relational Diagram" align="right" width="400" height="450" />-->

<!--<img src="https://github.com/mandavamunya/BookStore/blob/main/image/screen4.png" alt="" title="Entity Relational Diagram" align="right" width="400" height="450" />-->


## What's next / Outstanding
- Dockerize, make the application scalable using kubernetes and deploy to Azure AKS
- Add centralized caching (redis cache) and or inmemory caching inorder to improve book search efficiency.
- Add exception handling in the worker / azure function

## Reference
1. https://github.com/Azure/azure-functions-core-tools
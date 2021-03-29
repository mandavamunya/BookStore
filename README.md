# BookStore

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



## Reference
1. https://github.com/Azure/azure-functions-core-tools
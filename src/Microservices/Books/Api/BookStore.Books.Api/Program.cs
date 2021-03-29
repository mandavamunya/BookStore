using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System;
using BookStore.Books.Application.Providers;
using BookStore.Books.Application.Services;
using BookStore.Books.Application.Interfaces;

namespace BookStore.Books.Api
{
    public class Program
    {
        static async Task Main(string[] args)
        {
#if DEBUG
            // Debugger.Launch();
#endif
            var host = new HostBuilder()
                .ConfigureAppConfiguration(c =>
                {
                    c.AddCommandLine(args);
                })
                .ConfigureFunctionsWorkerDefaults((c, b) =>
                {
                    b.UseFunctionExecutionMiddleware();
                })
                //.ConfigureFunctionsWorkerDefaults()
                .ConfigureServices(services =>
                {
                    services.AddHttpClient();
                    services.AddSingleton<IBookService, BookService>();

                    services.AddHttpClient<IBookServiceProvider, BookServiceProvider>(client =>
                    {
                        client.BaseAddress = new Uri(Environment.GetEnvironmentVariable("BookLibraryUrl"));
                    });

                })
                .Build();

            await host.RunAsync();
        }
    }
}
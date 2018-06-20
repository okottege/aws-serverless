using System.Collections.Generic;
using System.Net;
using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace SayHelloService
{
    public class SayHello
    {
	    /// <summary>
	    /// A Lambda function to respond to HTTP Get methods from API Gateway
	    /// </summary>
	    /// <param name="request"></param>
	    /// <param name="context"></param>
	    /// <returns>The list of blogs</returns>
	    public APIGatewayProxyResponse Get(APIGatewayProxyRequest request, ILambdaContext context)
        {
            context.Logger.LogLine("Get Request\n");

            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = "Hello AWS Serverless",
                Headers = new Dictionary<string, string> { { "Content-Type", "application/json" } }
            };

            return response;
        }

	    public APIGatewayProxyResponse Post(APIGatewayProxyRequest request, ILambdaContext context)
	    {
			context.Logger.LogLine($"Body: {request.Body}");

			return new APIGatewayProxyResponse
			{
				StatusCode = (int) HttpStatusCode.OK,
				Body = "All done!",
				Headers = new Dictionary<string, string> { { "Content-Type", "application/json" } }
			};
	    }

	    public APIGatewayProxyResponse GreetByName(APIGatewayProxyRequest request, ILambdaContext context)
	    {
		    if (request.PathParameters.ContainsKey("name"))
		    {
			    var name = request.PathParameters["name"];
			    context.Logger.LogLine($"Name is: {name}");

			    return new APIGatewayProxyResponse
			    {
				    StatusCode = (int)HttpStatusCode.OK,
				    Body = $"Hello {name}!  How are you?",
				    Headers = new Dictionary<string, string> { { "Content-Type", "application/json" } }
			    };
			}

		    return new APIGatewayProxyResponse {StatusCode = (int) HttpStatusCode.BadRequest};
	    }
    }
}

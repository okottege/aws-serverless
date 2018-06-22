dotnet lambda package --configuration release --framework netcoreapp2.0 --output-package bin/release/netcoreapp2.0/say-hello-deploy.zip
serverless deploy --aws-profile hackDay --verbose
FROM microsoft/aspnetcore:1.0.5

COPY . /app
WORKDIR /app

RUN ["dotnet", "restore"]

EXPOSE 8080

ENTRYPOINT ["dotnet", "myapp.dll"]

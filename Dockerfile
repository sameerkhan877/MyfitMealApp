# Step 1: Base Image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

# Step 2: Build Image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY MyfitMealApp/*.csproj ./MyfitMealApp/
RUN dotnet restore "MyfitMealApp/MyfitMealApp.csproj"
COPY MyfitMealApp/. ./MyfitMealApp/
WORKDIR /src/MyfitMealApp
RUN dotnet publish -c Release -o /app/publish

# Step 3: Final Image
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MyfitMealApp.dll"]


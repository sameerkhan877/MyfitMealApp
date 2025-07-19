# ---------- Base Image ----------
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# ---------- Build Stage ----------
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copy the project file and restore
COPY ["MyfitMealApp.csproj", "./"]
RUN dotnet restore "MyfitMealApp.csproj"

# Copy the rest of the files and build
COPY . .
RUN dotnet publish "MyfitMealApp.csproj" -c Release -o /app/publish

# ---------- Final Stage ----------
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MyfitMealApp.dll"]

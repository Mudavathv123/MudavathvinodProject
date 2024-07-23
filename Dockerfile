# Use a Maven image with JDK 11 to build the project
FROM maven:3.8.1-openjdk-21 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file
COPY pom.xml .

# Download the project dependencies
RUN mvn dependency:go-offline -B

# Copy the entire project source
COPY src ./src

# Package the application
RUN mvn package -DskipTests

# Use a Java image to run the application
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the packaged application to the /app directory
COPY --from=build /app/target/spotifyclone-1.0-SNAPSHOT.jar /app/spotifyclone.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "spotifyclone.jar"]

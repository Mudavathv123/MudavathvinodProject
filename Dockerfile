# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from your local file system to the container
COPY E:/spotifybackend/spotifyclone/target/spotifyclone-0.0.1-SNAPSHOT.jar /app/spotifyclone.jar

# Expose the port your application runs on (optional, typically 8080 for Spring Boot)
EXPOSE 8080

# Run the JAR file using java -jar
ENTRYPOINT ["java", "-jar", "/app/spotifyclone.jar"]

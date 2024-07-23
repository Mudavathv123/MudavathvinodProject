# Use the official JDK 21 image from Docker Hub
FROM openjdk:21-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the project files into the container
COPY . /app

# Ensure Maven Wrapper script has executable permissions
RUN chmod +x mvnw

# Build the project (adjust the command if needed)
RUN ./mvnw clean package -DskipTests

# Set the entry point for the application
ENTRYPOINT ["java", "-jar", "target/spotifyclone.jar"]

# Expose the port that the application will run on (adjust if necessary)
EXPOSE 8080

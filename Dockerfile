FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/spotifyclone-0.0.1-SNAPSHOT.jar app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]


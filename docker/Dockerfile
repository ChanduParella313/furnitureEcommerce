
# Dockerfile for Backend
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy JAR file to the container
COPY target/my-ecommerce-backend.jar /app/furnitureEcommerce-backend.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/furnitureEcommerce-backend.jar"]

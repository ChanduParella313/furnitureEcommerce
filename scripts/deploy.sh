
# deploy.sh
#!/bin/bash

# Variables
APP_NAME="furnitureEcommerce"
EC2_USER="ec2-user"
EC2_HOST="your-ec2-public-ip"
KEY_PATH="/path/to/your-key.pem"
REMOTE_DIR="/var/www/$APP_NAME"

# Build the project
cd ../backend && mvn clean package

# Create the remote directory if it doesn't exist
ssh -i $KEY_PATH $EC2_USER@$EC2_HOST "mkdir -p $REMOTE_DIR"

# Transfer JAR file to the server
scp -i $KEY_PATH target/furnitureEcommerce-backend.jar $EC2_USER@$EC2_HOST:$REMOTE_DIR

# Deploy on EC2
ssh -i $KEY_PATH $EC2_USER@$EC2_HOST << EOF
  cd $REMOTE_DIR
  nohup java -jar furnitureEcommerce-backend.jar > app.log 2>&1 &
EOF

echo "Deployment completed!"

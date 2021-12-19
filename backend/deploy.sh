# install npm packages
npm i
# building
npm run build
# zipping
zip meal-planner-backend.zip dist/index.js -j
# deployment
aws lambda update-function-code --function-name arn:aws:lambda:us-east-1:787285671275:function:meal-planner --zip-file fileb://meal-planner-backend.zip --region us-east-1
# removing zip file
rm meal-planner-backend.zip
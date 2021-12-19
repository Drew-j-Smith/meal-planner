# install npm packages
npm i
# building
# tsc
# zipping
zip -r meal-planner-backend.zip . -x /*.ts
# deployment
aws lambda update-function-code --function-name arn:aws:lambda:us-east-1:787285671275:function:meal-planner --zip-file fileb://meal-planner-backend.zip --region us-east-1
# removing zip file
rm meal-planner-backend.zip
# clean tsc
# tsc --build --clean
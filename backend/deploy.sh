# install npm packages
npm i
# building
npm run build

# creating env file
if [ $3 ]
then
    cd dist
    echo AUTH0_CLIENT_ID=$1 > .env
    echo AUTH0_CLIENT_SECRET=$2 >> .env
    echo AUTH0_DOMAIN=$3 >> .env
    cd ..
fi

# zipping
zip -r meal-planner-backend.zip dist/ -j
# deployment
aws lambda update-function-code --function-name arn:aws:lambda:us-east-1:787285671275:function:meal-planner --zip-file fileb://meal-planner-backend.zip --region us-east-1
# removing zip file
rm meal-planner-backend.zip
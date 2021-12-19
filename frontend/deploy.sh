# install npm packages
npm i
# build the website
npm run build
# typechecking
tsc --noEmit
# deployment
aws s3 sync ./public s3://drew-smith-meal-planner --delete
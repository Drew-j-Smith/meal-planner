exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
    return response;
};

/*
zip -r meal-planner-backend.zip ./backend

aws lambda update-function-code --function-name arn:aws:lambda:us-east-1:787285671275:function:meal-planner --zip-file fileb://meal-planner-backend.zip --region us-east-1
*/
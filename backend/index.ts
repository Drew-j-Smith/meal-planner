import { APIGatewayProxyHandler } from 'aws-lambda';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const axios = require("axios").default;

export const handler: APIGatewayProxyHandler = async (event) => {
    if (!event.queryStringParameters || !event.queryStringParameters["user_id"]) {
        return {
            statusCode: 400,
            body: "Missing user_id query parameter"
        }
    }

    const auth0CredentialPost: AxiosRequestConfig = {
        method: "POST",
        url: `${process.env.AUTH0_DOMAIN}/oauth/token`,
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify({
            "client_id": process.env.AUTH0_CLIENT_ID,
            "client_secret": process.env.AUTH0_CLIENT_SECRET,
            "audience": `${process.env.AUTH0_DOMAIN}/api/v2/`,
            "grant_type": "client_credentials"
        })
    }

    let auth0CedentialResponse: AxiosResponse;
    try {
        auth0CedentialResponse = await axios.request(auth0CredentialPost);
    }
    catch (error: any) {
        return {
            statusCode: 500,
            body: "Internal server error connecting to auth0"
        }
    }

    const auth0UserGet: AxiosRequestConfig = {
        method: "GET",
        url: `${process.env.AUTH0_DOMAIN}/api/v2/users/${encodeURIComponent(event.queryStringParameters["user_id"])}`,
        headers: {
            authorization: `${auth0CedentialResponse.data.token_type} ${auth0CedentialResponse.data.access_token}`
        }
    }

    let auth0UserResponse: AxiosResponse;
    try {
        auth0UserResponse = await axios.request(auth0UserGet);
    } catch (error) {
        return {
            statusCode: 404,
            body: "Unable to find user"
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(auth0UserResponse.data),
    };
};

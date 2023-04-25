import { redirect } from "./env/utils";


export const msalConfig = {
    auth: {
        clientId: "c9161146-d0d5-40af-ac87-a600d9fc39a8",
        authority:
            "https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec",
        redirectUri: redirect
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};


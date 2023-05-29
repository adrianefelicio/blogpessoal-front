export type action = {type: "ADD_TOKEN"; payload: string};

export const addToken = (token: string): action => ({
    type: "ADD_TOKEN", 
    payload: token, 
});
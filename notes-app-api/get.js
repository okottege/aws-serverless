import * as dynamoDbLib from './lib/dynamodb-lib';
import { success, failure } from './lib/response-lib';

export async function main(event, context, callback) {
    const params = {
        TableName: 'notes',
        Key: {
            userId: event.requestContext.identity.congnitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    try {
        const result = await dynamoDbLib.call('get', params);
        if(result.Item) {
            callback(null, success(result.Item));
        } else {
            callback(null, failure({ status: false, error: 'Item not found.' }));
        }
    } catch (e) {
        console.log('ERROR ', e);
        callback(null, failure({ status: false }));
    }
};
import uuid from 'uuid';
import * as dynamoDbLib from './lib/dynamodb-lib';
import { success, failure } from './lib/response-lib';

export async function main(event, context, callback) {
    // Request body is passed in as JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    const params = {
        TableName: 'notes',
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    };

    try {
        await dynamoDbLib.call('put', params);
        callback(null, success(params.Item));
    } catch (e) {
        console.log('ERROR: ', e);
        callback(null, failure({ status: false }));
    }
}
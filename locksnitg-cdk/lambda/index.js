const { KMSClient, ListKeysCommand } = require('@aws-sdk/client-kms');
const client = new KMSClient();

exports.handler = async () => {
  try {
    const data = await client.send(new ListKeysCommand({}));
    const count = data.Keys.length;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS
      },
      body: JSON.stringify({ count }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: err.message }),
    };
  }
};

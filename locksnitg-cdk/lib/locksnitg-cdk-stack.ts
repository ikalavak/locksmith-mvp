import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class LockSnitgCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const listKeysFn = new lambda.Function(this, 'ListKeysFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'), // assumes your Lambda code is in /lambda
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: listKeysFn,
    });
  }
}

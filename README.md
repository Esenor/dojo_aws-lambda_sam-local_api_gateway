# Dojo_aws_lambda_sam_local

## Step 1: Simple Node function

    $ npm i
    $ npm run test-getCustomer

# Dojo_aws_lambda_sam_local

## Usage

### Install the AWS-cli and AWS Sam Local

Install an configure [the AWS cli](https://docs.aws.amazon.com/lambda/latest/dg/setup-awscli.html)

Install the aws-sam-local module

    $ npm i -g aws-sam-local

--------------------------

### Test the node function

    $ npm i
    $ npm run build
    $ npm run test-getCustomer

--------------------------

### Test locally the function

    $ npm i
    $ npm run build
    $ rake localInvoke {YOUR_NAME}

--------------------------

### Test localy the API Gateway

    $ npm i
    $ npm run build
    $ rake localStartApi {YOUR_NAME}
    # Make a curl
    $ curl -X POST http://127.0.0.1:3000/find-by-mail -d "{\"mail\": \"michu@gmail.com\"}"

--------------------------

### Package and upload the function

    $ npm i
    $ npm run build
    $ npm prune --production
    $ rake packageFunction

--------------------------

### Deploy the function

    $ rake deployFunction {YOUR_NAME}

--------------------------

### Test the remote function

    $ rake remoteInvoke {YOUR_NAME}

--------------------------

### Test the remote API Gateway

    # get endpoint URL on AWS Lambda dashboard
    # Make a curl
    $ curl -X POST https://{api url}.amazonaws.com/Prod/find-by-mail -d "{\"mail\": \"michu@gmail.com\"}"    

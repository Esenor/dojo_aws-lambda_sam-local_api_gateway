# Dojo_aws_lambda_sam_local

## Step 1: Simple Node function

    $ npm i
    $ npm run test-getCustomer

## Step 2: Simple lambda function

    # Install sam local
    $ npm i -g aws-sam-local
    
    # Build source code
    $ npm run build    
    
    # Invoke locally the function
    $ sam local invoke -t ./etc/infrastructure/template.yml --event ./event.json dojoCustomerModel
    
    # --- Function deployment ---
    
    # Clean developer tool dependencies
    $ npm prune --production
    
    # Package and upload the fonction on a S3 Bucket
    $ aws cloudformation package --template-file ./etc/infrastructure/template.yml --s3-bucket dojo.lambda --output-template-file ./etc/infrastructure/template-packaged.yml
    
    # Deploy the function, !! change the stack name !!
    $ aws cloudformation deploy --template-file ./etc/infrastructure/template-packaged.yml --stack-name dojo--dev--{YOUR_NAME}--customerModel --capabilities CAPABILITY_IAM --region eu-west-3 --parameter-overrides Stage=dev Env={YOUR_NAME}
    
    # Get remote functions name
    $ aws lambda list-functions
    
    # Invoke remote function name, !! change the function name !!
    $ aws lambda invoke --function-name "{function remote name}" --payload '{"mail": "lorem-ipsum@oliverstore.com"}' outfile.json

## Step 3: API gateway lambda function

    # Build source code
    $ npm i
    $ npm run build
    
    # Invoke locally the function
    $ sam local invoke -t ./etc/infrastructure/template.yml --event ./event.json dojoCustomerModel

    # Start locally the API Gateway
    $ sam local start-api -t ./etc/infrastructure/template.yml

    # Test API Gateway
    $ curl -X POST http://127.0.0.1:3000/find-by-mail -d "{\"mail\": \"michu@gmail.com\"}"
    
    # --- Function deployment ---
    
    # Clean developer tool dependencies
    $ npm prune --production
    
    # Package and upload the fonction on a S3 Bucket
    $ aws cloudformation package --template-file ./etc/infrastructure/template.yml --s3-bucket dojo.lambda --output-template-file ./etc/infrastructure/template-packaged.yml
    
    # Deploy the function, !! change the stack name !!
    $ aws cloudformation deploy --template-file ./etc/infrastructure/template-packaged.yml --stack-name dojo--dev--{YOUR_NAME}--customerModel --capabilities CAPABILITY_IAM --region eu-west-3 --parameter-overrides Stage=dev Env={YOUR_NAME}
    
    # Get remote functions name
    $ aws lambda list-functions
    
    # Invoke remote function name, !! change the function name !!
    $ aws lambda invoke --function-name "{function remote name}" --payload '{"body": "{\"mail\":\"lorem@gmail.com\"}"}' outfile.json

    # Test remote API Gateway
    $ curl -X POST https://{api url}.amazonaws.com/Prod/find-by-mail -d "{\"mail\": \"michu@gmail.com\"}"

## Step 4: Invoke lambda function

    # Build source code & install aws-sdk
    $ npm i
    $ npm run build

    # Invoke locally the function
    $ sam local invoke -t ./etc/infrastructure/template.yml --event ./event.json dojoCustomerModel

    # Start locally the API Gateway
    $ sam local start-api -t ./etc/infrastructure/template.yml

    # Test API Gateway
    $ curl -X POST http://127.0.0.1:3000/find-by-mail -d "{\"mail\": \"michu@gmail.com\"}"
    
    # --- Function deployment ---
    
    # Clean developer tool dependencies
    $ npm prune --production
    
    # Package and upload the fonction on a S3 Bucket
    $ aws cloudformation package --template-file ./etc/infrastructure/template.yml --s3-bucket dojo.lambda --output-template-file ./etc/infrastructure/template-packaged.yml
    
    # Deploy the function, !! change the stack name !!
    $ aws cloudformation deploy --template-file ./etc/infrastructure/template-packaged.yml --stack-name dojo--dev--{YOUR_NAME}--customerModel --capabilities CAPABILITY_IAM --region eu-west-3 --parameter-overrides Stage=dev Env={YOUR_NAME}
    
    # Get remote functions name
    $ aws lambda list-functions
    
    # Invoke remote function name, !! change the function name !!
    $ aws lambda invoke --function-name "{function remote name}" --payload '{"body": "{\"mail\":\"lorem@gmail.com\"}"}' outfile.json

    # Test remote API Gateway
    $ curl -X POST https://{api url}.amazonaws.com/Prod/find-by-mail -d "{\"mail\": \"michu@gmail.com\"}"
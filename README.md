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
    $ aws cloudformation package --template-file ./etc/infrastructure/template.yml --s3-bucket dojo.aws.lambda --output-template-file ./etc/infrastructure/template-packaged.yml
    
    # Deploy the function, !! change the stack name !!
    $ aws cloudformation deploy --template-file ./etc/infrastructure/template-packaged.yml --stack-name dev--{stack name}--dojo--customerModel --capabilities CAPABILITY_IAM
    
    # Get remote functions name
    $ aws lambda list-functions
    
    # Invoke remote function name, !! change the function name !!
    $ aws lambda invoke --function-name "{function remote name}" --payload '{"mail": "lorem-ipsum@oliverstore.com"}' outfile.json
# ------------------------------------------------------------------------------
# Invoke localy the function
desc "Locally invoke"
task :localInvoke do 
  ARGV.each { |a| task a.to_sym do ; end }
  if (ARGV.size == 2)
    sh "sam local invoke -t ./etc/infrastructure/template.yml --parameter-values \"ParameterKey=Stage,ParameterValue=dev ParameterKey=Env,ParameterValue=#{ARGV[1]}\" --event ./event.json dojoCustomerModel"
    exit 0
  else 
    sh "Need to put YOUR_NAME"
    exit 1
  end
end

# ------------------------------------------------------------------------------
# Invoke the remote function
desc "remote invoke"
task :remoteInvoke do 
  ARGV.each { |a| task a.to_sym do ; end }
  if (ARGV.size == 2)
    sh "aws lambda invoke --region eu-west-3 --function-name dev--#{ARGV[1]}--dojo--customerModel --payload '{\"body\": \"{\\\"mail\\\":\\\"lorem@gmail.com\\\"}\"}' outfile.json"
    sh "cat outfile.json"
    exit 0
  else 
    sh "Need to put YOUR_NAME"
    exit 1
  end
end

# ------------------------------------------------------------------------------
# Localy start the API Gateway
desc "Local Start API"
task :localStartApi do 
  ARGV.each { |a| task a.to_sym do ; end }
  if (ARGV.size == 2)
    sh "sam local start-api -t ./etc/infrastructure/template.yml --parameter-values \"ParameterKey=Stage,ParameterValue=dev ParameterKey=Env,ParameterValue=#{ARGV[1]}\""
    exit 0
  else 
    sh "Need to put YOUR_NAME"
    exit 1
  end
end

# ------------------------------------------------------------------------------
# Package and upload the function
desc "Package function"
task :packageFunction do
    sh "aws cloudformation package --template-file ./etc/infrastructure/template.yml --s3-bucket dojo.lambda --output-template-file ./etc/infrastructure/template-packaged.yml"
end

# ------------------------------------------------------------------------------
# Deploy the function
desc "Deploy function"
task :deployFunction do 
  ARGV.each { |a| task a.to_sym do ; end }
  if (ARGV.size == 2) 
    sh "aws cloudformation deploy --template-file ./etc/infrastructure/template-packaged.yml --stack-name dojo--dev--#{ARGV[1]}--customerModel --capabilities CAPABILITY_IAM --region eu-west-3 --parameter-overrides Stage=dev Env=#{ARGV[1]}"
    exit 0
  else 
    sh "Need to put YOUR_NAME"
    exit 1
  end
end

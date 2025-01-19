import json
import requests

def handler(event, context):
    print("Received event:", event)
    try:
        # Call your EC2
        ec2_response = requests.get("http://54.86.0.12:8080/test", timeout=5)
        ec2_data = ec2_response.json()
    except Exception as e:
        ec2_data = {"error": str(e)}

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps({
            "lambdaMessage": "Hello from Lambda",
            "ec2Data": ec2_data
        })
    }

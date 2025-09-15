import AWS from 'aws-sdk';

const S3_BUCKET = 'ecom-media-ccvt';
const AWS_REGION = 'ap-south-1';

AWS.config.update({ region: AWS_REGION });
const s3 = new AWS.S3();

export const uploadFile = async (fileName, fileContent) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Body: fileContent,
  };
  return s3.upload(params).promise();
};

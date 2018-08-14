import React from 'react'
import { Upload, message, Button, Icon } from 'antd';

const props = {
  name: 'file',
  action: 'gd/app/EbzTrans/queryPreInfo',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const comp = () => (
<Upload {...props}>
  <Button>
    <Icon type="upload" /> Click to Upload
  </Button>
</Upload>
)
export default comp
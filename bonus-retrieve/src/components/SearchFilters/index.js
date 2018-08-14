import React from 'react'
import { Row, Col, Form, Input, Select, Button } from 'antd'
import './index.less'

const fieldsConfig = [
  {
    id: 'cntrNo',
    name: '保单号',
    patterns: [/^[0-9]+$/],
  }, {
    id: 'idType',
    name: '证件类型',
    patterns: [/^[A-Z]{1}$/],
  }, {
    id: 'idNo',
    name: '身份证号',
    patterns: [/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/, /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/],
  }
]

class SearchFilters extends React.Component {

  handleClick = e => {
    const { getFieldValue } = this.props.form
    console.log(getFieldValue('idNo'))
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="content-wrap">
        <div className="container">
          <div className="title">Nothing match</div>
          <div className="blocks">
            <Form>
              {
                fieldsConfig.map(c =>
                  <Form.Item key={c.id} label={c.name}>
                    {
                      getFieldDecorator(c.id, {
                        rules: [
                          {
                            required: false,
                            message: '请输入保单号'
                          }
                        ]
                      })(<Input />)
                    }
                  </Form.Item>
                )
              }
            </Form>
            <Button onClick={this.handleClick}>搜索</Button>
          </div>
        </div>
      </div>
    )
  }
}

const searchFilters = Form.create()(SearchFilters)

export default searchFilters
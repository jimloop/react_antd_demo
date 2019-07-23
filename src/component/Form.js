import React from 'react'
import {Form,Input,Select} from "antd"

const FormItem=Form.Item;
const Option=Select.Option;

class myForm extends React.Component{
    constructor(props){
        super(props);
        Form.create();
        this.state={
            visible:false
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('收到表单值：',this.props.form.getFieldsValue())
        this.props.form.resetFields()
    }

    render() {
        const { getFieldDecorator }=this.props.form;
        const formItemLayout={
            labelCol:{span:3},
            wrapperCol:{span:6}
        }

        return (
            <Form horizontal="true" {...formItemLayout} onSubmit={this.handleSubmit}>
              <FormItem
                  label="输入框" >
                  {getFieldDecorator('username',{
                      rules:[{
                          required:true,min:4,max :12,
                          message:'please input your name length 4-12'
                      },],
                  })(<Input/>)}

              </FormItem>

              <FormItem
                  label="文本域">
                  {getFieldDecorator('content',{
                      rules: [{
                          required: true,min:50,message:'所填写数据不得少于50字符'
                      }]
                  })(<Input/>)}

              </FormItem>

                <FormItem
                    label="Select选择器">
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        showArrow
                    >
                        <Option value="jack">河南</Option>
                        <Option value="lucy">广州</Option>
                        <Option value="tom">上海</Option>
                    </Select>
                </FormItem>
            </Form>
        )
    }

}

const WarppedmyForm=Form.create({name:'myform'})(myForm)

export default WarppedmyForm
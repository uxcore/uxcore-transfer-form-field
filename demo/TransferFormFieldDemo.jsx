/**
 * TransferFormField Component Demo for uxcore
 * @author maquanyun
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Form from 'uxcore-form';
import Button from 'uxcore-button';
import FormRow from 'uxcore-form-row';
import TransferFormField from '../src';

const { ButtonGroupFormField, Constants } = Form;

const mockData = [
  {
    name: '内容1',
    value: 1,
    description: '内容1的描述',
    chosen: true,
  },
  {
    name: '内容2',
    value: 2,
    description: '内容2的描述',
    chosen: true,
  },
  {
    name: '内容3',
    value: 3,
    description: '内容3的描述',
    chosen: true,
  },
  {
    name: '内容4',
    value: 4,
    description: '内容4的描述',
    chosen: true,
  },
  {
    name: '内容5',
    value: 5,
    description: '内容5的描述',
    chosen: false,
  },
  {
    name: '内容6',
    value: 6,
    description: '内容6的描述',
    chosen: true,
  },
  {
    name: '内容7',
    value: 7,
    description: '内容7的描述',
    chosen: true,
  },
  {
    name: '内容8',
    value: 8,
    description: '内容8的描述',
    chosen: false,
  },
  {
    name: '内容9',
    value: 9,
    description: '内容9的描述',
    chosen: true,
  },
  {
    name: '内容10',
    value: 10,
    description: '内容10的描述',
    chosen: false,
  },
  {
    name: '内容11',
    value: 11,
    description: '内容11的描述',
    chosen: true,
  },
  {
    name: '内容12',
    value: 12,
    description: '内容12的描述',
    chosen: false,
  },
  {
    name: '内容13',
    value: 13,
    description: '内容13的描述',
    chosen: false,
  },
  {
    name: '内容14',
    value: 14,
    description: '内容14的描述',
    chosen: false,
  },
];

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsxvalues: {
        transfer: mockData,
      },
      mode: Constants.MODE.VIEW,
    };
  }

  handleClick() {
    const me = this;
    console.info(this.refs.form.getValues());
    // alert(JSON.stringify(me.form.getValues()));
  }

  toView() {
    console.info('toView');
    this.setState({
      mode: Constants.MODE.VIEW,
    });
  }

  toEdit() {
    this.setState({
      mode: Constants.MODE.EDIT,
    });
  }

  handleChange(data) {
    console.log(data);
  }

  handleReset() {
    const me = this;
    me.form.resetValues();
  }

  render() {
    const me = this;
    return (
      <Form
        jsxvalues={me.state.jsxvalues}
        jsxmode={me.state.mode}
        ref={(c) => { this.form = c; }}
      >
        <FormRow>
          <TransferFormField
            jsxname="transfer"
            jsxlabel="穿梭框1"
            jsxdisabled={false}
            showSearch
            standalone
            searchPlaceholder="请输入"
            leftTitle="未选中"
            rightTitle="已选中"
            checkAllText="全选"
            isAsc
          />
        </FormRow>
        <ButtonGroupFormField>
          <Button size="medium" onClick={me.toView.bind(me)}>
            view Mode
          </Button>
          <Button size="medium" onClick={me.toEdit.bind(me)}>
            edit Mode
          </Button>
        </ButtonGroupFormField>
      </Form>
    );
  }
}

module.exports = Demo;

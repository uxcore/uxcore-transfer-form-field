/**
 * TransferFormField Component for uxcore
 * @author maquanyun
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import Transfer from 'uxcore-transfer';
import assign from 'object-assign';
import FormField from 'uxcore-form-field';
import Form from 'uxcore-form';

const {Constants} = Form;

class TransferFormField extends FormField {

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-transfer-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

  handleChange(data) {
    let me = this;
    const newValue = data.chosen.concat(data.unChosen);
    this.handleDataChange(newValue);
  }

  renderField() {
    const me = this;
    let {
      height, jsxdisabled, showSearch, searchPlaceholder, leftTitle,
      rightTitle,mode
    } = this.props;
    if (mode === Constants.MODE.EDIT) {
        jsxdisabled=false;
    }else {
        jsxdisabled=true;
    }

     return [<Transfer
         key={`transfer-${new Date().getTime()}`}
         height={height}
         data={this.state.value}
         onChange={me.handleChange.bind(me)}
         disabled={jsxdisabled}
         showSearch={!jsxdisabled}
         searchPlaceholder={searchPlaceholder}
         leftTitle={leftTitle}
         rightTitle={rightTitle}
       />
     ];
  }
}

TransferFormField.defaultProps = assign({}, FormField.defaultProps, {
  height: 220,
});

TransferFormField.propTypes = assign({}, FormField.propTypes, {
  height: React.PropTypes.number,
  value: React.PropTypes.array,
});

TransferFormField.displayName = 'TransferFormField';

export default TransferFormField;

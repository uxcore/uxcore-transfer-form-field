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

class TransferFormField extends FormField {

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-transfer-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

  handleChange(data) {
    const newValue = data.chosen.concat(data.unChosen);
    this.handleDataChange(newValue);
  }

  renderField() {
    const me = this;
    const arr = [];
    const {
      height, disabled, showSearch, searchPlaceholder, leftTitle, rightTitle,
    } = this.props;
    arr.push(
      <Transfer
        key={`transfer-${new Date().getTime()}`}
        height={height}
        data={this.state.value}
        onChange={me.handleChange.bind(me)}
        disabled={disabled}
        showSearch={showSearch}
        searchPlaceholder={searchPlaceholder}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
      />
    );
    return arr;
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

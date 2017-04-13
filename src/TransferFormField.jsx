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
import Constants from 'uxcore-const';

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
    const {
      height, jsxdisabled, showSearch, searchPlaceholder, leftTitle,
      rightTitle, checkAllText,
    } = this.props;

    const mode = me.props.jsxmode || me.props.mode;

    return (
      <Transfer
        height={height}
        data={this.state.value}
        onChange={me.handleChange.bind(me)}
        disabled={mode === Constants.MODE.VIEW ? true : jsxdisabled}
        showSearch={mode === Constants.MODE.VIEW ? false : showSearch}
        searchPlaceholder={searchPlaceholder}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        checkAllText={checkAllText}
      />
    );
  }
}

TransferFormField.defaultProps = assign({}, FormField.defaultProps, {
  height: 220,
});

TransferFormField.propTypes = assign({}, FormField.propTypes, {
  height: React.PropTypes.number,
  value: React.PropTypes.array,
  checkAllText: React.PropTypes.string,
});

TransferFormField.displayName = 'TransferFormField';

export default TransferFormField;

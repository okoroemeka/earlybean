import React, {useEffect, useReducer, Fragment} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {colors} from '../../core';

const StyledInput = styled.TextInput`
  color: ${props => props.color || colors.black};
  font-size: ${props => props.fontSize || wp('4.5%')}px;
  border: ${props => props.border || 'none'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || hp('2%')}px;
  padding: ${props => props.paddingTopDown || hp('1%')}px
    ${props => props.paddingLeftAndRight || wp('1%')}px;
  border: ${props => props.border || 'none'};
  border-bottom-color: ${props => props.borderBottomColor || colors.primary};
  border-bottom-width: 1px;
`;
const StyledView = styled.View`
  margin-top: 5px;
`;
const StyledFormControl = styled.View`
  width: ${props => props.width || '100%'};
`;
const StyledText = styled.Text`
  color: red;
  font-size: 13px;
`;

const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const TextInput = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });
  const {onInputChange, id} = props;
  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [id, inputState, onInputChange]);

  const textChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneNumberCheck = ['090', '080', '070', '081', '071'];
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.phone && !phoneNumberCheck.includes(text.slice(0, 3))) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    if (props.maxLength != null && text.length > props.maxLength) {
      isValid = false;
    }
    dispatch({type: INPUT_CHANGE, value: text, isValid});
  };
  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };
  const {
    width,
    height,
    color,
    paddingTopDown,
    paddingLeftAndRight,
    placeholder,
    textControlWidth,
    borderBottomColor,
  } = props;
  return (
    <StyledFormControl width={textControlWidth}>
      <StyledInput
        {...props}
        width={width}
        height={height}
        color={color}
        paddingTopDown={paddingTopDown}
        paddingLeftAndRight={paddingLeftAndRight}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
        placeholder={placeholder || ''}
        borderBottomColor={borderBottomColor}
      />
      {!inputState.isValid && inputState.touched && (
        <StyledView>
          <StyledText>{props.errorText}</StyledText>
        </StyledView>
      )}
    </StyledFormControl>
  );
};

export default TextInput;

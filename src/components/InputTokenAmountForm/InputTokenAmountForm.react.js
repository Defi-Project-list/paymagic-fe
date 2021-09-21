// @flow

import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';

import {
  Button,
  Dropdown
} from "tabler-react";

import Form from "../tablerReactAlt/src/components/Form";

type Props = {|
  +item: Object,
  +accountBalances: Object,
  +web3Context: Object,
  +walletContext: Object,
  +lendingMarketMetrics: Object,
  +tokenPrices: Object,
  +contracts: Object,
  +handleSubmit: Function,
  +label: string
|};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function InputTokenAmountForm({
  item,
  accountBalances,
  web3Context,
  walletContext,
  tokenPrices,
  contracts,
  handleSubmit,
  label,
  buttonIcon,
  buttonLabel,
  disabled
}: Props): React.Node {
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ numbers: '' }}
      validationSchema={Yup.object().shape({
        numbers: Yup.number().required('Required'),
      })}
      onSubmit={ async (values, actions) => {
        setLoading(true);
        const afterMine = async (error) => {
          await sleep(15000)
          setLoading(false);
        }
        handleSubmit(values.numbers, afterMine);
      }}
    >
      {props => {
        const {
          values,
          setFieldValue,
          handleSubmit,
          isSubmitting
        } = props;
        return (
          <Form onSubmit={handleSubmit} className="p-2ex"> 
            <Form.Group label={`AMOUNT TO SEND`} className='m-3 mt-5'>
              <Form.InputGroup>
                <NumberFormat
                  placeholder="0.00"
                  isNumericString={true}
                  thousandSeparator={true}
                  value={values.numbers}
                  className={"form-control"}
                  onValueChange={val => setFieldValue('numbers', val.floatValue)}
                />
                <Form.InputGroup append>
                  <Form.Select
                    value={values.token}
                  >
                    <option>
                      DAI
                    </option>
                    <option>
                      USDC
                    </option>
                  </Form.Select>
                </Form.InputGroup>
              </Form.InputGroup>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  )
}

/** @component */
export default InputTokenAmountForm;

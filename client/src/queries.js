import { gql } from 'apollo-boost'

export const GET_ELEMENTS = gql`
  query($product: String!) {
    getElements(product: $product) {
      _id
      selector
      options
      icon
      label
      value
    }
  }
`

/* Mutations */

export const ADD_CONFIG = gql`
  mutation($jsonConfig: String!) {
    addConfig(jsonConfig: $jsonConfig) {
      jsonConfig
    }
  }
`

export const ADD_ELEMENT = gql`
  mutation($product: String!, $selector: String!, $options: String!, $icon: String!, $label: String!, $value: String!) {
    addElement(product: $product, selector: $selector, options: $options, icon: $icon, label: $label, value: $value) {
      product
      selector
      options
    }
  }
`

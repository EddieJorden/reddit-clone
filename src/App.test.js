import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from "enzyme";

describe('App is rendering', function () {
  it('should render "hello world"', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toEqual("hello world")
  })
})
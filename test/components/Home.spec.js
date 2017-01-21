/**
 * Created by awilczek on 1/21/17.
 */
import {expect} from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Home from '../../app/components/Home';


function setup() {
  const component = shallow(<Home />);
  return {
    component,
    h1: component.find('.testHeader'),
  };
}

describe("Home Component Tests", () => {
  it("should create correct text", () => {
    const { h1 } = setup();
    expect(h1.text()).to.match(/^Test/);
  });
});

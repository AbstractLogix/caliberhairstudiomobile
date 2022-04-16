import React from 'react';
import renderer from 'react-test-renderer';

import NavOptions from '../NavOptions';

describe('<NavOptions />', () => {
    // it('has 1 child', () => {
    //   const tree = renderer.create(<NavOptions />).toJSON();
    //   expect(tree.children.length).toBe(1);
    // }); // EXAMPLE CODE

    it('renders correctly', () => {
        const tree = renderer.create( <NavOptions /> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
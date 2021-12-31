import React from 'react';
import renderer from 'react-test-renderer';

import ArtistsScreen from '../../../app/screens/ArtistsScreen';

describe('<ArtistsScreen />', () => {
    // it('has 1 child', () => {
    //   const tree = renderer.create(<ArtistsScreen />).toJSON();
    //   expect(tree.children.length).toBe(1);
    // }); // EXAMPLE CODE

    it('renders correctly', () => {
        const tree = renderer.create( <ArtistsScreen /> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
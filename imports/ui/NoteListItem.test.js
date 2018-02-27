import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';


if (Meteor.isClient) {
    describe('NoteListItem', function() {
        it('should render title and timestamp', function() {
            const title='test title';
            const updatedAt = 1519375794215;

            const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('2/23/18');
        });

        it('should set default title if none', function() {
            const title='';
            const updatedAt = 1519375794215;

            const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

            expect(wrapper.find('h5').text()).toBe('Untitled note');
        });

    });
}

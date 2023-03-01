import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SuperButton} from './SuperButton';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Superbutton stories',
    component: SuperButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const EmptyButton = () => <SuperButton alertMess={'Wow wow'}/>
export const EmptyButton1 = () => <SuperButton alertMess={'Tell'} disable={false}/>



import {configure} from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';
import '../node_modules/font-awesome/css/font-awesome.min.css'

configure(require.context('../src', true, /\.stories\.js$/), module);

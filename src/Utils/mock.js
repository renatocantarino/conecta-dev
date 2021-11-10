import mockAdapter from 'axios-mock-adapter';
import axios from './axios';


const mock = new mockAdapter(axios, { delayResponse: 1000 });
export default mock;


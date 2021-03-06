import React from 'react';
import PrimeraApp  from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';

// No las toma de setupTests.js , así que las dejaré aquí por ahora
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe("Pruebas de Primera App .... .test.js", ()=> {
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = `Hola soy Carito`;
        const wrapper = shallow(<PrimeraApp saludo = {saludo} />);

        expect (wrapper).toMatchSnapshot();
    })

    test('debe de mostrar subtitulo de props', () => {
        const saludo = `Hola soy Carito`;
        const wrapper = shallow(<PrimeraApp saludo = {saludo} subtitulo = {'sub de prueba'} />);

        const textoParrafo = wrapper.find('p').text();

        console.log(`texto parrafo ${textoParrafo}`);

        expect (textoParrafo).toBe( subtitulo );
    })
    
})
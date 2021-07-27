import React from "react";
import {render, screen} from '@testing-library/react';
import Form from './index';
import {Provider} from "react-redux";
import store from "../../store";
import {action} from "typesafe-actions";
import {useDispatch} from "react-redux";

test('should render form component', () => {
    render(
        <Provider store={store}>
        <Form/>
        </Provider>);
    const formElement = screen.getByTestId("testId-form");
    expect(formElement).toBeInTheDocument();
});

// test('should save to localStorage', () => {
//     const KEY = ['rememberMe', 'user'],
//         VALUE = ['rememberMe', 'user', ''];
//     dispatch(action.update(KEY, VALUE));
//     expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
//     expect(localStorage.__STORE__[KEY]).toBe(VALUE);
//     expect(Object.keys(localStorage.__STORE__).length).toBe(2);
// });

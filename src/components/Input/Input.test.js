import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";
import Item from "../Item";
import React from "react";
import Input from "./index";

describe('Item component', () => {
    test('render items', () => {
        render(
            <Provider store={store}>
                <Input/>
            </Provider>
        );
        const inputElement = screen.getByTestId('testId-input');
        expect(inputElement).toBeInTheDocument();
    });
});
import React from 'react';
import {render, screen} from '@testing-library/react';
import List from "./index";
import store from "../../store";
import {Provider} from "react-redux";


describe('List component', () => {
    test('render list component', () => {
        render(
            <Provider store={store}>
                <List />
            </Provider>
        );
        const itemElement = screen.getByTestId("list-testId");
        expect(itemElement).toBeInTheDocument();
    });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import Item from "./index";
import {LIST_TYPES} from "../../const";
import store from "../../store";
import {Provider} from "react-redux";


const name = 'test_item';
const testItem = {name, type: LIST_TYPES.MAIN };

describe('Item component', () => {
test('render items', () => {
    render(
    <Provider store={store}>
    <Item item={testItem}/>
    </Provider>
    );
    const itemElement = screen.getByText(name);
    expect(itemElement).toBeInTheDocument();
});
});

describe("buttons rendered check", () => {
    test("render remove button item component", async () => {
        render(
            <Provider store={store}>
                <Item item={testItem} />
            </Provider>
        );
        const itemElement = await screen.findByTestId("testId-removeButton");
        expect(itemElement).toBeInTheDocument();
    });
    test("absence of remove button item component", () => {
        render(
            <Provider store={store}>
                <Item item={testItem} isMain/>
            </Provider>
        );
        const itemElement = screen.queryByTestId("testId-removeButton");
        expect(itemElement).toBeNull();
    });
});

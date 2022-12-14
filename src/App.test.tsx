import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

global.matchMedia =
    global.matchMedia ||
    function temp() {
        return {
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    };

test(
    "The reset order button should be DISABLED" +
        " when sorted column is undefined",
    async () => {
        render(<App />, { wrapper: BrowserRouter });

        // verify page content for default route
        expect(
            await screen.findByRole("button", { name: /Reset Order/i })
        ).toBeDisabled();
    }
);

test(
    "The reset order button should be ENABLED" +
        " when we pass sort URL params",
    async () => {
        render(
            <MemoryRouter initialEntries={["?sort=name"]}>
                <App />
            </MemoryRouter>
        );

        // verify page content for default route
        expect(
            await screen.findByRole("button", { name: /Reset Order/i })
        ).toBeEnabled();
    }
);

test(
    "Check if the appropriate title filters tags are VISIBLE " +
        "after filtering using url query params",
    async () => {
        render(
            <MemoryRouter initialEntries={["?titleFilters=Miss,Mr"]}>
                <App />
            </MemoryRouter>
        );

        // verify page content for default route
        expect(await screen.findByTestId("Miss")).toBeVisible();
        expect(await screen.findByTestId("Mr")).toBeVisible();
    }
);

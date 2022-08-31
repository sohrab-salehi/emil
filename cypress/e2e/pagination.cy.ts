describe("pagination", () => {
    it(
        "Check if table content will be changed " +
            "after clicking on next page",
        () => {
            cy.visit("localhost:3000");
            cy.get(".ant-pagination-next > .ant-pagination-item-link");
            cy.get("table tbody tr:nth-child(1)")
                .invoke("text")
                .as("previousFirstRow");
            cy.get(".ant-pagination-next > .ant-pagination-item-link").click();

            cy.get("table tbody tr:nth-child(1)")
                .invoke("text")
                .as("currentFirstRow");

            cy.get("@previousFirstRow").then((previousFirstRow) => {
                cy.get("@currentFirstRow").then((currentFirstRow) => {
                    expect(currentFirstRow).not.eq(previousFirstRow);
                });
            });
        }
    );
    it(
        "Check if the page query param(in URL) will be changed " +
            "after clicking on next page",
        () => {
            const currentPage = 1;
            cy.visit(`localhost:3000?page=${currentPage}`);
            cy.get(".ant-pagination-next > .ant-pagination-item-link").click();
            cy.url().should("include", `page=${currentPage + 1}`);
        }
    );
    it(
        "Check if the page size query params(in URL) will be applied " +
            "on table content",
        () => {
            cy.visit("localhost:3000?size=50");
            cy.get("table tbody tr").should("have.length", 50);
        }
    );
    it(
        "Check if the size of the table will be changed " +
            "after changing page size from 20 to 10",
        () => {
            cy.visit("localhost:3000?size=20");
            cy.get(".ant-pagination-options > div").click();
            cy.get(
                "div.rc-virtual-list > div > div > div > div:nth-child(1)"
            ).click();
            cy.get("table tbody tr").should("have.length", 10);
        }
    );
    it(
        "Check if the page size query params(in URL) will be changed " +
            "after changing page size from 20 to 10",
        () => {
            cy.visit("localhost:3000?size=20");
            cy.get(".ant-pagination-options > div").click();
            cy.get(
                "div.rc-virtual-list > div > div > div > div:nth-child(1)"
            ).click();
            cy.url().should("include", `size=10`);
        }
    );
});

/* eslint-disable testing-library/no-debugging-utils */
// app.test.js
import { render, screen } from "@testing-library/react"
import React from "react"
import "@testing-library/jest-dom"
import App from "./App"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe("Nav tests with url", () => {
    test("landing on a propos", () => {
        // use <MemoryRouter> when you want to manually control the history
        render(
          <MemoryRouter initialEntries={["/apropos"]}>
            <App />
          </MemoryRouter>
        )

        // verify navigation to "no match" route

        expect(
          screen.getByText(/La sécurité est la priorité de Kasa/i)
        ).toBeInTheDocument()
    })

    test("landing on a bad page", () => {
        // use <MemoryRouter> when you want to manually control the history
        render(
            <MemoryRouter initialEntries={["/some/bad/route"]}>
              <App />
            </MemoryRouter>
        )

        // verify navigation to "no match" route
        expect(screen.getByText(/404/i)).toBeInTheDocument()
    })

    test("landing on a file page", () => {
        // use <MemoryRouter> when you want to manually control the history
        render(
            <MemoryRouter initialEntries={["/fiche/b9123946"]}>
              <App />
            </MemoryRouter>
        )

        // verify navigation to "no match" route
        expect(
            screen.getByText(/Profitez du charme de la vie/i)
        ).toBeInTheDocument()
    })

    test("landing on a 404 page on bad id", () => {
        // use <MemoryRouter> when you want to manually control the history
        render(
            <MemoryRouter initialEntries={["/fiche/b9123946xx"]}>
              <App />
            </MemoryRouter>
        )

        // verify navigation to "no match" route
        expect(screen.getByText(/404/i)).toBeInTheDocument()
    })
})

describe("Nav tests with buttons", () => {
    test("Navigate from home to apropos", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
        )
        const user = userEvent.setup()
        // verify page content for expected route
        // often you'd use a data-testid or role query, but this is also possible
        expect(
            screen.getByText(/Chez vous, partout et ailleurs/i)
        ).toBeInTheDocument()

        await user.click(screen.getByText(/a propos/i))

        // check that the content changed to the new page
        expect(screen.getByText(/Les annonces/i)).toBeInTheDocument()
    })

    test("Navigate from apropos to home", async () => {
        render(
            <MemoryRouter initialEntries={["/apropos"]}>
              <App />
            </MemoryRouter>
        )
        const user = userEvent.setup()
        // verify page content for expected route
        // often you'd use a data-testid or role query, but this is also possible
        expect(screen.getByText(/Les annonces/i)).toBeInTheDocument()

        await user.click(screen.getByText(/Accueil/i))

        // check that the content changed to the new page
        expect(
            screen.getByText(/Chez vous, partout et ailleurs/i)
        ).toBeInTheDocument()
    })

    test("Navigate to a card from home", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
        )
        const user = userEvent.setup()
        // verify page content for expected route
        // often you'd use a data-testid or role query, but this is also possible
        expect(
            screen.getByText(/Chez vous, partout et ailleurs/i)
        ).toBeInTheDocument()

        const toto = screen.getByTestId("46d188c5")
        await user.click(toto)

        expect(
            screen.getByText(/venez découvrir Paris dans ce studio tout équipé/i)
        ).toBeInTheDocument()
        // check that the content changed to the new page
    })
})

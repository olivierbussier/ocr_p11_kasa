// app.test.js
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom'

import App from './App'

const query = (classe, rootElement = null) => {
    if (!rootElement)
        return document.querySelector(classe)
    else
        return rootElement.querySelector(classe)
}

const queryAll = (classe, rootElement = null) => {
    if (!rootElement)
        return document.querySelectorAll(classe)
    else
        return rootElement.querySelectorAll(classe)
}

const text = (classe, rootElement = null) => {
    return query(classe, rootElement).innerHTML
}

const user = userEvent.setup()

describe("Test d'un détail de bien", () => {
    test('des différents champs', () => {
        render(
          <MemoryRouter  initialEntries={['/fiche/b9123946']}>
            <App />
          </MemoryRouter>
        )

        // Banner
        const banner = query('.banner')
        expect(banner).toBeInTheDocument()
        // Titre
        expect(text('.title-fiche')).toBe('Magnifique appartement proche Canal Saint Martin')
        // Sous-titre
        expect(text('.localisation-fiche')).toBe('Ile de France - Paris 10e')
        // Badges
        const badges = query('.badges')
        const badgeList = queryAll('.badge', badges)
        expect(badgeList.length).toEqual(3)

        // Nom du loeur et image
        const author = query('.author')
        expect(text('.author-name', author)).toBe('Della Case')
        expect(text('.author-picture', author)).toBe('')
        // Rating
        const rating = query('.rating')
        expect(rating).toBeInTheDocument()

        // Description et Equipements
        const descr = queryAll('.text-collapse')
        expect(descr.length).toBe(2)
    })

    test('Banner tests', async () => {
        render(
            <MemoryRouter  initialEntries={['/fiche/b9123946']}>
              <App />
            </MemoryRouter>
        )

        const leftCaret = screen.getByAltText('left arrow')
        const rightCaret = screen.getByAltText('right arrow')
        const images = queryAll('.banner-image')

        // Il doit y avoir 6 images sur cette fiche
        expect(images.length).toBe(6)

        // La 1ere image doit avoir la classe 'show'
        expect(images[0].classList).toContain('show')
        expect(images[1].classList).not.toContain('show')

        // Click image précédente
        await user.click(leftCaret)

        // On doit afficher la derniere image

        for (let i=0;i<5;i++)
            expect(images[i].classList).not.toContain('show')
        expect(images[5].classList).toContain('show')

        // Deux click image suivante
        await user.click(rightCaret)
        await user.click(rightCaret)

        // 2eme image visible
        expect(images[0].classList).not.toContain('show')
        expect(images[1].classList).toContain('show')
        for (let i=2;i<5;i++)
            expect(images[i].classList).not.toContain('show')

          // 4 click image suivante
        await user.click(rightCaret)
        await user.click(rightCaret)
        await user.click(rightCaret)
        await user.click(rightCaret)

        // 6eme image visible
        for (let i=0;i<5;i++)
            expect(images[i].classList).not.toContain('show')
        expect(images[5].classList).toContain('show')

        // Click image suivante
        await user.click(rightCaret)

        // 1ere image visible
        expect(images[0].classList).toContain('show')
        for (let i=1;i<5;i++)
            expect(images[i].classList).not.toContain('show')
    })

    test('TextCollapse tests', async () => {
        render(
            <MemoryRouter  initialEntries={['/fiche/b9123946']}>
              <App />
            </MemoryRouter>
        )

        expect(screen.getByText(/Magnifique appartement proche Canal Saint Martin/i)).toBeInTheDocument()

        // 1er TextCollapse
        const textCollapse = queryAll('.text-collapse')

        // Il doit y avoir 6 images sur cette fiche
        expect(textCollapse.length).toBe(2)

        const testCollapse = textCollapse[0]

        const title = query('.title-text-collapse', testCollapse)
        const text  = query('.text', testCollapse)
        const content = query('.text-content', testCollapse)

        expect(text.attributes[0].name).toBe('style')
        expect(text.attributes[0].value).toBe('max-height: 0;')

        jest.spyOn(content, 'clientHeight', 'get')
            .mockImplementation(() => {
                return 400
            })

        await user.click(title)
        // await user.click(title)

        await waitFor(() => expect(text.attributes[0].name).toBe('style'))
        await waitFor(() => expect(text.attributes[0].value).toBe('max-height: 400px;'))
    })

    test('Rating tests', async () => {
        render(
            <MemoryRouter  initialEntries={['/fiche/b9123946']}>
              <App />
            </MemoryRouter>
        )

        // 1er TextCollapse
        const ratings = queryAll('.rating')

        // Il doit y avoir 1 rating
        expect(ratings.length).toBe(1)
        const rating = ratings[0]

        const stars = queryAll('.rating-star', rating)

        expect(stars.length).toBe(5)

        // 4 on et 1 off
        const star1 = stars[0].attributes
        expect(stars[0].attributes.src.value).toBe('/assets/star-on.svg')
        expect(stars[1].attributes.src.value).toBe('/assets/star-on.svg')
        expect(stars[2].attributes.src.value).toBe('/assets/star-on.svg')
        expect(stars[3].attributes.src.value).toBe('/assets/star-on.svg')
        expect(stars[4].attributes.src.value).toBe('/assets/star-off.svg')
    })
})
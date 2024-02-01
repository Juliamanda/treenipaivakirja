import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Item from './Item.jsx'

describe('Item', () => {
  test('Komponentti renderöityy merkinnän tiedoilla', () => {
    // Määritellään merkinnän tiedot.
    const data = {
      id:          "",
      type:        "Maastaveto",
      set:      "4",
      date: "2024-01-30",
      repeat: "2",
      time:   "",
      weight:    "75"      
    }
    render(<Item data={data} />, {wrapper: BrowserRouter})
    
    // Määritetään lokaaliasetukset.
    const locale = "fi-FI"
  
    // Tyyppi
    const typeElement = screen.getByText(data.type)
    expect(typeElement).toBeInTheDocument()

    // Maksupäivä
    const date = new Date(data.date).toLocaleDateString(locale)
    const dateElement = screen.getByText(date)
    expect(dateElement).toBeInTheDocument() 

    // Saaja
    const setElement = screen.getByText(data.set)
    expect(setElement).toBeInTheDocument()

  })
})

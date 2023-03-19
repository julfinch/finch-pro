import React from 'react'
import {render} from '@testing-library/react'
import { ContextProvider } from './contexts/ContextProvider'
import { BrowserRouter } from 'react-router-dom'

const AllTheProviders = ({children}) => {
    return (
        <ContextProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ContextProvider>
    )
  }

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
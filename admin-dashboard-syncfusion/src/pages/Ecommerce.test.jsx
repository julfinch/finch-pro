import { render, screen } from "../test-utils"
import { ContextProvider } from "../contexts/ContextProvider"
import Ecommerce from "./Ecommerce"
import { BrowserRouter} from 'react-router-dom';

//  1. An error would come out "TypeError: Cannot destructure property 'currentColor' of 'useStateContext(...)' as it is undefined. error during test with react-testing library, jest and vitest"
//  To solve this, I wrapped <Ecommerce/> with <ContextProvider>

//  2. This creates an error "Error: useNavigate() may be used only in the context of a <Router> component."
//  As a solution, we need to wrap our <LoginPage/> inside <BrowserRouter>
//  https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
        
//  3. Another error comes out "ReferenceError: ResizeObserver is not defined"
//  As a solution, I installed "yarn add -D resize-observer-polyfill"
//  And then added under setupTest.js the code: "  global.ResizeObserver = require('resize-observer-polyfill')"
//  https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library

describe('Ecommerce', () => {
    test('renders correctly', () => {
        render(<Ecommerce/>)
        const textElement = screen.getByText(/dashboard/i)
        expect(textElement).toBeInTheDocument()

        const customersTextElement = screen.getByRole('heading', {
            name: /customers/i
        })
        expect(customersTextElement).toBeInTheDocument()

        const productsTextElement = screen.getByRole('heading', {
            name: /products/i
        })
        expect(productsTextElement).toBeInTheDocument()

        const salesTextElement = screen.getByRole('heading', {
            name: /sales/i
        })
        expect(salesTextElement).toBeInTheDocument()

        const refundsTextElement = screen.getByRole('heading', {
            name: /refunds/i
        })
        expect(refundsTextElement).toBeInTheDocument()

        const revenueTextElement = screen.getByText(/revenue updates/i)
        expect(revenueTextElement).toBeInTheDocument()

        const estherTextElement = screen.getByText(/esther howard/i)
        expect(estherTextElement).toBeInTheDocument()

        const robertTextElement = screen.getByText(/robert fox/i)
        expect(robertTextElement).toBeInTheDocument()

        const mikeTextElement = screen.getByText(/mike dela hoya/i)
        expect(mikeTextElement).toBeInTheDocument()
    })
})
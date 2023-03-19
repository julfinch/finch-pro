import { render, screen } from "../test-utils"
import { ContextProvider } from "../contexts/ContextProvider"
import Products from "./Products"
import { BrowserRouter} from 'react-router-dom';
import user from "@testing-library/user-event"

//  1. An error would come out "TypeError: Cannot destructure property 'currentColor' of 'useStateContext(...)' as it is undefined. error during test with react-testing library, jest and vitest"
//  To solve this, I wrapped <Products/> with <ContextProvider>

//  2. This creates an error "Error: useNavigate() may be used only in the context of a <Router> component."
//  As a solution, we need to wrap our <LoginPage/> inside <BrowserRouter>
//  https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
        
//  3. Another error comes out "ReferenceError: ResizeObserver is not defined"
//  As a solution, I installed "yarn add -D resize-observer-polyfill"
//  And then added under setupTest.js the code: "  global.ResizeObserver = require('resize-observer-polyfill')"
//  https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library

describe('Products', () => {
    test('renders a modal after clicking the plus button', async () => {
        user.setup()
        render(<Products/>)
        const plusButton = screen.getByRole('button', {
            name: /plus/i,
        })
        await user.click(plusButton)
        const headingElement = screen.getByRole('heading', {
            name: /add a new product/i
        })
        expect(headingElement).toBeInTheDocument()

        const addButton = screen.getByRole('button', {
            name: /add/i
        })
        expect(addButton).toBeInTheDocument()

        const disabledButton = screen.getByRole('button', {
            name: /disabled/i
        })
        expect(disabledButton).toBeInTheDocument()

    })
})
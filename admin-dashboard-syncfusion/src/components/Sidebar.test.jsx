import { render, screen } from "../test-utils"
import { ContextProvider } from "../contexts/ContextProvider"
import Sidebar from "./Sidebar"
import { BrowserRouter} from 'react-router-dom';

//  1. An error would come out "TypeError: Cannot destructure property 'currentColor' of 'useStateContext(...)' as it is undefined. error during test with react-testing library, jest and vitest"
//  To solve this, I wrapped <Ecommerce/> with <ContextProvider>

//  2. This creates an error "Error: useNavigate() may be used only in the context of a <Router> component."
//  As a AiOutlineSolution, we need to wrap our <LoginPage/> inside <BrowserRouter>
//  https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
        
//  3. Another error comes out "ReferenceError: ResizeObserver is not defined"
//  As a solution, I installed "yarn add -D resize-observer-polyfill"
//  And then added under setupTest.js the code: "  global.ResizeObserver = require('resize-observer-polyfill')"
//  https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library

describe('Sidebar', () => {
    test('renders correctly', () => {
        render(<Sidebar/>)
        const textElement = screen.getByRole('link', {
            name: /finchpro/i
        })
        expect(textElement).toBeInTheDocument()

        const dashboardNav = screen.getByRole('link', {
            name: /dashboard/i
        })
        expect(dashboardNav).toBeInTheDocument()

        const analyticsNav = screen.getByRole('link', {
            name: /analytics/i
        })
        expect(analyticsNav).toBeInTheDocument()

        const messagesNav = screen.getByRole('link', {
            name: /messages/i
        })
        expect(messagesNav).toBeInTheDocument()

        const ordersNav = screen.getByRole('link', {
            name: /orders/i
        })
        expect(ordersNav).toBeInTheDocument()

        const productsNav = screen.getByRole('link', {
            name: /products/i
        })
        expect(productsNav).toBeInTheDocument()

        const usersNav = screen.getByRole('link', {
            name: /users/i
        })
        expect(usersNav).toBeInTheDocument()

        const logoutNav = screen.getByRole('link', {
            name: /logout/i
        })
        expect(logoutNav).toBeInTheDocument()

    })
})
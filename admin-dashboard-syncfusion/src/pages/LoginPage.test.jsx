import { render, screen } from "../test-utils"
import LoginPage from "./LoginPage"
import { BrowserRouter} from 'react-router-dom';

describe('LoginPage', () => {
    test('renders correctly', () => {

        // This creates an error "Error: useNavigate() may be used only in the context of a <Router> component."
        // As a AiOutlineSolution, we need to wrap our <LoginPage/> inside <BrowserRouter>
        //https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
        render(<LoginPage/>)
        const textElement = screen.getByText(/welcome back/i)
        expect(textElement).toBeInTheDocument()

        const inputElement = screen.getByRole('textbox', {name: '',})
        expect(inputElement).toBeInTheDocument()

        const emailElement = screen.getByPlaceholderText(/email/i)
        expect(emailElement).toBeInTheDocument()

        const passwordElement = screen.getByPlaceholderText(/password/i)
        expect(passwordElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', {
            name: /login/i
        })
        expect(buttonElement).toBeInTheDocument()
    })
})
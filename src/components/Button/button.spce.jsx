import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
    it('shoud render the button with the text', () => {
        render(<Button text="load more" />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    })
    it('shoud call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });
    })
});
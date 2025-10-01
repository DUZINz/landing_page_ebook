import { render, screen } from '@testing-library/react';
import EbookCard from '../EbookCard';

describe('EbookCard', () => {
    test('renders correctly', () => {
        render(<EbookCard title="Test Ebook" />);
        const titleElement = screen.getByText(/Test Ebook/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('displays the correct content', () => {
        render(<EbookCard title="Test Ebook" description="This is a test description." />);
        const descriptionElement = screen.getByText(/This is a test description./i);
        expect(descriptionElement).toBeInTheDocument();
    });
});
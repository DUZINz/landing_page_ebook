# Ebook Landing Page

This project is a React application designed to showcase a collection of ebooks. It features a clean and modern landing page that highlights individual ebooks with their titles, authors, and descriptions.

## Project Structure

```
ebook-landing-page
├── src
│   ├── components        # Contains reusable components for the landing page
│   │   ├── Header.tsx    # Navigation and branding component
│   │   ├── Hero.tsx      # Prominent section with call-to-action
│   │   ├── EbookCard.tsx  # Component representing an individual ebook
│   │   ├── EbookGrid.tsx  # Grid layout for multiple EbookCard components
│   │   ├── Footer.tsx     # Footer with copyright and links
│   │   └── index.ts       # Re-exports all components
│   ├── pages             # Contains page components
│   │   ├── Home.tsx      # Main landing page component
│   │   └── index.ts      # Re-exports the Home component
│   ├── types             # TypeScript types and interfaces
│   │   └── index.ts      # Defines the structure of ebook data
│   ├── styles            # CSS styles for the application
│   │   ├── globals.css    # Global styles
│   │   └── components.css  # Component-specific styles
│   ├── data              # Contains data for the ebooks
│   │   └── ebooks.ts      # Array of ebook objects
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Entry point of the application
├── public                # Public assets
│   └── index.html        # Main HTML template
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
├── vite.config.ts        # Vite configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd ebook-landing-page
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the landing page.

## Usage

The landing page will display a grid of ebooks, each represented by an `EbookCard`. The `Header` and `Footer` components provide navigation and additional information, while the `Hero` component highlights the main call-to-action.

Feel free to customize the content in the `src/data/ebooks.ts` file to showcase your own ebooks.
# E-Commerce App

A simple e-commerce application with a product listing page, product detail page, and cart functionality. Built with **Next.js**, **TypeScript**, and styled using **Tailwind CSS**.

## Features

- **Product Listing Page**: Displays all available products.
- **Product Detail Page**: Provides detailed information about a selected product.
- **Cart**: Allows users to add and remove products from their cart and view the total.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Build for Production

To build the app for production:
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Thought Process and Architectural Decisions

1. **Next.js for SSR/SSG**: Chosen for its flexibility in rendering, enabling both server-side and static generation of pages, which is ideal for an e-commerce app with dynamic content.
2. **TypeScript**: Used for type safety and better maintainability.
3. **Tailwind CSS**: Selected for rapid UI development with a utility-first approach, ensuring consistency in styling.
4. **File Structure**: Organized components and pages into clearly defined folders (`pages`, `components`) for scalability and readability.

## Trade-Offs and Assumptions

1. **Limited Backend Integration**: For simplicity, the app uses static or mocked data for products and cart functionality, assuming a backend API would replace these in a real-world scenario.
2. **Minimal State Management**: States are managed using built-in useState hooks for minimal state management requirements. This works well for the current app scope but may need to be replaced with a more robust state management solution (e.g., Redux) for larger applications.
3. **No Authentication**: User authentication and profile management were not implemented, as they were beyond the scope of this test project.

## Future Improvements

- Integration with a backend API for dynamic data fetching.
- Improved accessibility (ARIA attributes, keyboard navigation).
- Adding tests (unit and integration) to ensure functionality.

## License

This project is open source and available under the [MIT License](LICENSE).

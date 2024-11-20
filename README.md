# HFK Admin Starter Kit

A modern, feature-rich admin dashboard starter kit built with Next.js 14, TypeScript, and Tailwind CSS. This project provides a solid foundation for building administrative interfaces with a beautiful UI and excellent developer experience.

## Features

- Next.js 14 with App Router
- Tailwind CSS for styling
- TypeScript for type safety
- Dark/Light Mode support
- Internationalization (i18n) ready
- Recharts for data visualization
- Radix UI components
- Responsive Design
- Authentication Ready
- TanStack Table for powerful data tables
- Customizable Theme
- Modern UI Components

## Tech Stack

- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- UI Components:
  - Radix UI Primitives
  - Lucide Icons
  - Class Variance Authority
  - Tailwind Merge
  - Tailwind Animate
- Data Visualization: Recharts
- Table Management: TanStack Table
- HTTP Client: Axios
- Internationalization:
  - i18next
  - react-i18next
  - next-i18next
- Theme: next-themes
- Development Tools:
  - ESLint
  - TypeScript ESLint

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/hasan-furkan/hfk-admin-starter-kit.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                # Next.js 14 app directory
├── components/         # Reusable UI components
├── config/            # Configuration files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and libraries
├── providers/         # React context providers
├── public/            # Static assets
└── service/           # API services and data fetching
```

## Customization

1. Theme: Modify `tailwind.config.ts` to customize your color scheme and theme variables
2. Components: All UI components are in the `components` directory
3. Layouts: Customize layouts in the `app` directory
4. Internationalization: Add new languages in the `public/locales` directory

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features Explained

### Authentication
- Ready-to-use authentication setup
- Protected routes and middleware support
- Cookie-based session management

### Theming
- Dark/Light mode support
- Easy theme customization
- Consistent design system
- I18n Ready

### Data Tables
- Sortable columns
- Pagination
- Search and filtering
- Responsive design

### Internationalization
- Multi-language support
- Easy language switching
- Automatic language detection

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js Team
- Vercel
- Tailwind CSS
- Radix UI
- All other open-source contributors

---

Built with by Hasan Furkan Köprülü

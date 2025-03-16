# Fataplus

Fataplus is an agritech ecosystem designed for Malagasy farmers, providing a comprehensive platform for agricultural management, marketplace integration, and educational resources.

## Features

- User Authentication with Supabase
- Farm Management System
- Marketplace for Agricultural Products
- Learning Modules for Farmers
- Profile Management
- Interactive Maps

## Tech Stack

- Next.js 14
- TypeScript
- Supabase (Authentication & Database)
- Tailwind CSS
- React Leaflet (Maps)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/fenoh3ry/fataplus.git
cd fataplus
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Run the development server:
```bash
npm run dev
```

## Project Structure

```
fataplus/
├── components/     # Reusable UI components
├── contexts/       # React contexts
├── lib/           # Utility functions and configurations
├── pages/         # Next.js pages
├── public/        # Static assets
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

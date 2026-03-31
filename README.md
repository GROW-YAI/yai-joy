# Joya Foods Enterprise

## Project Overview
YAI Joy is a modern, accessible website built with React and TypeScript that provides a user-friendly interface with comprehensive accessibility features. The site uses the Boafo accessibility widget to ensure compliance with WCAG standards and provide an inclusive experience for all users, including those with disabilities.

### Main Features
- **Accessibility Widget**: Integrated Boafo accessibility widget for screen readers, keyboard navigation, and visual adjustments
- **Responsive Design**: Mobile-first approach with Tailwind CSS for consistent experience across devices
- **React Router**: Client-side routing for smooth navigation
- **TypeScript**: Type-safe development with modern JavaScript features
- **Error Boundaries**: Robust error handling to prevent app crashes

### Technologies Used
- **React 18** with Hooks
- **TypeScript** for type safety
- **Vite** as build tool and dev server
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Boafo Accessibility Widget** for accessibility features

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/GROW-YAI/yai-joy.git
   cd yai-joy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and add your Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_boafo_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5174/
   ```

## How to Get Your Boafo API Key

1. Visit [boafo.co](https://boafo.co) and register for an account
2. Log in to your dashboard
3. Navigate to the API section
4. Copy your API key and paste it into the `.env` file

## How to Integrate the Boafo Widget

For detailed integration instructions, refer to the official Boafo documentation:
- [Boafo Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Project Structure

```
yai-joy/
├── app/
│   ├── components/
│   │   ├── BoafoWidgetInitializer.tsx
│   │   └── ...
│   ├── globals.css
│   └── layout.tsx
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── tsconfig.json
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Code Quality

This project uses ESLint for code linting and TypeScript for type checking. Make sure to run the type checker before committing changes.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
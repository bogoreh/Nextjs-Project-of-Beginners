import './globals.css';

export const metadata = {
  title: 'Quiz App',
  description: 'Test your knowledge with our quiz app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
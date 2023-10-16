import './css/globals.css';

export const metadata = {
  title: 'Larks Tech Hub',
  description: 'Developed by TroyMoses',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

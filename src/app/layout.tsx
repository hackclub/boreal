import "./globals.css";
// @ts-ignore
import Meta from '@hackclub/meta'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Meta 
        name="Hack Club" 
        title="The Boreal Express" 
        image="/meta.png"
        description="Every summer Hack Clubbers do something special. We spend hours building projects we care about; all for one goal: to build the world we want to live in. Join us aboard The Boreal Express to build the next chapter of that journey."
      />
      <body>
        {children}
        <script defer data-domain="boreal.hackclub.com" src="https://plausible.io/js/script.js"></script>
      </body>
      
    </html>
  );
}

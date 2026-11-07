
import "./globals.css";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={``}
    >
      <body >
        {children}
      </body>
    </html>
  );
}

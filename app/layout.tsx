import './globals.css';
import 'antd/dist/reset.css';
import {Provider} from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ opacity: 0 }}>
    {/* ugh */}
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

'use client';
import "./globals.css";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Provider} from "react-redux";
import store from "@/app/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    router.push('/pages/teams');
  }, []);

  return (
    <html lang="en">
    <body
        className="antialiased"
    >
      <Provider store={store}>
        {children}
      </Provider>

    </body>
    </html>
  );
}

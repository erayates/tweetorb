"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/satoshi.css";
import "@/styles/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTimeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : <DefaultLayout>{children}</DefaultLayout>}
        </div>
      </body>
    </html>
  );
}

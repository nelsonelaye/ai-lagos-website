"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import nprogress from "nprogress";

export default function NProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    nprogress.start();
    const timeout = setTimeout(() => {
      nprogress.done();
    }, 250);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return null;
}

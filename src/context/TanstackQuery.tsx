"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "lib/queryClient";

export default function TanstackQuery({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
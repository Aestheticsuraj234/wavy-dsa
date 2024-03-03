"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({href , label }:BackButtonProps) => {
  return (
    <div>
      <Button variant={"link"} className="font-normal w-full"
      asChild
      size={"sm"}
      >
        <Link href={href}>
            {label}
        </Link>
      </Button>
    </div>
  );
};
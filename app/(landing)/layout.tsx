import React from "react";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <main className="relative h-full flex-1">
      <div>{children}</div>
    </main>
  );
};
export default LandingPageLayout;

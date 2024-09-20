export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <p>App Layout</p>
    </div>
  );
}

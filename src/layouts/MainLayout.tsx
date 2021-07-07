interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <header>Blog</header>
      <main>{children}</main>
    </>
  )
}

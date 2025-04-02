export function ThemeScript() {
  const code = `
        try {
        const theme = localStorage.getItem('theme');
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const shouldApplyDark =
            theme === 'dark' ||
            (theme === 'system' || !theme) && isSystemDark;

        if(shouldApplyDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark'); 
        }
      } catch (error) {
       
      }
    `

  return <script dangerouslySetInnerHTML={{ __html: code }} />
}

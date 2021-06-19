export function setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
}

export function getTheme() {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    } else {
        setTheme('theme-light');
    }
}
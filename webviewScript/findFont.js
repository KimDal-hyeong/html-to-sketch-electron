// INPUT: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif
// OUTPUT: Helvetica Neue
function getFirstFont(fonts, skipSystemFonts) {
  let regularFont = undefined;
  let systemFont = undefined;

  fonts.split(',').forEach(font => {
    font = font.trim().replace(/^["']+|["']+$/g, '');
    if (font === '') {
      return;
    }

    // See above for a note on OS-specific fonts
    if (!regularFont && (!skipSystemFonts || SYSTEM_FONTS.indexOf(font) < 0)) {
      regularFont = font;
    }
    if (!systemFont) {
      systemFont = font;
    }
  });

  if (regularFont) {
    return regularFont;
  }

  if (systemFont) {
    return systemFont;
  }

  return '-apple-system';
}

export default function findFont() {
  const allElement = window.document.querySelectorAll('*');
  const fontFamilies = Array.from(allElement).reduce((acc, cur) => {
    const fontFamily = getFirstFont(window.getComputedStyle(cur).fontFamily);
    if(acc.indexOf(fontFamily) === -1) {
      acc.push(fontFamily);
    }
    return acc;
  }, []);
  return fontFamilies;
}
// Apply settings IMMEDIATELY to prevent flicker (before DOM loads)
const savedFont = localStorage.getItem("font-family") || "";
const savedSize = localStorage.getItem("font-size") || "1rem";

// Apply font size immediately
if (savedSize) {
  document.documentElement.style.setProperty("--baseFontSize", savedSize);
}

// Apply custom font immediately (if set)
if (savedFont && savedFont !== "") {
  const fontName = savedFont.replace(/ /g, "+");
  const link = document.createElement("link");
  link.id = "dynamic-google-font";
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${fontName}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`;
  document.head.appendChild(link);
  document.documentElement.style.setProperty("--bodyFont", `"${savedFont}", system-ui, sans-serif`);
  document.documentElement.style.setProperty("--headerFont", `"${savedFont}", system-ui, sans-serif`);
}

// Preload fonts for preview
const fontPreloadList = ['Poppins', 'Lato', 'Roboto', 'Open+Sans', 'Quicksand', 'Montserrat', 'Merriweather', 'Source+Sans+Pro'];
fontPreloadList.forEach(font => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500&display=swap`;
  document.head.appendChild(link);
});

document.addEventListener("DOMContentLoaded", () => {
  const settingsRoots = document.querySelectorAll(".settings");
  if (settingsRoots.length === 0) return;

  function applyFontFamily(name: string) {
    const linkId = "dynamic-google-font";
    let existingLink = document.getElementById(linkId) as HTMLLinkElement | null;
    if (existingLink) existingLink.remove();

    if (name && name !== "") {
      const fontName = name.replace(/ /g, "+");
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fontName}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`;
      document.head.appendChild(link);
      document.documentElement.style.setProperty("--bodyFont", `"${name}", system-ui, sans-serif`);
      document.documentElement.style.setProperty("--headerFont", `"${name}", system-ui, sans-serif`);
    } else {
      document.documentElement.style.removeProperty("--bodyFont");
      document.documentElement.style.removeProperty("--headerFont");
    }
    localStorage.setItem("font-family", name);
  }

  function applyFontSize(size: string) {
    document.documentElement.style.setProperty("--baseFontSize", size);
    localStorage.setItem("font-size", size);
  }

  // Font dropdown'u kapat
  function closeFontDropdown() {
    document.querySelectorAll(".font-dropdown").forEach(d => d.classList.remove("open"));
  }

  // Tema panelini kapat (Darkmode'un paneli)
  function closeThemePanel() {
    const themePanel = document.getElementById("theme-selector-panel");
    if (themePanel) themePanel.style.display = "none";
  }

  settingsRoots.forEach(settingsRoot => {
    const fontDropdown = settingsRoot.querySelector(".font-dropdown") as HTMLElement | null;
    const fontButton = settingsRoot.querySelector(".font-button") as HTMLButtonElement | null;
    const showMoreBtn = settingsRoot.querySelector(".font-show-more") as HTMLElement | null;
    const fontHidden = settingsRoot.querySelector(".font-hidden") as HTMLElement | null;
    const fontRadios = settingsRoot.querySelectorAll("input[name='font-choice']") as NodeListOf<HTMLInputElement>;
    const fontSizeRadios = settingsRoot.querySelectorAll("input[name='font-size-choice']") as NodeListOf<HTMLInputElement>;

    // Load saved values
    fontRadios.forEach(radio => {
      if (radio.value === savedFont) radio.checked = true;
      if (savedFont === "" && radio.value === "") radio.checked = true;
    });

    fontSizeRadios.forEach(radio => {
      if (radio.value === savedSize) radio.checked = true;
    });

    // Font dropdown toggle - tema panelini de kapat
    fontButton?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = fontDropdown?.classList.contains("open");
      closeFontDropdown();
      closeThemePanel(); // Tema panelini kapat
      if (!isOpen) fontDropdown?.classList.add("open");
    });

    // Diğer Fontlar toggle
    showMoreBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (fontHidden) {
        const isExpanded = fontHidden.classList.contains("expanded");
        fontHidden.classList.toggle("expanded");
        showMoreBtn.classList.toggle("expanded");
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const target = e.target as Node;
      if (!fontDropdown?.contains(target)) {
        closeFontDropdown();
      }
    });

    // Font selection
    fontRadios.forEach(radio => {
      radio.addEventListener("change", () => applyFontFamily(radio.value));
    });

    // Font size selection
    fontSizeRadios.forEach(radio => {
      radio.addEventListener("change", () => applyFontSize(radio.value));
    });

    // ESC to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeFontDropdown();
    });
  });

  // Darkmode butonu tıklandığında font dropdown'u kapat
  document.querySelectorAll(".darkmode").forEach(btn => {
    btn.addEventListener("click", () => {
      closeFontDropdown();
    });
  });
});

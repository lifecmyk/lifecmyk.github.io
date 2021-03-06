app.factory("local", $state => {
  let userLang = navigator.language || navigator.userLanguage;
  let local = {};

  if (userLang === "es" || userLang === "es-ES" || userLang === "ES" || userLang === "es_ES") {
    local.lang = "es";
  }
  if (userLang === "en" || userLang === "en-EN" || userLang === "EN" || userLang === "en_EN") {
    local.lang = "en";
  }
  if (userLang === "zh" || userLang === "zh-ZH" || userLang === "ZH" || userLang === "zh_ZH") {
    local.lang = "ch";
  }

  info("Web is in (" + local.lang.toUpperCase() + ")");

  local.change = () => {
    if (local.lang === "es") {
      local.lang = "en";
      $state.reload();
      info("Web is in (" + local.lang.toUpperCase() + ")");
    } else if (local.lang === "en") {
      local.lang = "ch";
      $state.reload();
      info("Web is in (" + local.lang.toUpperCase() + ")");
    } else if (local.lang === "ch") {
      local.lang = "es";
      info("Web is in (" + local.lang.toUpperCase() + ")");
      $state.reload();
    }
  };

  local.toLang = l => {
    local.lang = l;
    $state.reload();
    info("Web is in (" + local.lang.toUpperCase() + ")");
  };

  return local;
});

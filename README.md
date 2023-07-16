# csfd-no-verbal
Odstraní verbala a/nebo jiné vybrané uživatele z recenzí, hodnocení a diskuzí na ČSFD.cz

## Instalace
Nainstalujte do prohlížeče jeden z userscript manažerů:

**Violentmonkey** - [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) (👍🏻)  
**Tampermonkey** - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
**Greasemonkey** - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

Přidejte v jeho nastavení nový skript jednou z následujících metod:

**A)** Jako URL `https://raw.githubusercontent.com/mystrdat/csfd-no-verbal/master/script.js` (👍🏻 - *umožní aktualizace*)  
**B)** Manuálně zkopírujte obsah [script.js](./script.js)  

## Přidání uživatelů do blocklistu
Lze udělat několika způsoby:

**A)** Klikněte na ikonku 👁️ v hlavičce recenze (👍🏻)  
![image](https://user-images.githubusercontent.com/1652895/211173834-1d81f874-c2f0-46a5-81d2-be13c7c44d54.png)

**B)** Vytvořte v JSON storage skriptu klíč `users` s hodnotou pole uživatelů, např. `users: ["verbal", "LIVINGDEAD", "POMO"]`  
**C)** Na [řádku 24](https://github.com/mystrdat/csfd-no-verbal/blob/master/script.js#L24) upravte druhý parametr funkce `GM.getValue`, např. `const users = await GM.getValue("users", ["verbal", "LIVINGDEAD", "POMO"]);` (přepíše se při aktualizaci)

## Odebrání uživatelů z blocklistu

V tuhle chvíli lze pouze úpravou nebo smazáním pole `users` v JSON storage nebo čistým přeinstalováním.

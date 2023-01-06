# csfd-no-verbal
Odstraní vybrané uživatele z recenzí a hodnocení na ČSFD.cz (default: `verbal`)

## Instalace
Vyžaduje některý z userscript manažerů:

**Violentmonkey** - [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) (*doporučuji*)  
**Tampermonkey** - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
**Greasemonkey** - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

Přidejte v nastavení extensionu nový skript jednou z následujících metod:

a) Jako URL `https://raw.githubusercontent.com/mystrdat/csfd-no-verbal/master/script.js`  
b) Manuálně zkopírujte obsah [script.js](./script.js)
c) z Greasy Fork - https://greasyfork.org/en/scripts/457765-no-verbal-on-%C4%8Dsfd-cz


## Konfigurace

Na [řádku 14](https://github.com/mystrdat/csfd-no-verbal/blob/master/script.js#L14) upravte pole uživatelů jak chcete, např. `const users = ['verbal', 'LIVINGDEAD', 'POMO']`...

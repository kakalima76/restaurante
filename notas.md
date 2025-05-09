# Importante manter a versão igual ou maior que essa. Por padrão vem instalado a 15.2.0 O que gera conflito com a versão do react-native

"react-native-svg": "15.11.2"

# Cores padrão do tailwindcss

--color-primary-500: #2563EB; /_ Azul _/
--color-secondary-500: #8B5CF6; /_ Roxo _/
--color-tertiary-500: #10B981; /_ Verde _/
--color-error-500: #DC2626; /_ Vermelho _/
--color-success-500: #16A34A; /_ Verde mais escuro _/
--color-warning-500: #FACC15; /_ Amarelo _/
--color-info-500: #0EA5E9; /_ Azul claro _/
--color-typography-500: #374151; /_ Cinza escuro para texto _/
--color-outline-500: #6B7280; /_ Cinza médio para bordas _/
--color-background-500: #F9FAFB; /_ Cinza claro para fundo _/

# Para renderizar o gluestack em outras pastas como em "src" é necessário alterar o arquivo 'babel.config.js' para o seguinte script

module.exports = function (api) {
api.cache(true);

return {
presets: ['babel-preset-expo'],
plugins: [
'nativewind/babel',
[
'module-resolver',
{
root: ['./'],
alias: {
'@': './',
'tailwind.config': './tailwind.config.js',
},
},
],
],
};
};

# Existe um erro quanto a um pacote inbstalado com o glustack. É necessário alterar o content em tailwind.config.js Pelo script abaixo

content: [
'./index.{js,ts,jsx,tsx}',
'./App.{js,ts,jsx,tsx}',
'./src/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
],

# É necessário alterar o conteúdo de 'C:\Users\12436720\Documents\node\auto-atendimento\node_modules\@react-aria\utils\dist\animation.mjs'

import { useLayoutEffect as $useLayoutEffect } from "./useLayoutEffect.mjs";
import { useState as $useState, useCallback as $useCallback } from "react";

// Detecta se está no ambiente web
const isWeb = typeof document !== "undefined" && typeof window !== "undefined";

let flushSync;
if (isWeb) {
try {
flushSync = require("react-dom").flushSync;
} catch {
flushSync = (fn) => fn(); // fallback seguro
}
} else {
flushSync = (fn) => fn(); // mobile fallback
}

function useEnterAnimation(ref, isReady = true) {
let [isEntering, setEntering] = $useState(true);
let isAnimationReady = isEntering && isReady;

$useLayoutEffect(() => {
if (isAnimationReady && ref.current && "getAnimations" in ref.current) {
for (let animation of ref.current.getAnimations()) {
if (animation instanceof CSSTransition) animation.cancel();
}
}
}, [ref, isAnimationReady]);

useAnimation(ref, isAnimationReady, $useCallback(() => setEntering(false), []));
return isAnimationReady;
}

function useExitAnimation(ref, isOpen) {
let [exitState, setExitState] = $useState(isOpen ? "open" : "closed");

switch (exitState) {
case "open":
if (!isOpen) setExitState("exiting");
break;
case "closed":
case "exiting":
if (isOpen) setExitState("open");
break;
}

let isExiting = exitState === "exiting";

useAnimation(ref, isExiting, $useCallback(() => {
setExitState((state) => (state === "exiting" ? "closed" : state));
}, []));

return isExiting;
}

function useAnimation(ref, isActive, onEnd) {
$useLayoutEffect(() => {
if (isActive && ref.current) {
if (!("getAnimations" in ref.current)) {
onEnd();
return;
}

      let animations = ref.current.getAnimations();
      if (animations.length === 0) {
        onEnd();
        return;
      }

      let canceled = false;

      Promise.all(animations.map((a) => a.finished)).then(() => {
        if (!canceled) flushSync(() => onEnd());
      }).catch(() => {});

      return () => {
        canceled = true;
      };
    }

}, [ref, isActive, onEnd]);
}

export {
useEnterAnimation,
useExitAnimation,
};

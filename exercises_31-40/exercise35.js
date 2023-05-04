/* 
Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles("HTML", "PHP")   // true
sonCompatibles("PHP", "PYTHON") // false
*/
const frontendLanguages = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "COFFEESCRIPT",
  "DART",
  "ELM",
  "CLOJURESCRIPT",
  "HAXE",
  "JSX",
  "WEBASSEMBLY",
];

const backendLanguages = [
  "JAVA",
  "PYTHON",
  "PHP",
  "RUBY",
  "NODE",
  "C#",
  "GO",
  "SWIFT",
  "KOTLIN",
  "RUST",
  "PERL",
  "SCALA",
];

function areCompatible(languageA, languageB) {
  if (
    (frontendLanguages.includes(languageA.toUpperCase()) &&
      backendLanguages.includes(languageB.toUpperCase())) 
      ||
    (frontendLanguages.includes(languageB.toUpperCase()) &&
      backendLanguages.includes(languageA.toUpperCase()))
  ){
    return true;
  }

  return false;
}

console.log(areCompatible("HTML", "NODE"));
console.log(areCompatible("CSS", "go"));
console.log(areCompatible("NOde", "go"));
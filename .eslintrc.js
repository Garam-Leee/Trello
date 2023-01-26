module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  parser: "babel-eslint",
  rules: {
    "react/react-in-jsx-scope": 0,
  },
};

// # env
// env는 eslint를 적용할 환경을 설정하는 부분으로, 쉽게 생각해서 프로젝트가 어떤 환경에서 실행되는 코드인지를 설정하는 것입니다.

// # extends
// extends는 설정을 특정(specify)하는 문자열이거나, 이전 설정을 확장(extends)하는 추가적인 설정에 대한 문자열 리스트입니다.

// # parser
// parser는 코드를 ESLint에 맞게 파싱하기 위해 사용하는 것으로, 값을 주지 않으면 기본적으로 'Espree'로 설정됩니다.

// # parserOptions
// parserOption는 자바스크립트 지원 옵션을 설정하기 위한 부분으로, 기본적으로는 ECMAScript 5 syntax를 지원합니다.

// # plugins
// ESLint는 다양한 설정을 위한 외부 플러그인을 지원하는데, 사용하기 전에 패키지 다운로드가 필요합니다.

// # rules
// rules는 린트로 잡아낼 에러에 대한 규칙을 설정하는 부분으로, Eslint에는 built-in된 다양한 rules이 있고 직접 추가할 수도 있습니다.

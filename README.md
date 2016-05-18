# Eslint config for JS projects.

As compiled by the Exeter Office. There are 2 configs.

- One for general JS, the default `@arago/eslint-config-arago`
- One for React projects with JSX, `@arago/eslint-config-arago/react`

add to `package.json` under `devDependencies` and `eslint`

```
    ...
    "devDependencies": {
        "@arago/eslint-config-arago": "arago/eslint-config-arago#master",
        "babel-eslint": "x.y.z",
        "eslint": "x.y.z"
    },
    ...
    "eslint": {
        "extends": "@arago/eslint-config-arago(/react)"
    }
```

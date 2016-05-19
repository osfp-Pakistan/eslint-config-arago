/**
 *  Try to intelligently add the eslint config to your package.json
 */
var fs = require("fs");
var path = require("path");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function quit(code) {
    rl.close();
    process.exit(code);
}

rl.question("Do you want to add the `eslintConfig` to your `package.json`? [yes]", function(answer) {
    if (!answer || /^y(|es)$/i.test(answer)) {
        rl.question("Do you need JSX support, e.g the react plugin? [yes]", function (react) {
            if (!react || /^y(|es)$/i.test(react)) {
                tryAndInstall("@arago/eslint-config-arago/react");
            } else {
                tryAndInstall("@arago/eslint-config-arago");
            }
        });
    } else{
        quit()
    }
});


function tryAndInstall(name) {
    //we need to find the package.json
    //traverse up to the "node_modules" folder, then one higher.
    var directory = __dirname;
    var hops = 5;
    var nodeModules = /node_modules$/;
    while(!nodeModules.test(directory)) {
        hops--;
        if (hops === 0) {
            console.warn("Could not find `package.json`");
            quit(1);
        }
        directory = path.dirname(directory);
    }
    directory = path.dirname(directory);

    var filename = path.join(directory, "package.json");
    var pkg;
    try {
        pkg = require(filename);
    } catch(e) {
        console.warn("Could not load `package.json`");
        quit(1);
    }

    if (!pkg.eslintConfig) {
        pkg.eslintConfig = { extends: name }
    } else if (!pkg.eslintConfig.extends) {
        pkg.eslintConfig.extends = name;
    } else if (Array.isArray(pkg.eslintConfig.extends)) {
        if (pkg.eslintConfig.extends.indexOf(name) === -1) {
            pkg.eslintConfig.extends.push(name);
        }
    } else if (pkg.eslintConfig.extends !== name) {
        pkg.eslintConfig.extends = [pkg.eslintConfig.extends, name];
    }
    try {
        fs.writeFileSync(filename, JSON.stringify(pkg, null, "  "), "utf8");
    } catch(e) {
        console.warn("Could not re-write `package.json`");
        quit(1);
    }
    quit(0);
}

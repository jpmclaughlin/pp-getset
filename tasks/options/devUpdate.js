module.exports = {
  main: {
    options: {
        updateType: 'force', // 'force'|'report'|'prompt'
        reportUpdated: false, // don't report up-to-date packages
        semver: false, // update to latese, irrespective of semver
        packages: {
            devDependencies: true, // only check for devDependencies
            dependencies: false
        },
        packageJson: null, // use matchdep default findup to locate package.json
        reportOnlyPkgs: [] // use updateType action on all packages
    }
  }
}
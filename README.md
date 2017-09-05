# [ajlende.github.io](http://ajlende.github.io)

This repository contains the source code for [ajlende.github.io](http://ajlende.github.io).

## Scripts

- `postinstall`: Hack to fix conflicting `.tag` and `.number` classes in Bulma and Prism by adding `:not(.token)` to each class in the Bulma source (probably only works on macOS)
- `build`: Builds the source files into a `public` directory
- `develop`: Serves the site with HMR enabled on `localhost:8000`
- `deploy`: Deploys the site to GitHub pages

## License

Source code licensed under [MIT](http://opensource.org/licenses/mit-license.php).

Website content all rights reserved.

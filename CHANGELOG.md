# Changelog

## 0.21.0 (2025-04-27)

- Bump Vite to v6, express to v5 and other dependencies to their newest versions

## 0.20.0 (2024-11-27)

- Bring routing behaviour in line with vite dev and vite preview ([#153](https://github.com/szymmis/vite-express/pull/153))

Contributors: [@jameslounds](https://github.com/jameslounds)

## 0.19.0 (2024-08-29)

- Use express-static-gzip for improved static file serving ([#144](https://github.com/szymmis/vite-express/pull/144))
- Bump dependencies

Contributors: [@je4ngomes](https://github.com/je4ngomes)

## 0.18.0 (2024-08-11)

- Fix issue where passing the server config disables inline config ([#140](https://github.com/szymmis/vite-express/pull/140))
- Bump dependencies

Contributors: [@Vija02](https://github.com/Vija02)

## 0.17.0 (2024-06-08)

- Allow specyfing `vite-express` verbosity level ([#128](https://github.com/szymmis/vite-express/pull/128))
- Add possibility to override default `express.static()` options ([#134](https://github.com/szymmis/vite-express/pull/134))
- Respect HMR options from Vite config ([#135](https://github.com/szymmis/vite-express/pull/135))

Contributors: [@srguiwiz](https://github.com/srguiwiz), [@lucasavila00](https://github.com/lucasavila00)

## 0.16.0 (2024-03-23)

- Export getViteConfig as a part of public API ([#124](https://github.com/szymmis/vite-express/pull/116))

Contributors: [@srguiwiz](https://github.com/srguiwiz)

## 0.15.0 (2024-02-04)

- Add support for express v5 ([#116](https://github.com/szymmis/vite-express/pull/116))

## 0.14.1 (2024-01-25)

- Fix relative imports in subpath index.html files ([#114](https://github.com/szymmis/vite-express/pull/114))

Contributors: [@elturpin](https://github.com/elturpin)

## 0.14.0 (2024-01-21)

- Serve HTML static files on explicit ".html" requests ([#110](https://github.com/szymmis/vite-express/pull/110))
- Migrate to `vitest` test runner ([#108](https://github.com/szymmis/vite-express/pull/108))

Contributors: [@rmhaiderali](https://github.com/rmhaiderali)

## 0.13.0 (2024-01-02)

- Add ability to specify location of vite config ([#102](https://github.com/szymmis/vite-express/pull/102))
- Support async html transformer function ([#103](https://github.com/szymmis/vite-express/pull/103))

Contributors: [@peterlama](https://github.com/peterlama)

## 0.12.0 (2023-12-20)

- Make Vite middleware use current server for HMR WebSocket ([#100](https://github.com/szymmis/vite-express/pull/100))
- Emit event when the Vite dev server has finished closing ([#98](https://github.com/szymmis/vite-express/pull/98))

Contributors: [@elturpin](https://github.com/elturpin), [@patreeceeo](https://github.com/patreeceeo), [@pontusva](https://github.com/pontusva)

## 0.11.1 (2023-11-17)

- Mount middlewares that serve HTML at `config.base` instead of `/` ([#91](https://github.com/szymmis/vite-express/pull/91))

Contributors: [@rmhaiderali](https://github.com/rmhaiderali)

## 0.11.0 (2023-10-02)

- Add support for multipage apps ([#88](https://github.com/szymmis/vite-express/pull/88))

Contributors: [@elturpin](https://github.com/elturpin)

## 0.10.0 (2023-08-24)

- Enable resolving config without Vite ([#83](https://github.com/szymmis/vite-express/pull/83))
- Add config option to ignore paths ([#84](https://github.com/szymmis/vite-express/pull/84))

## 0.9.2 (2023-07-21)

- Use export assignment syntax in types declaration ([#74](https://github.com/szymmis/vite-express/pull/73))
- Bump word-wrap from 1.2.3 to 1.2.4 ([#73](https://github.com/szymmis/vite-express/pull/73))
- Bump vite from 4.0.4 to 4.0.5 ([#66](https://github.com/szymmis/vite-express/pull/66))

## 0.9.1 (2023-06-05)

- Load HTML on every request
- Merge custom config with inline Vite's config when starting dev server

## 0.9.0 (2023-06-05)

- Allow specyfing HTML transformer ([#65](https://github.com/szymmis/vite-express/pull/65))
- Implement `viteless` mode ([#64](https://github.com/szymmis/vite-express/pull/64))
- Bump socket.io-parser from 4.2.2 to 4.2.3 ([#61](https://github.com/szymmis/vite-express/pull/61))
- Add Vite base support ([#57](https://github.com/szymmis/vite-express/pull/57))
- Remove `node-fetch` from dependencies

Contributors: [@moonrailgun](https://github.com/moonrailgun)

## 0.8.0 (2023-05-19)

- Use `Vite Dev Server` in middleware mode when running in development instead of a proxied separate Vite process
- Temporarily drop support for multi-page apps

## 0.7.1 (2023-05-17)

- Turn off `index.html` serving functionality of `express.static()` middleware in production mode

Contributors: [@Julienng](https://github.com/Julienng)

## 0.7.0 (2023-05-14)

- Add `ViteExpress.static()` middleware-like function to change the order of `vite-express'` injected static files serving middleware.

## 0.6.0 (2023-04-28)

- Stop using redirection to Vite Dev Server when serving static files in dev mode.

## 0.5.5 (2023-04-27)

- Fix inability to set `ViteExpress.config` settings to falsy values
- Bump `yaml` package version to avoid vulnerabilities

Contributors: [@tomayac](https://github.com/tomayac)

## 0.5.4 (2023-04-21)

- Pass request path correctly into HTML serving middleware in dev mode

## 0.5.3 (2023-04-12)

- Make Vite's port not be printed out to console by default.
- Add config option to control that behaviour

## 0.5.2 (2023-04-08)

- Make `picocolors` a runtime dependency instead of peer dependency.

Contributors: [@mortalYoung](https://github.com/mortalYoung)

## 0.5.1 (2023-03-24)

- Add `picocolors` as a peer dependency to package.json

## 0.5.0 (2023-03-21)

- Print url schema correctly when Vite is running in https mode

Contributors: [@maxbeatty](https://github.com/maxbeatty), [@hankthetank27](https://github.com/hankthetank27), [@vinceps](https://github.com/vinceps)

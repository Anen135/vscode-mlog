# Changelog

## [0.1.1] - (2026-05-19)

### Forked / Changed
- This release is a **community fork** of `Antyos/vscode-mlog`
- Updated repository structure and metadata for fork compatibility
- Fixed outdated VS Code engine requirement
- Improved extension tags and marketplace metadata for discoverability

### Added
- Snippet-style completion support for key `mlog` instructions (e.g. `ulocate`)
- Basic autocomplete provider groundwork for future context-aware suggestions
- Extended built-in `@` completions (including `@firstItem`, `@time`, `@counter`, etc.)

### Changed
- Improved completion item categorization (commands vs builtins vs variables)
- Refactored extension activation logic for easier future LSP migration

### Fixed
- `@firstItem` and similar sensor-like constants not appearing in completions
- Minor inconsistencies in completion item types

---
## [0.1.0] - (2021-08-20)

Update `mlog` syntax to be compatible with Mindustry v7. Closes [#3](https://github.com/Antyos/vscode-mlog/issues/3).

### Added

- Jump labels syntax
- Operators: `strictEqual`, `asin`, `acos`, and `atan`
- Commands: `wait` and `lookup`
- At-names:
    - Built-in: `@tick`
    - Counts: `@blockCount`, `@unitCount`, `@itemCount`, `@liquidCount`
    - Controlled: `@ctrlProcessor`, `@ctrlPlayer`, `@ctrlFormation`
    - Sensable: `@progress`, `@timescale`, `@size`, `@dead`, `@range`, `@boosting`, `@controller`
    - Other: `@payload-propulsion-tower`, `@payload-source`, `@payload-void`
- Unrecognized at-names will also be highlighted

### Fixed

- Highlighting for: `@power-node-large`, `@battery-large`, `@solar-panel-large`

### Changed

- Operators: `atan2` and `dst` with `angle` and `len`, respectively

### Deprecated

- At-names: `@commanded`
- Operators: `atan2` and `dst`. While not officially deprecated in-game, it is unclear if they will continue to be supported and the game seems to be favoring the new `angle` and `len`, respectively.

## [0.0.2] - (2020-12-25)

### Added

- Global constants: `@maph` and `@mapw`
- No operation: `noop`

### Fixed

- Highlighting global constants for blocks now (correctly) use dash-case instead of camelCase. I.e. `@copper-wall-large` instead of `@copperWallLarge`
- Fixed distinction between logical **AND** operator and bitwise **AND**. Logical **AND** (`land`) is now highlighted
    |                 | In game|  mlog |
    |-----------------|--------|-------|
    | Logical **AND** |   `and`| `land`|
    | Bitwise **AND** | `b-and`|  `and`|

## [0.0.1] - (2020-12-23)

### Initial release

- Syntax highlighting for Mindustry Logic (`mlog`) files

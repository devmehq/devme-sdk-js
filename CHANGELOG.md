# Change Log

## [Unreleased]

## v1.2.1

### Added

- ESM build support with dual CommonJS/ESM exports
- Separate TypeScript configurations for ESM and CommonJS builds
- Build script to fix ESM imports with .js extensions
- Support for both import and require syntax
- CONTRIBUTING.md with contribution guidelines
- Enhanced package.json exports field for better module resolution
- Support for subpath exports allowing cleaner imports (e.g., `@devmehq/sdk-js/api`)
- Proper TypeScript types exports for all subpaths
- Files field in package.json to optimize npm package size

### Changed

- Updated SDK types and client structure
- Improved API structure and code formatting
- Enhanced linting configuration

### Fixed

- Corrected main and types paths to point to dist directory

## v1.1.2

- Remove node-fetch dependency
- Add axios client for request
- Enhance typing

## v1.1.0

- Initial stable release
- Adding tests
- Adding documentation
- Adding examples
- Adding examples to README.md

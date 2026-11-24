# Cargo Manifest Validation

A small Node.js script that validates a cargo manifest and converts pound weights to kilograms.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Security](#security)
- [How to Contribute?](#how-to-contribute)
- [What's Next?](#whats-next)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About

This project checks that a manifest includes valid container, destination, weight, unit, and hazardous-material fields. Valid manifests are printed to the console; weights in pounds (`lb`) are converted to kilograms (`kg`).

## Features

- Validates required manifest fields and their types.
- Accepts `kg` and `lb` as weight units.
- Converts pounds to kilograms using the conversion factor in the script.
- Reports validation errors or the processed manifest's container ID and weight.

## Tech Stack

- JavaScript
- Node.js (built-in modules only)
- JSON

## Architecture

`script.js` loads `manifest.json`, validates the manifest, normalizes its units when needed, and prints the result to the console. Validation and unit conversion are implemented as functions in the script.

## Project Structure

```text
.
├── manifest.json   # Sample manifest input
├── README.md       # Project documentation
└── script.js       # Validation and processing logic
```

## Getting Started

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. From the project directory, run:

   ```sh
   node script.js
   ```

The sample manifest should produce output similar to:

```text
Validation success: 1001
Total weight: 99.21 kg
```

## Configuration

Edit `manifest.json` to provide the manifest to process. It should contain:

| Field | Expected value |
| --- | --- |
| `containerId` | Positive integer |
| `destination` | Non-empty string |
| `weight` | Positive finite number |
| `unit` | `"kg"` or `"lb"` |
| `hazmat` | Boolean |

The script currently reads the file named `manifest.json` from the project directory.

## Security

The sample manifest is local test data. Review and sanitize any real cargo information before sharing it or committing it to source control.

## How to Contribute?

Make focused changes, preserve the manifest validation behavior, and run `node script.js` to verify the sample workflow. Include a clear description of any behavior changes in your contribution.

## What's Next?

No roadmap is currently defined.

## License

No license is currently specified for this project.

## Acknowledgements

Built with Node.js and JSON.

## Author

Jack Sawyer

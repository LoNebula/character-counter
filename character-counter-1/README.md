# character-counter

This project is a Visual Studio Code extension called "character-counter". It provides functionality to count characters in selected text within the editor.

## Features

- Counts the number of characters in the selected text.
- Displays the character count in a user-friendly manner.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd character-counter
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open a text file in Visual Studio Code.
2. Select the text you want to count.
3. Use the command palette (Ctrl+Shift+P) and type "Character Counter" to execute the command.

## Development

To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## Testing

To run the tests for the extension, use the following command:

```
npm test
```

## Packaging

To output a .vsix file from this project, you can use the following command in the command prompt:

```
npx vsce package
```

Make sure you have the `vsce` tool installed. If it's not installed, you can install it globally using:

```
npm install -g vsce
```

## Changelog

See the [CHANGELOG.md](CHANGELOG.md) file for a list of changes and updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
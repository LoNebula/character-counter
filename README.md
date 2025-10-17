# character-counter README

This is a simple extension for Visual Studio Code and Cursor that displays the character count of your document in the status bar.

## Features

*   **Total Character Count**: See the total number of characters in the current file, right in your status bar.
*   **Selection Count**: When you select text, the status bar will update to show the number of selected characters alongside the total count.
*   **Real-time Updates**: The count updates automatically as you type, edit, or change your selection.

## Requirements

There are no special requirements or dependencies for this extension.

## Release Notes

### 0.0.1

Initial release of the Character Counter extension.

---

### Building the .vsix file
Instructions to package this project into a .vsix file.

1. Prepare Your Environment (First Time Only)
First, you need to install the necessary tools. You only need to do this once per machine.
```bash
# Install the VS Code extension packaging tool (vsce)
npm install -g vsce

# Install the TypeScript compiler
npm install -g typescript
```

2. Set Up the Project
Navigate to the project's root directory (the one containing the package.json file) and install the required libraries.
```bash
# Navigate to the project's root directory
cd (path/to/your/project/folder)

# Install the necessary libraries
npm install
```

3. Package the Extension
Once everything is set up, create the .vsix file with this command.

```bash
# Create the .vsix file
vsce package
```

If successful, a file named [extension-name]-[version].vsix will be created in the project's root directory. 🎉

**Enjoy!**
export function activate(context) {
    // Your extension's activation logic goes here
    console.log('Character Counter extension is now active!');

    let disposable = vscode.commands.registerCommand('extension.countCharacters', () => {
        vscode.window.showInformationMessage('Character Counter activated!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Character Counter extension is now deactivated.');
}
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// 拡張機能が有効化されたときに呼び出される
export function activate(context: vscode.ExtensionContext) {

	// ステータスバーに表示するアイテムを作成
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	context.subscriptions.push(statusBarItem);

	// ステータスバーを更新する関数
	const updateStatusBar = () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			statusBarItem.hide();
			return;
		}

		const document = editor.document;
		const selection = editor.selection;

		// 選択範囲の文字数を取得
		const selectedText = document.getText(selection);
		const selectedCharsCount = selectedText.length;

		// 全体の文字数を取得
		const totalCharsCount = document.getText().length;

		if (selectedCharsCount > 0) {
			// 選択範囲がある場合は、選択範囲と全体の文字数を表示
			statusBarItem.text = `$(symbol-key) Selected: ${selectedCharsCount} | Total: ${totalCharsCount} Chars`;
		} else {
			// 選択範囲がない場合は、全体の文字数のみ表示
			statusBarItem.text = `$(symbol-key) Total: ${totalCharsCount} Chars`;
		}
		statusBarItem.show();
	};

	// イベントリスナーを登録
	// アクティブなエディタが変更されたとき
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBar));
	// テキストの選択範囲が変更されたとき
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBar));
	// ドキュメントの内容が変更されたとき
	context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(e => {
		// 変更されたドキュメントが現在アクティブなエディタのものであることを確認
		if (vscode.window.activeTextEditor && e.document === vscode.window.activeTextEditor.document) {
			updateStatusBar();
		}
	}));

	// 最初に一度呼び出して初期表示
	updateStatusBar();
}

// 拡張機能が無効化されたときに呼び出される
export function deactivate() { }

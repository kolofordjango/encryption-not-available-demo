import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', async () => {
		const ext = vscode.extensions.getExtension("test.encryption-not-available-demo");
		if (!ext) {
			throw new Error("Extension not found");
		}

		const context: vscode.ExtensionContext = await ext.activate();

		assert.ok(ext.isActive);

		await context.secrets.store("hello", "world");

		assert.strictEqual(1+1,2);
	});
});

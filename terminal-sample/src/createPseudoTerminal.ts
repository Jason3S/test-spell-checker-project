'use strict';
import * as vscode from 'vscode';
import { colorTextt } from './colorText';

export function createPseudoTerminal() {
    const writeEmitter = new vscode.EventEmitter<string>();
    const closeEmitter = new vscode.EventEmitter<void>();
    const pty: vscode.Pseudoterminal = {
        onDidWrite: writeEmitter.event,
        onDidClose: closeEmitter.event,
        open: () => writeEmitter.fire('> '),
        handleInput: (data) => writeEmitter.fire(data === '\r' ? '\r\n> ' : colorTextt(data)),
        close: () => {},
    };

    const options: vscode.ExtensionTerminalOptions = {
        name: 'Pseudo Terminal',
        pty,
    };

    return vscode.window.createTerminal(options);
}

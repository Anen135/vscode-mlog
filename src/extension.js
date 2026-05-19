const vscode = require('vscode');

function activate(context) {

    const provider = vscode.languages.registerCompletionItemProvider(
        'mlog',
        {
            provideCompletionItems(document, position) {

                const items = [];

                // --------------------
                // SIMPLE KEYWORDS
                // --------------------
                const keywords = [
                    'sensor',
                    'set',
                    'op',
                    'jump',
                    'ubind'
                ];

                keywords.forEach(cmd => {
                    const item = new vscode.CompletionItem(
                        cmd,
                        vscode.CompletionItemKind.Keyword
                    );

                    items.push(item);
                });

                // --------------------
                // SNIPPET COMMANDS
                // --------------------

                // ulocate (main version)
                const ulocate = new vscode.CompletionItem(
                    'ulocate',
                    vscode.CompletionItemKind.Snippet
                );

                ulocate.insertText = new vscode.SnippetString(
                    'ulocate ${1:ore} ${2:core} ${3:true} ${4:target} ${5:x} ${6:y} ${7:found} ${8:building}'
                );

                ulocate.detail = 'Locate nearest ore/building/spawn';

                items.push(ulocate);

                // ucontrol snippet
                const ucontrol = new vscode.CompletionItem(
                    'ucontrol',
                    vscode.CompletionItemKind.Snippet
                );

                ucontrol.insertText = new vscode.SnippetString(
                    'ucontrol ${1:move} ${2:x} ${3:y} ${4:0} ${5:0} ${6:0}'
                );

                items.push(ucontrol);

                // --------------------
                // BUILTINS (@ variables)
                // --------------------
                const builtins = [
                    '@unit',
                    '@this',
                    '@counter',
                    '@time',
                    '@firstItem',
                    '@itemCapacity'
                ];

                builtins.forEach(v => {
                    const item = new vscode.CompletionItem(
                        v,
                        vscode.CompletionItemKind.Variable
                    );

                    item.detail = 'Mindustry builtin variable';
                    items.push(item);
                });

                return items;
            }
        },
        '@' // trigger autocomplete on @
    );

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
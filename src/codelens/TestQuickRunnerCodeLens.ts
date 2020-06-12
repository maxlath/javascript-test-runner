import { CodeLens, Range, Command } from 'vscode'

export default class TestQuickRunnerCodeLens extends CodeLens {
    constructor(range: Range, testName: string, rootPath: string, fileName: string) {
        super(range, {
            title: 'Test Quick',
            command: 'javascript-test-runner.run.testQuick',
            arguments: [testName, rootPath, fileName]
        })
    }
}

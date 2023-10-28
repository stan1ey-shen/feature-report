// JavaScript
const fs = require('fs');
const path = require('path');
const Gherkin = require('@cucumber/gherkin');
const Messages = require('@cucumber/messages');

var uuidFn = Messages.IdGenerator.uuid();
var builder = new Gherkin.AstBuilder(uuidFn);
var matcher = new Gherkin.GherkinClassicTokenMatcher(); // or Gherkin.GherkinInMarkdownTokenMatcher()

var parser = new Gherkin.Parser(builder, matcher);

const dir = './features';
var scenarioCount = 0;
fs
    .readdirSync('./features')
    .filter(_ => _.endsWith('.feature'))
    .forEach(f => {
        const fullPath = path.join(dir, f);
        const data = fs.readFileSync(fullPath, 'utf-8');

        var gherkinDocument = parser.parse(data);
        console.log(`## ${gherkinDocument.feature?.name}`);

        scenarioCount += gherkinDocument.feature?.children?.length

        gherkinDocument.feature.children.forEach(c => {
            console.log(`### ${c.scenario?.name}`);
        });
    })

console.log(`Scenario Count: ${scenarioCount}`)
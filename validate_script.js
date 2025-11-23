const fs = require('fs');

try {
    const content = fs.readFileSync('C:/Users/Usuario/.antigravity/ASIR_hub/script.js', 'utf8');

    // Mock browser environment
    const window = {};
    const document = { getElementById: () => ({}) };
    const navigator = {};

    // Extract topicsData object definition
    // We'll just eval the whole file but stripping the init() call and DOM manipulation
    // Actually, let's just extract the topicsData variable.

    const start = content.indexOf('const topicsData = {');
    // Find the end of the object. It's tricky with nested braces.
    // Let's just eval the whole file in a safe way by mocking everything it uses.

    const mockContent = `
        const window = {};
        const document = { 
            getElementById: () => ({ 
                addEventListener: () => {},
                classList: { add: () => {}, remove: () => {} },
                innerHTML: '',
                value: ''
            }),
            querySelectorAll: () => [],
            createElement: () => ({ innerHTML: '' }),
            querySelector: () => ({ innerHTML: '' })
        };
        const navigator = { clipboard: { writeText: () => Promise.resolve() } };
        let currentYear = 1;
        let currentSubject = 'all';
        let currentSearch = '';
        
        ${content.replace('init();', '// init();')}
        
        console.log('LMSGI Topics Count:', topicsData['LMSGI'].length);
        console.log('LMSGI Topic 6 Quiz Length:', topicsData['LMSGI'][5].quiz.length);
        console.log('LMSGI Topic 6 Quiz Content:', JSON.stringify(topicsData['LMSGI'][5].quiz, null, 2));
    `;

    fs.writeFileSync('temp_validate.js', mockContent);

} catch (e) {
    console.error('Error reading file:', e);
}

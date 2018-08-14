import { Selector } from 'testcafe';

// @ts-ignore -- no unused func
fixture(`Getting Started`).page(`https://devexpress.github.io/testcafe/example`);

// @ts-ignore -- issue w/ must return promise; or contain es2015 in tsconfig lib (its there already)
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

import { Application } from 'spectron';
import { expect } from 'chai';
import electronPath from 'electron';
import path from 'path';

const delay = time => new Promise(resolve => setTimeout(resolve, time));


describe('main window', function spec() {
  this.timeout(10000);
  const findHeader = () => this.app.client.element('.headerText');

  before(async () => {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '..', 'app')],
    });
    return this.app.start();
  });

  after(() => {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('should open window', async () => {
    const { client, browserWindow } = this.app;

    await client.waitUntilWindowLoaded();
    const title = await browserWindow.getTitle();
    expect(title).to.equal('OpenPresenter');
  });

  it('should have an h1 with the text test', async () => {
    const { client } = this.app;
    await client.waitUntilWindowLoaded();
    await client.waitForText('.headerText');

    expect(await findHeader().getText()).to.match(/^Test/);
  });

  it('should have the appbar loaded', async () => {
    const { client } = this.app;
    await client.waitUntilWindowLoaded();

    expect(await client.element('[data-qa="PageWrapper::AppBar"]').getText()).to.match(/^OpenPresenter/);
  });

  it('should have the appbar loaded', async () => {
    const { client } = this.app;
    await client.waitUntilWindowLoaded();

    expect(await client.element('[data-qa="PageWrapper::AppBar"]').getText()).to.match(/^OpenPresenter/);
  });

  it('should have the buttons showing in the appbar settings', async () => {
    const { client } = this.app;
    await client.waitUntilWindowLoaded();

    expect(await client.element('[data-qa="MainAppMenu::projectsButton"]')).to.exist;
    expect(await client.element('[data-qa="MainAppMenu::settingsButton"]')).to.exist;
  });

  it('should navigate to the next page when clicking on project button and load all three buttons', async () => {
    const { client } = this.app;
    client.waitUntilWindowLoaded();
    await client.click('[data-qa="MainAppMenu::menuButton"]');
    await delay(500);
    await client.click('[data-qa="MainAppMenu::projectsButton"]');
    await expect(await client.getUrl()).to.include('/editor/projects');
    await expect(await client.element('[data-qa="ProjectSelectorButtons::NewProject"]')).to.exist;
    await expect(await client.element('[data-qa="ProjectSelectorButtons::OpenProject"]')).to.exist;
    await expect(client.element('[data-qa="ProjectSelectorButtons::ReturnHome"]')).to.exist;
  });
});

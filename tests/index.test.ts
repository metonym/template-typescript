import Template from '../src';
import { Mode } from '../src/Template';

let template: Template;

describe('Template', () => {
  beforeEach(() => {
    template = undefined;
  });

  test('instantiation', () => {
    template = new Template({ mode: Mode.dev });
    expect(template).toBeInstanceOf(Template);
  });
});

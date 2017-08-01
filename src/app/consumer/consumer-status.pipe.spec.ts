import { ConsumerStatusPipe } from './consumer-status.pipe';

describe('ConsumerStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ConsumerStatusPipe();
    expect(pipe).toBeTruthy();
  });
});

import telemetryListener from './telemetry-listener';

test('listener logs to console', () => {
  jest.spyOn(console, 'log');
  telemetryListener('foo', {});
  expect(console.log).toHaveBeenCalledWith('telemetryListener', 'foo', {});
});

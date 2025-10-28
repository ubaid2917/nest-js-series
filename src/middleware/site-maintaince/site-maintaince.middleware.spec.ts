import { SiteMaintainceMiddleware } from './site-maintaince.middleware';

describe('SiteMaintainceMiddleware', () => {
  it('should be defined', () => {
    expect(new SiteMaintainceMiddleware()).toBeDefined();
  });
});

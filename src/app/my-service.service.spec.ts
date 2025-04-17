import { MyService } from './my-service.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    service = new MyService();
  });

  it('should say hello', () => {
    expect(service.sayHello('John')).toBe('Hello John!');
  });
});

import faker from '@faker-js/faker'; // '@faker-js/faker' olarak import edilmeli, yani sadece 'faker' kullanılmalı

export const DATA = Array(20).fill(null).map(e => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  online: faker.datatype.boolean(),
}));

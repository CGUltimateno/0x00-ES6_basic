import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const res = await Promise.allSettled([user, photo]);

  return res.map((Promise) => ({
    status: Promise.status,
    value: Promise.value || `Error: ${Promise.reason.message}`,
  }));
}

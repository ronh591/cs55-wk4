import Image from 'next/image';

const ProfileImage = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144}
    width={144}
    alt="Your Name"
  />
);

export default ProfileImage;

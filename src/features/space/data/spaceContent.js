import galleryOneImage from '../../../assets/2f71606c-8719-4e95-bab3-a8e2d0fe35af.png'
import galleryTwoImage from '../../../assets/5f85f77d-1682-47ee-b933-9747a82a9f0c.png'
import galleryThreeImage from '../../../assets/6b1e73f6-47e8-4162-9ffd-234deb98e181.png'
import galleryFourImage from '../../../assets/76f23251-0690-4ab7-bd13-a412ecda49c5.png'
import spaceHeroImage from '../../../assets/space_interior_hero_generated.png'
import spacePrivateImage from '../../../assets/space_private_dining_generated.png'
import spaceCheckinImage from '../../../assets/space_checkin_wall_generated.png'

export const spaceHero = {
  script: 'Không gian',
  title: 'NHÀ HÀNG',
  description:
    'Chả Cá Tràng An mang đến không gian ấm cúng, tinh tế, đậm chất Hà Nội xưa. Mỗi góc nhỏ đều được chăm chút để bạn tận hưởng bữa ăn ngon trong bầu không khí thư giãn và gần gũi.',
  images: {
    main: spaceHeroImage,
    sideTop: galleryThreeImage,
    sideBottom: spacePrivateImage,
  },
}

export const spaceHighlights = [
  { icon: 'HouseLine', title: 'Ấm cúng' },
  { icon: 'Sparkle', title: 'Sạch sẽ' },
  { icon: 'LockKey', title: 'Riêng tư' },
  { icon: 'UsersThree', title: 'Phù hợp tụ họp' },
]

export const featuredSpaces = [
  {
    title: 'Không gian chung',
    description: 'Thiết kế mở, thoáng đãng với tông xanh cổ điển, mang lại cảm giác gần gũi, thân thuộc.',
    image: spaceHeroImage,
  },
  {
    title: 'Khu vực yên tĩnh',
    description: 'Lý tưởng cho những bữa ăn nhẹ nhàng, trò chuyện riêng tư.',
    image: galleryTwoImage,
  },
  {
    title: 'Không gian riêng tư',
    description: 'Khu vực tách biệt, phù hợp cho tiếp khách hoặc gặp gỡ quan trọng.',
    image: spacePrivateImage,
  },
  {
    title: 'Góc ấm cúng',
    description: 'Những góc nhỏ được bố trí tinh tế, mang đến cảm giác thư giãn, ấm áp.',
    image: galleryFourImage,
  },
]

export const checkinCollage = [
  { image: spaceCheckinImage, className: 'col-span-2 row-span-2' },
  { image: galleryOneImage, className: '' },
  { image: galleryThreeImage, className: '' },
  { image: galleryTwoImage, className: 'col-span-2' },
]

export const groupSpaces = [
  {
    icon: 'UsersThree',
    title: 'Bàn nhóm nhỏ',
    subtitle: '2 - 6 người',
    description: 'Phù hợp gặp gỡ bạn bè, đối tác.',
    image: galleryOneImage,
  },
  {
    icon: 'UsersFour',
    title: 'Bàn gia đình',
    subtitle: '6 - 12 người',
    description: 'Không gian ấm cúng, sum vầy.',
    image: spacePrivateImage,
  },
  {
    icon: 'UsersThree',
    title: 'Bàn tiệc',
    subtitle: '12+ người',
    description: 'Phù hợp liên hoan, sinh nhật, họp mặt công ty.',
    image: galleryTwoImage,
  },
]

export const interiorDetails = [
  { icon: 'PaintBrush', title: 'Gam xanh cổ điển', description: 'thư thái, dễ chịu' },
  { icon: 'LampPendant', title: 'Đèn mây tre ấm áp', description: 'tạo điểm nhấn tinh tế' },
  { icon: 'FishSimple', title: 'Tranh họa tiết Việt', description: 'mang hơi thở Hà Nội' },
  { icon: 'Armchair', title: 'Nội thất gỗ tự nhiên', description: 'bền đẹp, sang trọng' },
]

export const interiorBanner = {
  image: galleryTwoImage,
  alt: 'Không gian nội thất xanh cổ điển tại Chả Cá Tràng An',
}

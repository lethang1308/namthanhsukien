import facadeImage from '../../../assets/0f69fb00-16d2-467e-a555-2310d484a6c1.png'
import heroPanImage from '../../../assets/de8c50dd-a665-48d5-9652-194a37cce66a.png'
import heroPanCutoutImage from '../../../assets/hero-pan-provided-cutout.png'
import chaCaLaVongImage from '../../../assets/d5fedfa5-e72d-4a66-bcec-1b6d5283ee7d.png'
import chaCaChienImage from '../../../assets/74e49f1f-baa2-4565-8040-7e22112a4e74.png'
import longCaImage from '../../../assets/b033b222-0767-460e-953f-6f8019655224.png'
import nemHaiSanImage from '../../../assets/f48cf32a-bdf6-489b-bf5e-55dc4a1cc191.png'
import comboTwoImage from '../../../assets/8b8fa749-95b0-4e78-b13c-132e0fe2b866.png'
import comboFourImage from '../../../assets/86069030-1520-4cf5-b94c-488658157353.png'
import comboSixImage from '../../../assets/4f8154e5-4396-48dd-b3ae-c86849865bf6.png'

export const contact = {
  address: 'Số 7, Liền kề 4, KDT Tân Tây Đô, Hà Nội',
  phone: '0961 374 566',
  email: 'checattrangan.hn@gmail.com',
  hours: '10:00 - 22:00',
}

export const navItems = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Thực đơn', href: '#thuc-don' },
  { label: 'Combo', href: '#combo' },
  { label: 'Không gian', href: '#khong-gian' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Liên hệ', href: '#lien-he' },
]

export const hero = {
  facadeImage,
  heroPanImage,
  heroPanCutoutImage,
  title: 'CHẢ CÁ TRÀNG AN',
  script: 'Tinh hoa',
  subtitle: 'Hương vị truyền thống, trọn vị Hà Thành',
  description:
    'Chả cá tươi ngon, chế biến theo công thức gia truyền, ăn kèm bún, rau thơm và mắm tôm chuẩn vị.',
}

export const serviceHighlights = [
  {
    title: 'Nguyên liệu tươi mỗi ngày',
    text: 'Cá tuyển chọn trong ngày, sơ chế sạch và giữ vị ngọt tự nhiên.',
  },
  {
    title: 'Công thức gia truyền',
    text: 'Tẩm ướp đậm đà với nghệ, riềng, thì là và hành hoa.',
  },
  {
    title: 'Không gian ấm cúng',
    text: 'Phù hợp bữa gia đình, tiếp khách và các buổi tụ họp thân mật.',
  },
]

export const featuredDishes = [
  {
    name: 'Chả Cá Lã Vọng',
    price: '139.000đ',
    image: chaCaLaVongImage,
    alt: 'Chả cá Lã Vọng trong chảo nóng với thì là và hành.',
  },
  {
    name: 'Chả Cá Chiên',
    price: '139.000đ',
    image: chaCaChienImage,
    alt: 'Đĩa chả cá chiên vàng với hành và thì là.',
  },
  {
    name: 'Lòng Cá Xào Dứa',
    price: '119.000đ',
    image: longCaImage,
    alt: 'Lòng cá xào dứa cùng hành và ớt đỏ.',
  },
  {
    name: 'Nem Hải Sản',
    price: '99.000đ',
    image: nemHaiSanImage,
    alt: 'Nem hải sản chiên giòn ăn cùng rau và nước chấm.',
  },
]

export const combos = [
  {
    name: 'Combo 2 người',
    description: '2 - 3 món cho 2 người',
    price: '299.000đ',
    image: comboTwoImage,
    alt: 'Set chả cá và món ăn kèm cho hai người.',
  },
  {
    name: 'Combo 4 người',
    description: '4 - 5 món cho 4 người',
    price: '549.000đ',
    image: comboFourImage,
    alt: 'Bàn combo chả cá với bún, rau, nem và món ăn kèm.',
  },
  {
    name: 'Combo 6 người',
    description: '5 - 6 món cho 6 người',
    price: '799.000đ',
    image: comboSixImage,
    alt: 'Mâm chả cá và nhiều món ăn kèm cho nhóm đông.',
  },
]

export const galleryImages = [
  {
    image: facadeImage,
    alt: 'Mặt tiền nhà hàng Chả Cá Tràng An trong ngày khai trương.',
  },
  {
    image: comboTwoImage,
    alt: 'Bàn ăn chả cá với bún và rau tươi.',
  },
  {
    image: comboFourImage,
    alt: 'Combo chả cá đầy đủ trên bàn gỗ.',
  },
  {
    image: heroPanImage,
    alt: 'Chảo chả cá nóng với thì là và hành.',
  },
]

export const testimonials = [
  {
    name: 'Hoàng Minh',
    role: 'Khách gia đình',
    quote:
      'Chả cá thơm ngon, không gian ấm cúng, nhân viên phục vụ rất nhiệt tình.',
  },
  {
    name: 'Thu Hương',
    role: 'Khách đặt bàn',
    quote:
      'Món ăn đậm đà, đúng vị Hà Nội. Đặc biệt là chả cá Lã Vọng và nem hải sản.',
  },
  {
    name: 'Tuấn Anh',
    role: 'Khách văn phòng',
    quote:
      'Giá cả hợp lý, đồ ăn tươi ngon. Rất thích không gian xanh mát ở đây.',
  },
]

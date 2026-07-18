import comboHeroImage from '../../../assets/c3ab765f-35a1-43cc-abd8-ea07b148567d.png'
import comboTwoImage from '../../../assets/bf1e95d0-b761-4d86-9d4a-c1405aecbeef.png'
import comboFourImage from '../../../assets/9b5792b1-f64f-498b-bd36-151c5f296b15.png'
import comboSixImage from '../../../assets/fc65efdb-b227-4962-8346-18a89da820f9.png'

export const comboHero = {
  image: comboHeroImage,
  script: 'Combo',
  title: 'ƯU ĐÃI',
  subtitle: 'Sum vầy trọn vị - Ưu đãi hết ý',
  description:
    'Combo dành cho gia đình, bạn bè và những buổi tụ họp ấm cúng với chả cá chuẩn vị Tràng An.',
}

export const comboHighlights = [
  {
    icon: 'Alarm',
    title: 'Nguyên liệu',
    subtitle: 'tươi mỗi ngày',
  },
  {
    icon: 'ChefHat',
    title: 'Chế biến tinh tế',
    subtitle: 'chuẩn vị Hà Thành',
  },
  {
    icon: 'Medal',
    title: 'Tiết kiệm hơn',
    subtitle: 'khi đặt combo',
  },
]

export const comboTabs = [
  {
    key: 'combo-2',
    icon: 'Users',
    name: 'Combo 2 người',
    description: '2 - 3 món cho 2 người',
    saving: 'Tiết kiệm đến 10%',
    active: false,
  },
  {
    key: 'combo-4',
    icon: 'UsersFour',
    name: 'Combo 4 người',
    description: '4 - 5 món cho 4 người',
    saving: 'Tiết kiệm đến 12%',
    active: true,
  },
  {
    key: 'combo-6',
    icon: 'UsersThree',
    name: 'Combo 6 người',
    description: '5 - 6 món cho 6 người',
    saving: 'Tiết kiệm đến 15%',
    active: false,
  },
]

export const comboCards = [
  {
    name: 'COMBO 2 NGƯỜI',
    description: '2 - 3 món cho 2 người',
    oldPrice: '332.000đ',
    price: '299.000đ',
    saving: '33.000đ',
    badge: '10%',
    image: comboTwoImage,
    items: ['Chả Cá Lã Vọng', 'Rau thì là xào', 'Bún', 'Lạc rang', 'Nước chấm', 'Trà đá'],
  },
  {
    name: 'COMBO 4 NGƯỜI',
    description: '4 - 5 món cho 4 người',
    oldPrice: '624.000đ',
    price: '549.000đ',
    saving: '75.000đ',
    badge: '12%',
    image: comboFourImage,
    items: ['Chả Cá Chiên', 'Rau thì là xào', 'Nấm xào thập cẩm', 'Nem Hải Sản', 'Bún', 'Trà đá'],
  },
  {
    name: 'COMBO 6 NGƯỜI',
    description: '5 - 6 món cho 6 người',
    oldPrice: '940.000đ',
    price: '799.000đ',
    saving: '141.000đ',
    badge: '15%',
    image: comboSixImage,
    items: [
      'Chả Cá Lã Vọng',
      'Lòng Cá Xào Dứa',
      'Rau thì là xào',
      'Nem Hải Sản',
      'Nấm xào thập cẩm',
      'Bún',
      'Lạc rang, Nước chấm',
      'Trà đá',
    ],
  },
]

export const partyCombos = [
  {
    icon: 'User',
    people: '8 - 10 người',
    price: 'Từ 1.190.000đ',
    note: 'Tiết kiệm đến 15%',
  },
  {
    icon: 'UsersThree',
    people: '11 - 15 người',
    price: 'Từ 1.690.000đ',
    note: 'Tiết kiệm đến 17%',
  },
  {
    icon: 'UsersFour',
    people: '16 - 20 người',
    price: 'Từ 2.190.000đ',
    note: 'Tiết kiệm đến 18%',
  },
  {
    icon: 'UsersThree',
    people: '21+ người',
    price: 'Liên hệ để nhận ưu đãi riêng',
    note: 'Ưu đãi tốt nhất',
  },
]

export const reasons = [
  {
    icon: 'FishSimple',
    title: 'Tiết kiệm hơn',
    subtitle: 'so với gọi lẻ',
  },
  {
    icon: 'SealCheck',
    title: 'Món ăn phong phú',
    subtitle: 'cân bằng dinh dưỡng',
  },
  {
    icon: 'UsersThree',
    title: 'Phù hợp cho gia đình',
    subtitle: 'bạn bè, công ty',
  },
  {
    icon: 'HandHeart',
    title: 'Phục vụ nhanh chóng',
    subtitle: 'tận tâm chu đáo',
  },
  {
    icon: 'HouseLine',
    title: 'Không gian ấm cúng',
    subtitle: 'trải nghiệm trọn vẹn',
  },
]

export const faqs = [
  'Combo đã bao gồm VAT chưa?',
  'Có thể thay đổi món trong combo không?',
  'Có phục vụ mang về hoặc giao hàng không?',
  'Cần đặt trước combo tiệc không?',
]

export const comboTestimonials = [
  {
    name: 'Hoàng Minh',
    role: 'Khách gia đình',
    quote: 'Combo 4 người rất đầy đặn, món nào cũng ngon, chả cá thơm, thì là xanh tươi. Gia đình mình rất thích!',
  },
  {
    name: 'Thu Hương',
    role: 'Khách đặt bàn',
    quote: 'Đặt combo cho buổi họp lớp 12 người, mọi người đều khen. Phục vụ nhanh, giá hợp lý mà chất lượng tuyệt vời.',
  },
  {
    name: 'Tuấn Anh',
    role: 'Khách văn phòng',
    quote: 'Tiết kiệm hơn gọi lẻ mà món vẫn rất đa dạng. Sẽ tiếp tục ủng hộ Chả Cá Tràng An!',
  },
]
